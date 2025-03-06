import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoMdAdd } from "react-icons/io";
import { FaList } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className='w-full h-full'>
      <div className='flex flex-col gap-4 mt-2 pl-2 md:pl-6'>
        <NavLink to={'/add'} className='flex items-center justify-center md:justify-normal gap-2.5 border border-gray-300 border-r-0 py-2 px-3 bg-gray-100 hover:bg-black/80 hover:text-white duration-300 rounded-sm hover:font-semibold'>
         <span className='inline-flex border border-gray-300 items-start justify-center rounded-full text-lg p-1'>
         <IoMdAdd className='text-xl font-sans hover:font-semibold'/>
         </span>
         <p className='hidden md:inline-flex font-semibold'>Add Items</p>
        </NavLink>
        <NavLink to={'/list'} className='flex items-center justify-center md:justify-normal gap-2.5 border border-gray-300 border-r-0 py-2 px-3 bg-gray-100 hover:bg-black/80 hover:text-white duration-300 rounded-sm hover:font-semibold'>
         <span className='inline-flex  items-start justify-center  text-lg p-1'>
         <FaList className='text-xl font-sans hover:font-semibold'/>
         </span>
         <p className='hidden md:inline-flex font-semibold'>Product Lists</p>
        </NavLink>
        <NavLink to={'/orders'} className='flex items-center justify-center md:justify-normal gap-2.5 border border-gray-300 border-r-0 py-2 px-3 bg-gray-100 hover:bg-black/80 hover:text-white duration-300 rounded-sm  hover:font-semibold'>
         <span className='inline-flex border border-gray-300 items-start justify-center rounded-full text-lg p-1'>
         <AiFillProduct className='text-xl font-sans hover:font-semibold'/>
         </span>
         <p className='hidden md:inline-flex font-semibold'>All Orders</p>
        </NavLink>
        <NavLink to={'/users'} className='flex items-center justify-center md:justify-normal gap-2.5 border border-gray-300 border-r-0 py-2 px-3 bg-gray-100 hover:bg-black/80 hover:text-white duration-300 rounded-sm hover:font-semibold'>
         <span className='inline-flex border border-gray-300 items-start justify-center rounded-full text-lg p-1'>
         <FaUsers className='text-xl font-sans hover:font-semibold'/>
         </span>
         <p className='hidden md:inline-flex font-semibold'>All Users List</p>
        </NavLink>
       
      </div>
    </div>
  )
}

export default Sidebar
