import cors from 'cors';
import 'dotenv/config';
import express from "express";
import connectCloudinary from "./config/cloudinary.js";
import dbConnect from "./config/mongodb.js"; //must .js add only use server
import productRouter from "./routes/productRouter.js";
import userRouter from "./routes/userRouter.js";
const app =express();

//use data post in frontend to database
app.use(cors());
app.use(express.json());



const port = process.env.PORT|| 3000;
dbConnect()
connectCloudinary()

app.get('/',(req, res)=>{
    res.send('hello from  orebi api server');
});

//all router root
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);



app.listen(port, () => {
    console.log(`Server is runing on port: ${port}`)
  })