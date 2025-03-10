import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { emptyCart } from '../assets/images'
import CartProduct from '../components/CartProduct'
import Container from '../components/Container'
import PriceFormat from '../components/PriceFormat'
import Title from '../components/Title'
import { resetCart } from '../redux/OrebiSlice'
import toast from 'react-hot-toast'

const Cart = () => {
  const {products}=useSelector((state)=>state.orebi)
  const dispatch =useDispatch()
  const [subTotal, setSubTotal]=useState("")
  const [total, setTotal]=useState("")

  useEffect(()=>{
    let price =0;
    let discountPrice=0;
    products?.map((item)=>{
      price +=(item?.price *item?.quantity + (item?.discountPercent *item?.price)/100 * item?.quantity);
      discountPrice += item?.price* item?.quantity;
      return price, discountPrice;
    });
    setSubTotal(price);
    setTotal(discountPrice);


  },[products])

  const handleReset=()=>{
    const confirmed =window.confirm('Are you sure to reset your cart?');
    if (confirmed){
     dispatch(resetCart())
    }
  }
  const handleCheckout=()=>{
   toast.success(`Payment will be proceed shortly for $${total}`)
  }
  return (
    <Container>
      <Title>My Cart</Title>
      {products?.length >0 ? <div className='py-10'>
         <div className='w-full h-20 bg-[#f7f7f7] text-primary hidden lg:grid grid-cols-5 place-content-center px-6 text-lg font-semibold rounded-md'>
          <h2 className='col-span-2'>Product</h2>
          <h2 >Price</h2>
          <h2>Quantity</h2>
          <h2>SubTotal</h2>
         </div>
         <div className='mt-5'>
          {products?.map((item)=>(
            
              <CartProduct key={item?._id} item={item} />
            
          ))}
         </div>
         <div className='flex items-start justify-between '>
           <button onClick={handleReset} className='py-2.5 px-20 bg-red-500 text-white font-semibold uppercase mb-4 rounded-md hover:bg-red-700 hoverEffect'>Reset Cart</button>
           <div className='max-w-xl gap-4 flex justify-end mt-4'>
            <div className='w-96 flex flex-col gap-4'>
              <h2 className='text-xl font-bold uppercase text-right'>Cart Totals</h2>
              <div>
                <p className='flex items-center justify-between border-[1px] py-1.5 px-4 text-lg font-medium border-b-0 border-t-0'>Subtotals {""} <PriceFormat amount={subTotal}  className='font-semibold tracking-wide'/></p>
                <p className='flex items-center justify-between border-[1px]  py-1.5 px-4 text-lg font-medium'>Discount {""} <PriceFormat amount={subTotal-total}  className='font-semibold tracking-wide'/></p>
                <p className='flex items-center justify-between border-[1px] py-1.5 px-4 text-lg font-medium'>Total {""} <PriceFormat amount={total}  className='font-bold text-xl tracking-wide' /></p>
              </div>
              <div>
                <button onClick={handleCheckout} className='w-full rounded-md py-2.5 bg-primary/80 text-white hover:bg-primary hoverEffect font-semibold'>Proceed to Checkout</button>
              </div>
            </div>
           </div>
         </div>
      </div>
         : <div className='py-10 items-center flex flex-col justify-center'>
        
          <img src={emptyCart} alt="emptyCart" className='mx-w-80'/>
          <div className='mt-5 flex flex-col gap-3'>
            <h2 className='text-xl font-bold uppercase ml-10'>Your Cart feels Lonely</h2>
            <p className='text-sm max-w-96 text-center text-lightText'>Your shopping cart lives to serve . Give it purpose  -fill it with books, electronics, videos, etc. and make it happy</p>
            <Link to={"/shop"} className='bg-primary/80 w-48  text-center rounded-md py-3 text-white font-semibold  duration-300 hover:bg-black hover:text-white hoverEffect ml-20'>
              Continue Shopping
            </Link>
          </div>
        
        </div>}
    </Container>
  )
}

export default Cart
