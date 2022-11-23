const express = require('express') ; 
const Router = express.Router() ;
const Crud = require('../models/crud') ;

Router.get("/",(req , res ) =>{

    res.render("index")
})

//  Create or insert a data
Router.post("/add",(req , res ) =>{

    const name = req.body.name ;
    const email = req.body.email ; 

    // console.log(name, email)
    const crud = new Crud({
        name,
        email
    }) ;
    crud.save( error =>{
        if(error){
            console.log("Error") ;
        }
        else{
            res.redirect("/") ;
        }
    })
});

// Find data

Router.get("/show",(req , res ) =>{

    Crud.find((err,doc)=>{
        if(err) throw err ;

        // console.log(doc) ;
        res.render("show",{

            Student : doc
        })

    });
});


module.exports = Router ;