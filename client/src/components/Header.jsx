import React from 'react';
import {logo} from '../assets/images/index';
import Container from './Container';
import SearchInput from './SearchInput';
import { HiOutlineMenu } from "react-icons/hi";
import { IoMdCart } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { headerNavigation } from '../constants';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className='border-b-[1px] border-stone-300'>
      <Container className="py-7 flex items-center gap-x-3 md:gap-x-7 justify-between ">
       <Link to={'/'}>
       <img src={logo} alt="logo" className=' cursor-pointer'/>
       </Link>
        <SearchInput/>
        <div className='hidden md:inline-flex items-center gap-5 lg:gap-7 text-sm font-medium uppercase cursor-pointer text-lightText'>
           {
            headerNavigation?.map((item)=>(
              <NavLink key={item.title} to={item?.link} className='hover:text-primary hoverEffect cursor-pointer relative group overflow-hidden'>{item?.title}
              <span className='absolute bottom-0 left-0 bg-blue-900 inline-block w-full h-[2px] -translate-x-[110%] group-hover:translate-x-0 hoverEffect '/></NavLink>
            ))
           }
           <Link to={'/cart'} className='text-2xl hover:text-primary hoverEffect relative group'> <IoMdCart/>
           <span className='absolute -right-2 -top-1 w-3.5 h-3.5 text-[9px] rounded-full bg-lightText group-hover:bg-primary text-white flex items-center justify-center hoverEffect'>0</span> </Link>
           <Link to={'/signin'} className='text-xl hover:text-primary hoverEffect'>
            <FaUserCircle/>
           </Link>
           
           
        </div>
        <button className='text-2xl text-lightText hover:text-primary md:hidden hoverEffect'>
            <HiOutlineMenu/>
        </button>
      </Container>
    </div>
  )
}

export default Header
