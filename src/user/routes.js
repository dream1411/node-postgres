const { Router } = require('express')
const controller = require("./controller")
const verifyToken = require('../middleware/verifyToken')

const router = Router()
router.get('/', (req,res)=>{
    res.send(200)
})
router.get('/userAll', verifyToken, controller.getUsers)
router.get('/userById/:id',verifyToken, controller.getUserById)
router.post('/register', controller.register)
router.post('/login', controller.login)
module.exports = router