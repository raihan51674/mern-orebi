import React from 'react';
import {logo} from '../assets/images/index';
import Container from './Container';
import SearchInput from './SearchInput';
import { HiOutlineMenu } from "react-icons/hi";


const Header = () => {
  return (
    <div className='border-b-[1px] border-stone-300'>
      <Container className="py-7 flex items-center gap-x-3 md:gap-x-7 justify-between ">
        <img src={logo} alt="logo" className=' cursor-pointer'/>
        <SearchInput/>
        <div className='hidden md:inline-flex items-center gap-5 lg:gap-7 text-sm font-medium uppercase cursor-pointer text-lightText'>
           <p>navlink</p>
           <p>user</p>
           <p>cart</p>
        </div>
        <button className='text-2xl text-lightText hover:text-primary md:hidden'>
            <HiOutlineMenu/>
        </button>
      </Container>
    </div>
  )
}

export default Header
