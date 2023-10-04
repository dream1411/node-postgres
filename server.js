const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 3000

const studentRoutes = require('./src/student/routes')
const usersRoutes = require('./src/user/routes')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("This is my API running...")
})

app.use('/api/v1/students', studentRoutes)
app.use('/api/v1/users', usersRoutes)

app.listen(port, () => console.log(`app listenin on port ${port}`))



// app.get("/about",(req,res)=>{
//     res.send("This is my about route")
// })

// module.exports =app