import React, { useState } from 'react'
import ReactPaginate from 'react-paginate'
import Product from '../components/Product'

function Items({currentItem}){
  return(
    <>
    {currentItem && currentItem?.map((item)=>(
      <Product key={item?._id} item={item} className='w-full' />
    ))}
    </>
  )
}

const Pagination = ({itemsPerPage,products}) => {
  const [itemOffset, setItemOffset]=useState(0)
  const [itemStart, setItemStart]=useState(1)
  const endOffset= itemOffset + itemsPerPage;
  const currentItem =products.slice(itemOffset, endOffset)
  const pageCount =Math.ceil(products.length / itemsPerPage)
  const handlePageClick=(event)=>{
    const newOffset=(event.selected* itemsPerPage) % products.length;
    setItemOffset(newOffset)
    setItemStart(newOffset)
  }
  return (
    <div>
     <div className='grid grid-cols-1 md:grid-cols-2 md:grid-cols-4 gap-5'>
      <Items currentItem={currentItem}  />
     </div>
     <div className='flex flex-col md:flex-row justify-center md:justify-between items-center'>
      <ReactPaginate nextAriaLabel='' onPageChange={handlePageClick} pageRangeDisplayed={3} marginPagesDisplayed={2} pageCount={pageCount} previousLabel='' pageLinkClassName='w-9 h-9 border-[1px] border-gray-300 hover:border-black duration-300 flex items-center justify-center'
      pageClassName='mr-3' 
      containerClassName='flex text-base font-semibold py-5 items-center '
      activeClassName='bg-black text-white'/>
      <p>Products From {itemsPerPage===0? 1: itemStart } to {endOffset} of {products?.length} </p>
     </div>
    </div>
  )
}

export default Pagination
