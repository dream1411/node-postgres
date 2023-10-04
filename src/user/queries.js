const getUsers = "SELECT * FROM users";
const getUserById = "SELECT * FROM users WHERE id = $1";
const register = 'INSERT INTO users (username, password) VALUES ($1, $2)';
const login = 'SELECT * FROM users WHERE username = $1';
module.exports = {
    getUsers,
    getUserById,
    register,
    login
}