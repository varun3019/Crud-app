const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/route');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express()

app.use(cors())
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use("/",router)


let url = 'mongodb://127.0.0.1/crud'

mongoose.connect(url)
    .then(() => {
        console.log("Successfully connected to MongoDB");
    })
    .catch((error   ) => {
        console.error("Error connecting to MongoDB:", error);
    });

app.listen(4000,()=>
{
    console.log("Server is running");
})