import express from "express";
import 'dotenv/config'
import dbConnect from "./config/mongodb.js"; //must .js add only use server
const app =express();
const port = process.env.PORT|| 3000;
dbConnect()

app.get('/',(req, res)=>{
    res.send('hello from  orebi api server');
});



app.listen(port, () => {
    console.log(`Server is runing on port: ${port}`)
  })