import React from 'react'

const PriceFormat = ({amount}) => {
   const priceFormatAmount =new Number(amount).toLocaleString('en-US',{  //BN
    style:"currency",
    currency:"USD", //BDT
    minimumFractionDigits:2,
   })
  return (
   <span className='text-base font-medium'>{priceFormatAmount}</span>
  )
}

export default PriceFormat
