

const express=require("express")
const {UserModel}=require("../model/model.js")
var jwt = require('jsonwebtoken');
const userRouter=express.Router()
userRouter.post("/register",async(req,res)=>{
    const {lastName,firstName,email,password}=req.body
    try{
        
                        const user =new UserModel({lastName,firstName,email,password})
                        await user.save()
                        // .insertOne()
                        res.send({msg:"New Users Has Been registered"})
        // bcrypt.hash(password, 5,async(err, hash) =>{
        //     if(err){
        // res.send({msg:"Can not register Something went wrong",err:err.message})
        //     }
        //     else{
        //     }
        // });

    }catch(err){
        res.send({msg:"Can not register Something went wrong",err:err.message})
    }
})

userRouter.post("/login",async(req,res)=>{
    const {email,password}=req.body
    try{
        const user=await UserModel.find({email,password})
        if(user.length>0){
        // {
        //   bcrypt.compare(password, user[0].password, (err, result)=> {
        //       if(result){
                  
                  var token = jwt.sign({ userID:user[0]._id }, 'totoken');
                    res.send({msg:"Logged in","token":token})
            }
    //         else{
    //               res.send({msg:"Can not register Something went wrong",err:err.message})

    //           }
        //   }); }
      else{
        res.send({msg:"Wrong Credentials---"})

      }
    }catch(err){
        res.send({msg:"Can not register Something went wrong",err:err.message})
    }
})

module.exports={
    userRouter
}