
import { v2 as cloudinary } from 'cloudinary';
import productModel from '../models/productModel.js';

const addProduct=async (req,res)=>{
    try {
        const {_type, name,price,discountPercent,category, brand,badge,isAvailable,offer,description,tags}=req.body;
         

        const image1 = req.files.image1 && req.files.image1[0];
        const image2 = req.files.image2 && req.files.image2[0];
        

        if (!name){
          return  res.send({success:false, message:"product name is required"})
        }
        if (!price){
            return  res.send({success:false, message:"product price is required"})
        }
        if (!category){
            return  res.send({success:false, message:"product category is required"})
        }
        if (!description){
            return  res.send({success:false, message:"product description is required"})
        }
    
         
        let images =[image1,image2].filter((item)=>item !== undefined);


        let imagesUrl= await Promise.all(
            images.map(async(item)=>{
                let result = await cloudinary.uploader.upload(item?.path,{
                    resource_type:'image'
                })
                return result.secure_url;
            }) 
        )



        let parsedTags;
        try {
            parsedTags=JSON.parse(tags)
            
        } catch (error) {
            parsedTags = tags ? tags.split(',').map((tag) => tag.trim()) : [];
            
        }


        const productData={
            _type:_type? _type:"",
            name,
            price:Number(price),
            discountPercent:Number(discountPercent),
            category,
            brand:brand? brand:"",
            badge:badge==="true"?true:false,
            isAvailable:isAvailable==="true"?true:false,
            offer:offer==="true"?true:false,
            description,
            tags:tags?parsedTags:[],
            images:imagesUrl,

        }
        const product = new productModel(productData)
        await product.save()
        
        return res.send({success:false, message:`${name} added and save product in the database successfully`})


        
    } catch (error) {
        console.log("product add error", error);
       return res.json({success:false, message:error.message})
        
        
    }
};



const removeProduct= async (req,res)=>{
    try {
        await productModel.findByIdAndDelete(req.body._id)
        return res.json({success:true,message:"product remove successfully"})
        
    } catch (error) {
        console.log("product remove error",error);
        return res.json({success:false,message:error.message})
        
        
    }
};



const listProduct=async (req,res)=>{

    try {
        const total = await productModel.countDocuments({})
        const products= await productModel.find({})
        if (products.length){
            res.send({success:true,total,products})
            
        }else{
            return res.json({success:false,message:"Not product Found"})
        }
        

    } catch (error) {
        console.log("product list error",error);
        return res.json({success:false,message:error.message})
    }
  
};
const singleProduct=async (req,res)=>{
    try {
        const {_id}=req.body;
        const product=await productModel.findById(_id)
        if (!product){
            return res.json({success:false,message:"Not product Found"})
        }
        res.send({success:true,product})
        
    } catch (error) {
        console.log("single product error",error);
        res.json({success:false,message:error.message})
    }
};

export { addProduct, listProduct, removeProduct, singleProduct };

