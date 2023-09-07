const express = require('express')
const mongoose = require('mongoose') ;
const app = express () ;
const PORT = 4000 ;
const dotenv = require('dotenv');
const cors = require('cors') ;


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

require('./Modeks/User_Model');
require('./Modeks/Post_Model');

app.use(cors());
app.use(express.json());

app.use(require('./routes/User_Route'));
app.use(require('./routes/Post_Route'));
app.use(require('./routes/File-Route'));


app.listen(PORT , ()=>{
    console.log(`You are on PORT : ${PORT}`)
})