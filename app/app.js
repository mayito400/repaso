//import { express } 
 //const express=require("express");
 import express from "express";
 import message from "./config/message";
 const app = express();
 
app.listen(8080, ()=>{
    //console.log("hOLAaaaaa")
    message("Hola Mundo Hijueputa", "danger")
})
/*
Babel al instalarse viene con las actualizaciones reciente de EMJ
 */