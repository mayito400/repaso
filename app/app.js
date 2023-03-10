//import { express } 
 //const express=require("express");
 import express from "express";
 import message from "./config/message";
 import enviroment from "./config/enviroment";
 const app = express();
 app.set("PORT",process.env.PORT || 3000) ;
 
/*
Babel al instalarse viene con las actualizaciones reciente de EMJ
 */
export default app;