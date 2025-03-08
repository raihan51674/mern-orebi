import React, { useState } from 'react';
import { IoMdCloudUpload } from "react-icons/io";
import Title from '../components/Title';
import Input, { Label } from '../components/ui/input';
const Add = () => {
  const [formData, setformData]=useState({
    name :"",
    description:"",
    brand:"",
    price:"",
    discountPercent:"",
    _type:"",
    category:"",
    offer:false,
    isAvailable:true,
    badge:false,
    tags:[],
    image1:null,
    image2:null,

  })

  const handleImageChange=(e)=>{
    const { id, files } = e.target;
    setformData({
      ...formData,
      [id]:files[0],
    })
  }

  const handleChange=(e)=>{
    const {name, value, type, checked}=e.target;
    if(type==="checkbox"){
      setformData({
        ...setformData,[name]:checked,
      })

    }else{
      setformData({...formData, [name]:value})
    }
  }







  return (
    <form className='flex flex-col items-start gap-3 w-full pb-60'>
      <Title>
        Upload products to Database
      </Title>
      <div className='flex flex-wrap items-center gap-5 '>
       {['image1',"image2"].map((imageId)=>(
         <label htmlFor={imageId} key={imageId}>
         <div className='text-gray-500 border-2 border-dashed px-4 py-2 border-gray-500 hover:border-black duration-300 ease-in-out cursor-pointer rounded-md'>
          
           {formData[imageId] ? (<img src={URL.createObjectURL(formData[imageId])} alt="preview" className='rounded-md  w-20 h-20 object-cover mb-2' />):(<IoMdCloudUpload className='text-5xl'/>)}

           <input type="file" hidden id={imageId} onChange={handleImageChange} />
           {formData[imageId]?"change":"upload"}
         </div>
         
         </label>
       ))}
      </div>
      <div className='flex flex-col gap-1'>
        <Label htmlFor='name'>Product Name</Label>
        <Input type='text'placeholder="Type product name here..." name="name" onChange={handleChange} />
      </div>
      <div className='flex flex-col gap-1 '>
        <Label htmlFor='name'>Product Description</Label>
        <textarea type='text'placeholder="Type product description here..." name="description" rows={4} onChange={handleChange} className='border px-4 py-2 border-gray-500 rounded-md max-w-lg ' />
      </div>
      <div className='flex flex-col gap-1'>
        <Label htmlFor='name'>Product Brand</Label>
        <Input type='text'placeholder="Type product brand here..." name="brand" onChange={handleChange} />
      </div>
      <div className='flex flex-col md:flex-row items-center gap-2 md:gap-5'>
      <div className='flex flex-col gap-1'>
        <Label htmlFor='name'>Product Price</Label>
        <Input type='number'placeholder="Enter prices" name="price" onChange={handleChange} />
      </div>
      <div className='flex flex-col gap-1'>
        <Label htmlFor='name'>Product Discount %</Label>
        <Input type='number'placeholder="product discount %" name="discountPercent" onChange={handleChange} />
      </div>
      </div>
      <div>
      <div className='flex flex-col gap-1 relative'>
        <Label htmlFor='name'>Product Type</Label>
        <select name='type' onChange={handleChange} className='border px-4 py-2 border border-gray-500 rounded-md max-w-[250px] appearance-none relative'>
          <option value=''> Select type</option>
          <option value="new_arrivals"> New Arrivals</option>
          <option value="best_sellers"> Best Sellers</option>
          <option value="special_offers"> Special Offers</option>
          <option value="promotions"> Promotions</option>
          <IoIsArrowDown/>
        </select>
      </div>
      </div>
    </form>
  )
}

export default Add
