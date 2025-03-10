import React from 'react';
import { GoTriangleDown } from "react-icons/go";

const ProductBanner = ({itemsPerPageFormBanner}) => {
  return (
    <div className='flex flex-col md:flex-row md:items-center justify-between w-full'>
      <div>Sorting Filter</div>
      <div className='flex items-center gap-2 text-black relative'>
        <label htmlFor="itemsPerPage">Show</label>
        <select id='' className='w-16 md:w-20 border-[1px] border-gray-300 py-1 px-4 cursor-pointer text-primary text-base block rounded-sm appearance-none focus-within:outline-none focus-visible:border-primary '
        onChange={(e)=>itemsPerPageFormBanner(e.target.value)}
        >
          <option value="8">8</option>
          <option value="16">16</option>
          <option value="24">24</option>
          <option value="32">32</option>
        </select>
        <GoTriangleDown className='absolute text-lg  right-3 top-2'/>
      </div>
    </div>
  )
}

export default ProductBanner
