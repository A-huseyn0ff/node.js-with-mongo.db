// import express from 'express'
// import cors from 'cors'
// import mongoose from 'mongoose'
// import dotenv from 'dotenv'
// // const mongoose=require("mongoose")
// // const dotenv=require("dotenv")
// const app=express()
// dotenv.config()
// app.use(express.json())
// app.use(cors())

// const {Schema}=mongoose;

// const UserSchema=new Schema(
//     {
//         name:{type:String,required:true},
//         surename:{type:String,required:true},
//         age:{type:Number,required:true},

//     },
//     {timestamps:true}
// )
// const Users=mongoose.model("users",UserSchema)

// app.get("/",async (req,res)=>{
//     try {
//         const users=await Users.find({})
//         res.send(users)
//     } catch (error) {
//         res.status(500).json({message:error})
//     }
// })
// app.get("/:id",async (req,res)=>{
//     try {
//         const user=await Users.findById(req.params.id)

//             res.send(user)

//     } catch (error) {
//         res.status(500).json({message:error})
//     }
// })
// app.post("/",(req,res)=>{
//     const user=new Users({
//         name:req.body.name,
//         surename:req.body.surename,
//         age:req.body.age,

//     })
//     user.save()
//     res.send({message:"User Created"})
// })
// app.put("/:id",async (req,res)=>{
//     try {
//         const user=await Users.findByIdAndUpdate(req.params.id)

//         if(user){
//             user.name=req.body.name,
//             user.surename=req.body.surename,
//             user.age=req.body.age,

//             await user.save()
//             res.json(user)
//         }else{
//             res.status(404).json({message:"Not Found"})
//         }
//     } catch (error) {
//         res.status(500).json({message:error})
//     }
// })
// app.delete("/:id",async (req,res)=>{
//     try {
//        await Users.findByIdAndDelete(req.params.id)
//         res.status(200).json({message:"User Deleted"})

//     } catch (error) {
//         res.status(500).json({message:error})
//     }
// })
// const PORT=process.env.PORT
// const url=process.env.CONNECTION_URL.replace("<password>", process.env.PASSWORD)

// mongoose.connect(url).catch(err=>console.log("Db not connect" + err))

// app.listen(PORT,()=>{
//         console.log("Server Connection");
// })
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

const { Schema } = mongoose;
const UserScheme = new Schema(
  {
    name: { type: String, required: true },
    surname: { type: String, required: true },
    age: { type: Number, required: true },
  },
  { timestamps: true }
);
const Users = mongoose.model("data", UserScheme);


app.get("/", async (req, res) => {
  const data = await Users.find({});
  res.send(data);
});


app.get("/:id", async (req, res) => {
  const id = req.params.id;
  const data = await Users.findById(id);
  res.send(data);
});


app.post("/", async (req, res) => {
  const data =  new Users({
    name: req.body.name,
    surname: req.body.surname,
    age: req.body.age,
  });
  data.save();
  res.send({ message: "User Created" });
});


app.delete("/:id", async (req, res) => {
  const id =  req.params.id;
  const data = await Users.findByIdAndDelete(id);
  res.send(data);
});


app.put("/:id", async (req, res) => {
  const id = req.params.id;
  const data = await Users.findByIdAndUpdate(id,req.body);
  res.send(data);
});


const PORT = process.env.PORT;
mongoose.connect('mongodb+srv://akif:akif123@atlascluster.8zpslq0.mongodb.net');
app.listen(PORT,()=>{
    console.log('Serverimize xos geldiniz');
})
