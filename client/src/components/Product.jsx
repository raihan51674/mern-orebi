import React from 'react'
import Badge from './Badge'
import PriceContainer from './PriceContainer'
import AddToCartButton from './AddToCartButton'
import {Link}from 'react-router-dom'

const Product = ({item}) => {
  return (
    <div className='w-full group pr-2.5 '>
     <div className='h-72 rounded-tr-md border border-gray-400 rounded-tl-md overflow-hidden relative'>
      <Link to={`/product/${item?._id}`} className='w-full h-full overflow-hidden bg-[#f3f3f3]'>
        <img src={item?.images[0]} alt="productImage" className='w-fu h-full group-hover:scale-110 duration-300 object-cover' />
      </Link>
      <div className='absolute top-2 right-2'>
        {item?.offer && <Badge title='sale' className=''/>}
      </div>
     </div>
     <div className='max-w-80 py-4 flex flex-col gap-1 border-[1px] border-t-0 border-gray-300 px-4 rounded-b-md '>
      <p className='text-lg text-primary font-bold'>{item?.name}</p>
      <PriceContainer item={item}/>
      <AddToCartButton item={item} />
     </div>
    </div>
  )
}

export default Product
