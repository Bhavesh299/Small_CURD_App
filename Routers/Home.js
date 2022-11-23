const express = require('express') ; 
const Router = express.Router() ;
const Crud = require('../models/crud') ;

Router.get("/",(req , res ) =>{

    res.render("index")
})

//  Create or insert a Data

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

// Find Data

Router.get("/show",(req , res ) =>{

    Crud.find((err,doc)=>{
        if(err) throw err ;

        // console.log(doc) ;
        res.render("show",{

            Student : doc
        })

    });
});

// Update Data

Router.get("/edit/:id",(req , res)=>{

    // console.log(req.params.id) ;

    Crud.findOneAndUpdate({_id: req.params.id},req.body,{new:true},(err,doc) =>{

        if(err){
            console.log( "Can't Updated") ;
        }
        else{
            res.render("edit",{Data:doc}) ;
        }
    })

}) ;

Router.post("/edit/:id", (req,res)=>{

    Crud.findByIdAndUpdate({_id:req.params.id},req.body,{new:true},(err,doc) =>{

        if(err){
            console.log( "Can't Update") ;
        }
        else{
            res.redirect("/show")
        }
    })

});

module.exports = Router ;