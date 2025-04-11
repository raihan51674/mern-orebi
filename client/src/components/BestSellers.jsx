import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import { serverUrl } from '../../config'
import Title from '../components/Title'
import NextArrow from './NextArrow'
import PreviousArrow from './PreviousArrow'
import Product from './Product'

const BestSellers = () => {
  const [products, setProducts]=useState([])
  const [loading, setLoading]=useState(false)
  const [total, setTotal]=useState(0)

  useEffect(()=>{
    try {
      setLoading(true)
      const fechData=async ()=>{
        const response= await axios.get(serverUrl + "/api/product/list")
        const data =response?.data
        if(data?.success){
          setProducts(data?.products)
          setTotal(data?.total)

        }else{
          console.log("product displey feching error",error);
          
        }
        
      }
      fechData();
    } catch (error) {
      console.log("product fecheing error",error);
      
      
    }finally{
      setLoading(false)
    }

  },[])

  const settings = {
   
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    nextArrow : <NextArrow/>,
    prevArrow:<PreviousArrow/>,
    responsive : [
      {
        breakpoint :1025,
        settings:{
          slidesToShow: 3,
         slidesToScroll: 1,
         infinite :true,
        },
      },
      {
        breakpoint :769,
        settings:{
          slidesToShow: 2,
         slidesToScroll: 1,
         infinite :true,
        },
      },
      {
        breakpoint :480,
        settings:{
          slidesToShow: 1,
         slidesToScroll: 1,
         infinite :true,
        },
      },
    ],

  }
  

  return (
    <div className='w-full py-10'>
     
      <Title className='mb-5'>Best Sellers</Title>
      {products?.length >0 ?  <Slider {...settings}>
       { products?.map((item)=>(
         <Product key={item?._id} item={item}/>
        ))}
      </Slider> : <div className='mt-4 w-full h-72 flex items-center gap-5 '> {Array.from({length:4}).map((_,i)=>(
        <div key={i} className='rounded-md w-full h-full bg-zinc-400 animate-pulse'/>
      ))} </div>}
     
    </div>
  )
}

export default BestSellers
