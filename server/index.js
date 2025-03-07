import express from "express";
import 'dotenv/config'
import cors from 'cors'
import dbConnect from "./config/mongodb.js"; //must .js add only use server
import userRouter from "./routes/userRouter.js";
import productRouter from "./routes/productRouter.js";
const app =express();

//use data post in frontend to database
app.use(cors());
app.use(express.json());



const port = process.env.PORT|| 3000;
dbConnect()

app.get('/',(req, res)=>{
    res.send('hello from  orebi api server');
});

//all router root
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);



app.listen(port, () => {
    console.log(`Server is runing on port: ${port}`)
  })