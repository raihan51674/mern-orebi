import validator from 'validator';
import bcrypt from "bcrypt";
import userModel from '../models/userModel.js'
import jwt from 'jsonwebtoken';



//user login section
const createToken = (user)=>{
  return jwt.sign({
    _id: user._id,
    email: user.email,
    name: user.name,
    isAdmin : user.isAdmin,
  },
process.env.JWT_SECRET,{expiresIn:"10h"});
};

const userLogin = async (req,res)=>{
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

    const isMatch = await bcrypt.compare(password,user.password);

    if(isMatch){
      const token = createToken(user);
      res.json({success:true,token, message:"user logged in successfully"})

    }else{
      return res.json({success:false, message: "Invalid Credentials try again"})
    }





    
  } catch (error) {
    console.log('user Login Error', error);
        res.json({success:true, message: error?.message});
  }
};







//user register section
const userRegister = async (req,res)=>{
    try {

      const {name,email,password, isAdmin}=await req.body;
      console.log(req.body);



      //body validation check
      if(!name){
        return res.send({
          success:false,
          message : "Name is required",
        })
      }
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


      //Email validation
      if(!validator.isEmail(email)){
        return res.json({
            success:false,
            message :"please enter a valid email address",
        });
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
            message :"password length should be equal or grater then 8 charecter",
        });
      }

       //hashing users password
     const salt = await bcrypt.genSalt(10);
     const encryptedPassword= await bcrypt.hash(password,salt);


      //Register a new users for database
      const newUser = new userModel({
        name,
        email,
        password: encryptedPassword,
        isAdmin,
      });

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


//admin section
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





    

    // const {email,password} = req.body;

    // if(
    //   email === process.env.ADMIN_EMAIL &&
    //   password===process.env.ADMIN_PASSWORD
    // ){
    //   const token= jwt.sign(email + password, process.env.JWT_SECRET);
    //   res.json({success:true,token,message:"welcome admin user"})

    // }else{
    //   res.json({success:false,message:"invalid credentials"})
    // }

    
   } catch (error) {
    console.log('Admin login Error', error);
        res.json({success:true, message: error?.message});
    
   }
};



// user remove section
const removeUser = async (req,res)=>{
   try {
    await userModel.findByIdAndDelete(req.body._id)
    res.json({success:true,message:"user Deleted successfully"})
    
   } catch (error) {
    console.log('User remove Error', error);
        res.json({success:true, message: error?.message});
    
   }

};
const updateUser = async (req,res)=>{
  try {
    const {_id, name, email, password}=req.body;
    const user = await userModel.findById(_id);

    if(!user){
      return res.json({success:false, message: "User Not found!"});
    }
    //name change
    if(name) user.name=name;
    //email update
    if(email){
      if(!validator.isEmail(email)){
        return res.json({success:false, message:"please enter a valid email address"

        })
      }
      user.email=email;
    }
    //password change
    if(password){
      if(password.length <8){
        return res.json({
            success:false,
            message :"password length should be equal or grater then 8 charecter",
        });
      }
      const salt = await bcrypt.genSalt(10);
      user.password=await bcrypt.hash(password, salt);
    }

    //updateing the user
    await user.save()
    res.json({success:true, message:"user updated successfully"})
    
  } catch (error) {
    console.log('User Update Error', error);
        res.json({success:true, message: error?.message});
    
  }
};
const getUsers = async (req,res)=>{
    try {
      const total = await userModel.countDocuments({});
      const users = await userModel.find({});
      res.json({success:true, total,users})
      
    } catch (error) {
      console.log('All User gets Error', error);
        res.json({success:true, message: error?.message});
      
    }
};


export {
    updateUser,
    userLogin,
    userRegister,
    adminLogin,
    removeUser,
    getUsers};