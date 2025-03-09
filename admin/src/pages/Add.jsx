import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { IoIosArrowDown, IoMdAdd, IoMdCloudUpload } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { serverUrl } from '../../config';
import Title from '../components/Title';
import Input, { Label } from '../components/ui/input';
const Add = ({token}) => {
  const [loading, setLoading] = useState(false)
  const [formData, setformData] = useState({
    name: "",
    description: "",
    brand: "",
    price: "",
    discountPercent: "",
    _type: "",
    category: "",
    offer: false,
    isAvailable: true,
    badge: false,
    tags: [],
    image1: null,
    image2: null,

  })
   const navigate =useNavigate()
  const handleImageChange = (e) => {
    const { id, files } = e.target;
    setformData({
      ...formData,
      [id]: files[0],
    })
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setformData({
        ...formData,
        [name]: checked,
      });


    } else {
      setformData({ ...formData, [name]: value })
    }
  }

  const handleUploadProduct = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const data= new FormData()
      Object.entries(formData).forEach(([key, value])=>{
        if (value instanceof File){
          data.append(key,value)
        }else{
          data.append(key, value)
        }
       
        
      })
      const response = await axios.post(serverUrl + '/api/product/add',data,{
        headers :{
          token,
          "Content-Type" :'multipart/form-data',

        } 
      })
      const responseData = await response?.data;
      if(responseData?.success){
       toast.success(responseData?.message)
       navigate("/list")
      }else{
       toast.error(responseData?.message)
      }
    } catch (error) {
      console.log("Product database uploading error",error);
      toast.error(error.message);
      
    } finally{
      setLoading(false)
    }

  }





  return (
    <form onSubmit={handleUploadProduct} className='flex flex-col items-start gap-3 w-full pb-10'>
      <Title>
        Upload products to Database
      </Title>
      <div className='flex flex-wrap items-center gap-5 '>
        {['image1', "image2"].map((imageId) => (
          <label htmlFor={imageId} key={imageId}>
            <div className='text-gray-500 border-2 border-dashed px-4 py-2 border-gray-500 hover:border-black duration-300 ease-in-out cursor-pointer rounded-md'>

              {formData[imageId] ? (<img src={URL.createObjectURL(formData[imageId])} alt="preview" className='rounded-md  w-20 h-20 object-cover mb-2' />) : (<IoMdCloudUpload className='text-5xl' />)}

              <input type="file" hidden id={imageId} onChange={handleImageChange} disabled={loading} />
              {formData[imageId] ? "change" : "upload"}
            </div>

          </label>
        ))}
      </div>
      <div className='flex flex-col gap-1'>
        <Label htmlFor='name'>Product Name</Label>
        <Input type='text' placeholder="Type product name here..." name="name" onChange={handleChange} disabled={loading}/>
      </div>
      <div className='flex flex-col gap-1 '>
        <Label htmlFor='description'>Product Description</Label>
        <textarea type='text' placeholder="Type product description here..." name="description" rows={4} onChange={handleChange} disabled={loading} className='border px-4 py-2 border-gray-500 rounded-md max-w-lg ' />
      </div>
      <div className='flex flex-col gap-1'>
        <Label htmlFor='brand'>Product Brand</Label>
        <Input type='text' disabled={loading} placeholder="Type product brand here..." name="brand" onChange={handleChange} />
      </div>
      <div className='flex flex-col md:flex-row items-center gap-2 md:gap-5'>
        <div className='flex flex-col gap-1'>
          <Label htmlFor='price'>Product Price</Label>
          <Input type='number' placeholder="Enter prices" name="price" disabled={loading} onChange={handleChange} />
        </div>
        <div className='flex flex-col gap-1'>
          <Label htmlFor='discountPercent'>Product Discount %</Label>
          <Input type='number' placeholder="product discount %" name="discountPercent" disabled={loading} onChange={handleChange} />
        </div>
      </div>
      <div className='flex flex-col md:flex-row items-center gap-2 md:gap-5'>
        <div className='flex flex-col gap-1 relative'>
          <Label htmlFor='_type'>Product Type</Label>
          <select name='_type' onChange={handleChange} disabled={loading} className=' px-4 py-2 border border-gray-500 rounded-md max-w-[250px] appearance-none relative'>
            <option value=''> Select type</option>
            <option value="new_arrivals"> New Arrivals</option>
            <option value="best_sellers"> Best Sellers</option>
            <option value="special_offers"> Special Offers</option>
            <option value="promotions"> Promotions</option>

          </select>
          <IoIosArrowDown className='text-lg absolute top-9 right-2' />
        </div>
        <div className='flex flex-col gap-1 relative'>
          <Label htmlFor='category'>Product Category</Label>
          <select name='category' disabled={loading} onChange={handleChange} className=' px-4 pr-8 py-2 border border-gray-500 rounded-md max-w-[250px] appearance-none relative'>
            <option value=''> Select category</option>
            <option value="new_arrivals"> Men's</option>
            <option value="best_sellers"> Women"s</option>
            <option value="special_offers"> Kid's</option>
            <option value="promotions"> Accessories</option>
            <option value="special_offers"> Other's</option>

          </select>
          <IoIosArrowDown className='text-lg absolute top-9 right-2' />
        </div>
        <div className='flex flex-col gap-1 relative'>
          <Label htmlFor='offer'>Offer's</Label>
          <select name='offer' disabled={loading} onChange={handleChange} className=' px-4 pr-8 py-2 border border-gray-500 rounded-md max-w-[250px] appearance-none relative'>
            <option value='false'> False</option>
            <option value='true'> True</option>


          </select>
          <IoIosArrowDown className='text-lg absolute top-9 right-2' />
        </div>
        <div className='flex flex-col gap-1 relative'>
          <Label htmlFor='isAvailable'>Available</Label>
          <select name='isAvailable' disabled={loading} onChange={handleChange} className=' px-4 pr-8 py-2 border border-gray-500 rounded-md max-w-[250px] appearance-none relative'>
            <option value='false'>True</option>
            <option value='true'> False</option>


          </select>
          <IoIosArrowDown className='text-lg absolute top-9 right-2' />
        </div>
        <div className='flex flex-col gap-1 relative'>
          <Label htmlFor='badge'>Badge</Label>
          <select name='badge' disabled={loading} onChange={handleChange} className=' px-4 pr-8 py-2 border border-gray-500 rounded-md max-w-[250px] appearance-none relative'>
            <option value='false'>False</option>
            <option value='true'> True</option>


          </select>
          <IoIosArrowDown className='text-lg absolute top-9 right-2' />
        </div>
      </div>
      <div className='flex flex-col gap-1 items-start'>
        <Label htmlFor='tags'>Tags</Label>
        <div>
          {['Fashion', 'Electronic', 'sports', 'accessories', 'others'].map((tag) => (
            <div key={tag} className='flex items-center gap-2'>
              <input type="checkbox" id={tag.toLowerCase()} name='tags' value={tag} className='cursor-pointer' onChange={(e) => {
                if (e.target.checked) {
                  setformData((prevData) => ({
                    ...prevData,
                    tags: [...prevData.tags, tag],
                  }));
                } else {
                  setformData((prevData) => ({
                    ...prevData,
                    tags: prevData.tags.filter((t) => t !== tag),
                  }));
                }
              }}
              />
              <p>{tag}</p>
            </div>
          ))}
        </div>
      </div>



      <button
        disabled={loading}
        type="submit"
        className="bg-black/80 text-white uppercase font-semibold flex items-center justify-center gap-1 tracking-wide w-44 py-2.5 rounded-md hover:bg-black duration-300 ease-in-out disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        Add{" "} {loading ? (<span className='text-white animate-spin'> <AiOutlineLoading3Quarters /> </span>) : (<IoMdAdd className="text-lg mt-0.5" />)}
      </button>

    </form>
  )
}

export default Add;
