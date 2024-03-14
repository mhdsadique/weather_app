

const express=require("express")
const mongoose=require("mongoose")
const { userRouter } = require("./rout/rout.js")
const { connection } = require("./db/db")
var cors = require('cors')
var app = express()
app.use(cors())
app.use(express.json())
app.use("/rout",userRouter)
app.get("/",(req,res)=>{
   res.send("done it is response")
})
app.listen(8000,async()=>{
   console.log("server running 8010")
   try{
   await connection
     console.log("server connected to db");
   }catch(e){
     console.log(e)
     console.log("server not   connected to db");
   }
})
