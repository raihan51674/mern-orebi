import React from 'react'

const PriceFormat = ({amount}) => {
   const priceFormatAmount =new Number(amount).toLocaleString('BN',{  //en-US
    style:"currency",
    currency:"BDT", //USD
    minimumFractionDigits:2,
   })
  return (
   <span className='text-base font-medium'>{priceFormatAmount}</span>
  )
}

export default PriceFormat
