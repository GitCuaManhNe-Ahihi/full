import express from "express";

let homeControl  = (req,res) => {
    
    return res.render('home.ejs')

}

module.exports ={
    homeControl
}