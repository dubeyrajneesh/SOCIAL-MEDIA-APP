import express from 'express' ;
import mongoose from 'mongoose' ;
const app = express () ;
const PORT = 4000 ;
import dotenv from 'dotenv' ;


dotenv.config() ;
const USERNAME= process.env.DB_USERNAME;
const PASSWORD= process.env.DB_PASSWORD;
const MONGODB_URL = `mongodb+srv://${USERNAME}:${PASSWORD}@reactogram.vexazst.mongodb.net/reactogram?retryWrites=true&w=majority` ;

mongoose.connect(MONGODB_URL, {useNewUrlParser:true})

mongoose.connection.on('connected' , ()=>{
    console.log("DB is connected")
})

mongoose.connection.on('disconnected' , ()=>{
    console.log("Oops DB is disconnected")
})

mongoose.connection.on('error' , (error)=>{
    console.log("Some error while connecting to DB")
})

app.listen(PORT , ()=>{
    console.log(`You are on PORT : ${PORT}`)
})