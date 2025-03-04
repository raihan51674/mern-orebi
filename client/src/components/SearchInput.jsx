import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";

const SearchInput = () => {
    const [seach, setSearch] = useState("");
  return (
    <div className='flex-1 h-10 relative'>
      <input type="text" placeholder='Search Products here...'className='w-full h-full border border-lightText rounded-full outline-none pl-4 pr-10 text-primary focus-visible:border-blue-600' 
      onChange={(e)=>setSearch(e.target.value)} value={seach} />
      {seach ? (<IoCloseOutline onClick={()=>setSearch("")} className='absolute text-xl top-2.5 right-4 hover:text-red-600 duration-300 cursor-pointer'/>): (<CiSearch className='absolute text-xl top-2.5 right-4 '/>)}
    </div>
  )
}

export default SearchInput
