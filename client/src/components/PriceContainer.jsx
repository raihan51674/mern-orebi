import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { twMerge } from 'tailwind-merge';
import PriceFormat from './PriceFormat';

const PriceContainer = ({ item, className,priceStyle }) => {
  
   const {products}=useSelector((state)=>state.orebi);
   const [cartProduct, setCartProduct]=useState(null);
   useEffect(()=>{
    const existingProduct = products?.find((product)=>
      product?._id === item?._id
    );
    setCartProduct(existingProduct)

  },[item,products])

  const Discountedprice= cartProduct ? cartProduct?.quantity * item?.price : item?.price;
  const regularPrice = cartProduct ?   item?.price *cartProduct?.quantity + (item?.discountPercent * (item?.price *cartProduct?.quantity)) / 100    :   item?.price + (item?.discountPercent * item?.price) / 100

  return (
    <div className={twMerge('flex items-center gap-2', className)}>
      {item?.discountPercent > 0 && (
       <div className={twMerge('text-base font-normal text-lightText line-through ',priceStyle)}>
         <PriceFormat amount={Discountedprice}  />
       </div>
      )}
      <div className={twMerge('text-primary font-semibold',priceStyle)}>
      <PriceFormat amount={regularPrice}  />
      </div>
    </div>
  );
};

export default PriceContainer;


// import React from 'react'
// import PriceFormat from './PriceFormat'
// import { twMerge } from 'tailwind-merge'

// const PriceContainer = ({item,className}) => {
//   return (
//     <div className={twMerge('flex items-center gap-2',className)}>
//       <PriceFormat amount={item?.price + (item?.discountPercent *item?.price)/100} className='text-base font-normal text-lightText line-through'/>
//       <PriceFormat amount={item?.price} className='text-primary font-semibold'/>
//     </div>
//   )
// }

// export default PriceContainer
