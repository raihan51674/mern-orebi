import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { FaWindowClose } from "react-icons/fa"
import { Link } from 'react-router-dom'
import { serverUrl } from '../../config'
import Loader from '../components/Loader'
import PriceFormat from '../components/PriceFormat'
import Title from '../components/Title'


const List = ({token}) => {
  const [list, setList]=useState([])
  const [loading, setisLoading]=useState(false)
  
  const fetchProductList = async()=>{
    try {
      setisLoading(true)
      const response = await axios.get(serverUrl + "/api/product/list")
      const data=response?.data;
      if (data?.success){
        setList(data?.products)
      }else{
        toast.error(data?.message)
      }
      
    } catch (error) {
      console.log("product list fetching error",error);
       toast.error(error?.message)
      
    }finally{
      setisLoading(false)
    }
  }
  useEffect(()=>{
    fetchProductList();

  },[])
   const handleRemoveProduct=async(item)=>{
    const confrimRemoval = window.confirm(`Are you sure you want to Remove ${item?.name}?`)
    if (confrimRemoval){
      try {
        setisLoading(true)
        const response= await axios.post(serverUrl + "/api/product/remove",{
          _id: item?._id,
        },{headers:{token}}
      
      );
      const data=response?.data
      if(data?.success){
       toast.success(data?.message)
       await fetchProductList();
      }else{
       toast.error(data?.message)
      }



      } catch (error) {
        console.log("product remove erroe",error);
        toast.error(error?.message)
        
        
      } finally{setisLoading(false)}
    }
   }

 
  return (
    <div>
      {loading ? <Loader/> : <>
       <div className='items-center flex justify-between'>
        <Title>Products List</Title>
        <Link to={"/add"} className='text-sm font-medium duration-300 cursor-pointer px-2 py-1.5 bg-black/80 hover:bg-black hover:text-white text-white rounded-md ease-in-out'>Add Product +</Link>
       </div>
       <div>{list?.length >0 ? <div className='flex flex-col gap-2 mt-4'>

        <div className='grid grid-cols-[1fr_2fr_1fr_1fr_1fr_1fr] items-center text-sm py-1 px-2 border border-gray-300 bg-gray-100 my-1.5'>
          <b className='hidden md:inline-block'>Images</b>
          <b>Name</b>
          <b className='hidden md:inline-block'>Category</b>
          <b>Price</b>
          <b className='text-center'>Action</b>
          <b className='text-center'> Edit</b>
        </div>
         {list?.map((item)=>(
          <div key={item?._id} className='grid grid-cols-[1fr_2fr_1fr_1fr_1fr_1fr] items-center text-sm py-1 px-2 bg-gray-100 '>
            <img src={item?.images[0]} alt="productImage" className='w-16 bg-white rounded-sm'/>
            <p className='font-semibold line-clamp-1'>{item?.name}</p>
            <p  className='hidden md:inline-block font-medium'> {item?.category} </p>
            <PriceFormat amount={item?.price}/>

            <div className='flex justify-center'>
              <FaWindowClose onClick={()=>handleRemoveProduct(item)} className='duration-300 ease-in-out text-lg cursor-pointer hover:text-red-600'/>
            </div>
            <Link to={"/add"} className='hover:text-green-600 duration-300 ease-in-out text-center font-medium'>edit</Link>
            
            
            
            
           </div>
         ))}
       </div>: <div className='mt-2 '>
        <p className='mb-4 text-red-600 font-medium tracking-wide text-lg'>You have no product in your Database !</p>
        <Link to={"/add"} className='text-lg font-medium duration-300 cursor-pointer px-4 py-2.5 bg-black/80 hover:bg-black hover:text-white text-white rounded-md ease-in-out'>Add Products +</Link>
        </div>}</div>
      </>
      }
    </div>
  )
}

export default List
