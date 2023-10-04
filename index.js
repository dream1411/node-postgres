const express =require('express')
const app =express()
const port = 3000

app.listen(port,() => console.log(`app listenin on port ${port}`))

app.get("/",(req,res)=>{
    res.send("This is my API running...")
})

app.get("/about",(req,res)=>{
    res.send("This is my about route")
})

module.exports =app