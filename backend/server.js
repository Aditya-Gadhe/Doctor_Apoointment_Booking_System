import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'

//app config
const app = express()
const port = process.env.PORT || 4000 
connectDB()
connectCloudinary()

//middlewares
app.use(express.json()) //whenwver we make any req the req will parse through this fun
app.use(cors()) //allow frontemd to connect eith backend

//api endpoint
app.get('/',(req,res)=>{
    res.send("api working")
})

app.listen(port,()=>{
    console.log("server is listinig on ",port)
})