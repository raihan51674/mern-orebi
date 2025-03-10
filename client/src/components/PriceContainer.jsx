import React from 'react';
import { twMerge } from 'tailwind-merge';
import PriceFormat from './PriceFormat';

const PriceContainer = ({ item, className,priceStyle }) => {
  const discountedPrice = item?.price - (item?.discountPercent * item?.price) / 100;

  return (
    <div className={twMerge('flex items-center gap-2', className)}>
      {item?.discountPercent > 0 && (
       <div className={twMerge('text-base font-normal text-lightText line-through ',priceStyle)}>
         <PriceFormat amount={item.price}  />
       </div>
      )}
      <div className={twMerge('text-primary font-semibold',priceStyle)}>
      <PriceFormat amount={discountedPrice}  />
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
