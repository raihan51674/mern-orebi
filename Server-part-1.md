### 1.Server setup:4
#### server all use postman
```js
//1.npm init -y 2.add("start":"nodemon index.js") and ""type": "module" 3.npm i express
//insex.js
import cors from 'cors';
import 'dotenv/config';
import express from "express";
import connectCloudinary from "./config/cloudinary.js";
import dbConnect from "./config/mongodb.js"; //must .js add only use server
import productRouter from "./routes/productRouter.js";
import userRouter from "./routes/userRouter.js";
const app =express();

app.use(cors());
app.use(express.json());
const port = process.env.PORT|| 3000;
dbConnect()
connectCloudinary()
app.get('/',(req, res)=>{
    res.send('hello from server');
});
//user operation
app.use('/api/user', userRouter);
//product operation
app.use('/api/product', productRouter);
app.listen(port, () => {
    console.log(`Server is run port: ${port}`)
  })
```
#### .env.local
```js
//npm i dotenv
//import "dotenv/config"
const port = process.env.PORT|| 3000;
MONGODB=
PORT=
...

```
### MongoDB connection
```js
//1.mongoDb account and url set
//2.npm i mongoose
//mogodb.js
import mongoose from 'mongoose';
const dbConnect = async()=>{
 try {
mongoose.connection.on('connected',()=>{
console.log('DB is connected!'); });
await mongoose.connect(process.env.MONGODB_URL);
}
 catch (error) {
console.log('mongodb connection error', error); }
};
export default dbConnect;
```
### MongoDB Schema create:
```js
//user Schema create:
import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name :{type: String, require: true},
    email :{type : String, require: true, unique:true},
    password : {type:String, require:true},
    avatar : {type : String},
    isAdmin : {type:Boolean},
    userCart :{type:Object, default:{}},
},
{minimize:false} //default ar jonno dite hobe
);
const userModel = mongoose.models.user || mongoose.model('user',userSchema);
export default userModel;
```
### Router Create
```js
//userRouter.js
import express from "express";
import { adminLogin, getUsers, removeUser, updateUser, userLogin, userRegister } from "../controllers/userController.js";
import adminAuth from "../middleware/adminAuth.js";

const userRouter = express.Router();
userRouter.post('/register',userRegister);
userRouter.post('/login',userLogin);
userRouter.post('/admin',adminLogin);
userRouter.post('/remove',removeUser);
userRouter.put('/update/:id',updateUser);
userRouter.get('/users',adminAuth,getUsers);
export default userRouter;
```
### userController create
```js
//1. npm i validator and npm i bcrypt and
//useControler.js

//user register section
const userRegister = async (req,res)=>{
try {
const {name,email,password, isAdmin}=await req.body;
console.log(req.body);
if(!name){
return res.send({
success:false,
message : "Name is required", })
}
if(!email){
return res.send({
success:false,
message : " Email is required", })     
}
if(!password){
return res.send({
success:false,
message : " Password is required", })  
}
//Email validation
if(!validator.isEmail(email)){
return res.json({
success:false,
message :"please enter a valid email address", }); 
}
//check user status
const existingUser = await userModel.findOne({email});
if(existingUser){
return res.send({success:true,message:"user Already exits."})
}
//password validation
if(password.length <8){
return res.json({
 success:false,
 message :"password length should be equal or grater then 8 charecter",});    
}
//hashing users password
const salt = await bcrypt.genSalt(10);
const encryptedPassword= await bcrypt.hash(password,salt);
//Register a new users for database
const newUser = new userModel({
name,
email,
password: encryptedPassword,
isAdmin,});
//save user in database
 await newUser.save()
res.json(
 {
success : true,
message : "User Register successfully",
}
 )    
} catch (error) {
console.log('user Register Error', error);
res.json({success:true, message: error?.message});   
}
};
```
### useController(login)
```js
//user login
//1.npm i jsonwebtoken
//user login section
const createToken = (user)=>{
 //all info database ar sathy milai dekbe
return jwt.sign({
_id: user._id,
email: user.email,
name: user.name,
isAdmin : user.isAdmin, },
process.env.JWT_SECRET,{expiresIn:"10h"}); };

const userLogin = async (req,res)=>{
try {
const {email, password} =req.body;
 if(!email){
return res.send({success:false, message : " Email is required",})}

if(!password){return res.send({success:false,message : " Password is required",})}
//if user exits..
const user = await userModel.findOne({email});
if(!user){
return res.json({success:false,message:"user doesn't exits"}) }

const isMatch = await bcrypt.compare(password,user.password);
 //check database 
if(isMatch){
const token = createToken(user);
res.json({success:true,token, message:"user logged in successfully"})
}else{
return res.json({success:false, message: "Invalid Credentials try again"}) }
     
} catch (error) {
console.log('user Login Error', error);
res.json({success:true, message: error?.message}); }
};

```
#### userControler
```js
//admin login
const adminLogin = async (req,res)=>{
try {
const {email, password} =req.body;
    if(!email){
      return res.send({
        success:false,
        message : " Email is required",
      })
    }
    if(!password){
      return res.send({
        success:false,
        message : " Password is required",
      })
    }
    //if user exits..
    const user = await userModel.findOne({email});
    if(!user){
      return res.json({success:false,message:"user doesn't exits"})
    }
    if(!user?.isAdmin){
      return res.json({success:false,message:"you are not authrized to login"})
    }
    const isMatch = await bcrypt.compare(password,user.password);
    if(isMatch && user?.isAdmin){
      const token = createToken(user);
      res.json({success:true,token, message:"Admin logged in successfully"})
    }else{
      return res.json({success:false, message: "password not matched try again"})
    }
   } catch (error) {
    console.log('Admin login Error', error);
    res.json({success:true, message: error?.message});
   }
};
```











