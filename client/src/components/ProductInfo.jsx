import React from 'react'
import AddToCartButton from './AddToCartButton'
import PriceContainer from './PriceContainer'
import Title from './Title'

const ProductInfo = ({product}) => {
  return (
    <div className='flex flex-col justify-center gap-5'>
      <Title className='text-4xl'>{product?.name}</Title>
      <PriceContainer item={product} priceStyle='text-xl'/>
      <p className='text-base text-gray-600 '>{product?.description}</p>
      <p className='text-sm font-semibold'>Be the first to level a review</p>
      <div>
        <p className='text-base font-semibold'><span className='text-lightText font-normal mr-1'>Category:</span> {product?.category}</p>
        <p className='text-base font-bold'><span className='text-lightText font-normal mr-1 mt-2'>Brand:</span> {product?.brand}</p>
      </div>
      <AddToCartButton item={product} className='text-base font-semibold tracking-wide py-3'/>
    </div>
  )
}

export default ProductInfo
