import express from "express";
import db from '../models/index'
let homeControl  = async(req,res) => {
   
    let data = await db.User.findAll();
    return res.render('home.ejs',{data:data})

}

module.exports ={
    homeControl
}