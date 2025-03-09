import React from 'react'
import toast from 'react-hot-toast'
import { twMerge } from 'tailwind-merge'

const AddToCartButton = ({item, className}) => {
  return (
    <button onClick={()=>toast.success(`${item?.name} is Clicked`)} className={twMerge('bg-primary/90 text-white/90 text-sm font-medium py-2 rounded-md mt-2 hover:text-white hover:bg-primary hoverEffect ',className)}>Add to Cart</button>
  )
}

export default AddToCartButton
