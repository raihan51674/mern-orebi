import React, { useEffect, useState } from 'react'
import Title from '../components/Title'
import Container from '../components/Container'
import axios from 'axios'
import {serverUrl} from '../../config'

const Shop = () => {
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
          console.log("product displey feching error",data?.message);
          
        }
        
      }
      fechData();
    } catch (error) {
      console.log("product fecheing error",error);
      
      
    }finally{
      setLoading(false)
    }

  },[])
  console.log(products);
  


  return (
   <Container>
    <Title>shop pages</Title>
   </Container>
  )
}

export default Shop
