const pool = require('../../db')
const queries = require('./queries')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const getUsers = (req, res) => {
    pool.query(queries.getUsers, (error, results) => {
        if (!results) throw res.status(500);
        console.log(results);
        res.status(200).json(results.rows)
    })
}
const getUserById = (req, res) => {
    const id = parseInt(req.params.id)
    pool.query(queries.getUserById,[id], (error, results) => {
        if (!results) throw res.status(500);
        console.log(results);
        res.status(200).json(results.rows)
    })
}
const register = async (req, res) => {
    const { username, password } = req.body;
    console.log('register');
    console.log(req.body);
    try {
        // Hash and salt the password
        const saltRounds = 10; // You can adjust the number of salt rounds
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const values = [username, hashedPassword];
        await pool.query(queries.register, values);
        console.log('User registered successfully');
        res.status(200).json({ message: 'User registered successfully.' });
      } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'An error occurred while registering the user.' });
      }
}
const login = async (req, res) => {
    const { username, password } = req.body;
    console.log(req.body);
    try {
        // Retrieve the user from the database by username
        const userResult = await pool.query(queries.login, [username]);
        console.log(userResult.rows[0]);
        // Check if a user with the provided username exists
        if (userResult.rows.length === 0) {
          return res.status(401).json({ error: 'Invalid credentials' });
        }
        // Compare the hashed password from the database with the provided password
      
        const user = userResult.rows[0];
        const passwordMatch = await bcrypt.compare(password, user.password);
    
        if (!passwordMatch) {
          return res.status(401).json({ error: 'Invalid credentials' });
        }
        const token = jwt.sign(
            { userId: user.id, username: user.username },
            'node-api', // Replace with your own secret key
            { expiresIn: '1h' } // Token expires in 1 hour
          );
        res.status(200).json({ message: 'Login successful' ,data:token });
      } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ error: 'An error occurred during login' });
      }
}
module.exports = {
    getUsers,
    getUserById,
    register,
    login
}