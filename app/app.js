//import { express } 
 //const express=require("express");
 import express from "express";
 import message from "./config/message";
 import enviroment from "./config/enviroment";
 import allRoutes from "./routes/user.routes";
 const app = express();
 app.set("PORT",process.env.PORT || 3000) ;
 
 app.use(express.json());
 app.use("/api",allRoutes);
/*
Babel al instalarse viene con las actualizaciones reciente de EMJ
 */
export default app;