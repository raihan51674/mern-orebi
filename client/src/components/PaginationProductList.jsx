import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {serverUrl} from '../../config'
import ProductBanner from './ProductBanner'
import Pagination from './Pagination'


const PaginationProductList = () => {

  const [itemsPerPage, setItemsPerPage]=useState(8)
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

  
  
  
  const itemsPerPageFormBanner=(itemsPerPage)=>{

     setItemsPerPage(itemsPerPage)
  }


  return (
    <div className='flex flex-col gap-5 w-full'>
      {/* productBanner */}
      <ProductBanner itemsPerPageFormBanner={itemsPerPageFormBanner} />
      {/* pagination */}
      <Pagination itemsPerPage={itemsPerPage} products={products} />
    </div>
  )
}

export default PaginationProductList
