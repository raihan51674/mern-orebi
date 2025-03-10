import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { twMerge } from 'tailwind-merge'
import { addToCart, decreaseQuantity, increaseQuantity } from '../redux/OrebiSlice'

import { FaPlus } from "react-icons/fa6"
import { HiOutlineMinusSm } from "react-icons/hi"

const AddToCartButton = ({item, className}) => {

  const dispatch= useDispatch();
  

  const {products}=useSelector((state)=>state.orebi)
  const [cartProduct, setCartProduct]=useState(null)


  useEffect(()=>{
    const existingProduct = products?.find((product)=>
      product?._id === item?._id
    );
    setCartProduct(existingProduct)

  },[item,products])


  const handleAddToCart=()=>{
    dispatch(addToCart(item))
    toast.success(`${item?.name} added successfully`)
  }
  
  const handleIncreaseQuantity=()=>{
    dispatch(increaseQuantity(item?._id))
    toast.success(`${item?.name} Increase successfully`)
  }
  const handleDecreaseQuantity=()=>{
    dispatch(decreaseQuantity(item?._id))
    toast.success(`${item?.name} Decrease successfully`)
  }
  
  return (
    <div className='h-12 '>
    {cartProduct ? <div className='w-full h-full flex items-center gap-3 '> <button  disabled={cartProduct?.quantity === 1} onClick={handleDecreaseQuantity} className='w-6 h-6 border inline-flex items-center justify-center border-gray-400 cursor-pointer rounded-md hover:bg-gray-900 hover:text-white hoverEffect disabled:bg-gray-400 disabled:border-gray-200 disabled:hover:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-gray-400'><HiOutlineMinusSm/></button> <p className='text-base font-semibold w-6 text-center'>{cartProduct?.quantity}</p> <button onClick={handleIncreaseQuantity} className='w-6 h-6 border inline-flex items-center justify-center border-gray-400 rounded-md hover:bg-gray-900 cursor-pointer hover:text-white hoverEffect'><FaPlus className='text-lg font-bold'/></button>  </div> : <button onClick={handleAddToCart} className={twMerge('bg-primary/90 text-white/90 text-sm font-medium w-full py-2 rounded-md mt-2 hover:text-white hover:bg-primary hoverEffect ',className)}>Add to Cart</button>}
    
    </div>
  )
}

export default AddToCartButton
