import React, { useEffect, useState } from 'react'
import Title from '../components/Title'
import Container from '../components/Container'
import axios from 'axios'
import {serverUrl} from '../../config'
import PaginationProductList from '../components/PaginationProductList'
import ProductSideNav from '../components/ProductSideNav'

const Shop = () => {
 
  
  


  return (
   <Container>
    <Title>Available Products on Sale</Title>
    <div className='mt-5 flex gap-10'>
      {/* <div className='w-[20%] lg:w-[25%] hidden md:inline-flex h-full'>
        <ProductSideNav/>
      </div> */}
      <PaginationProductList/>
    </div>
   </Container>
  )
}

export default Shop
