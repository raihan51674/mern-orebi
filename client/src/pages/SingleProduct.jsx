import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { serverUrl } from '../../config'
import Container from '../components/Container'
import ProductInfo from '../components/ProductInfo'

const SingleProduct = () => {

  const {id} = useParams();
  const [product, setProduct]=useState(null)
  const [loading, setLoading]=useState(false)
  useEffect(()=>{
    try {
      setLoading(true)
      const fechData=async ()=>{
        const response= await axios.get(`${serverUrl}/api/product/single?_id=${id}`)
        const data =response?.data
        if(data?.success){
          setProduct(data?.product)
         
          
          

        }else{
          console.log("product error", data?.message);
          
        }
        
      }
      fechData();
    } catch (error) {
      console.log(" error",error);
      
      
    }finally{
      setLoading(false)
    }

  },[id])
  console.log(product);
  
  
  return (
    
   <Container className='grid grid-cols-2 gap-10 '>
    <div className='w-full max-h-[500px] group overflow-hidden rounded-md '>
      <img src={product?.images[0]} alt="singleProductImages" className='w-full h-full object-cover group-hover:scale-110 transition-transform ease-in-out duration-500 hoverEffect'/>
    </div>
    <ProductInfo product={product}/>
   </Container>
  )
}

export default SingleProduct

