const express = require('express') ;
const mongoose = require('mongoose') ;
const bodyParser = require('body-parser');


const app = express() ; 
const port = process.env.port || 8080 ;

mongoose.connect("mongodb+srv://Bhavesh299:Bhavesh299@cluster0.zv31snk.mongodb.net/?retryWrites=true&w=majority",{useNewUrlParser:true}) ;

const db = mongoose.connection ;

db.on("Error", () => {

    console.log("Error");

}) ;
db.once("open", () =>{

    console.log("Connection Sucessfully Done");
})

app.get('/', (req , res) =>{

    res.send("Bhavesh_chavhan") ;

}) ;
app.listen(port) ;