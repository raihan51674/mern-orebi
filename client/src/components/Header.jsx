import { Dialog, DialogPanel } from '@headlessui/react';
import React, { useState } from 'react';
import { FaUserCircle } from "react-icons/fa";
import { HiOutlineMenu } from "react-icons/hi";
import { IoMdCart } from "react-icons/io";
import { IoCloseOutline } from 'react-icons/io5';
import { Link, NavLink } from 'react-router-dom';
import { logo } from '../assets/images/index';
import { headerNavigation } from '../constants';
import Container from './Container';
import SearchInput from './SearchInput';
import Title from './Title';
import SocialLinks from './SocialLinks'
import { useSelector } from 'react-redux';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {products}=useSelector((state)=>state.orebi)
  const token = localStorage.getItem("token")
  return (
    <div className='border-b-[1px] border-stone-300 sticky top-0 z-50 bg-white'>
      <Container className="py-4 flex items-center gap-x-3 md:gap-x-7 justify-between ">
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
           <span className='absolute -right-2 -top-1 w-3.5 h-3.5 text-[9px] rounded-full bg-lightText group-hover:bg-primary text-white flex items-center justify-center hoverEffect'>{products.length>0 ? products?.length : 0 }</span> </Link>
          {token ? (<Link to='/profile' className='hover:text-primary hoverEffect cursor-pointer relative group overflow-hidden'>Profile</Link>) : ( <Link to={'/signin'} className='text-xl hover:text-primary hoverEffect'>
            <FaUserCircle/>
           </Link>)
           }
           
        </div>
        <button onClick={()=>setIsOpen(true)} className='text-2xl text-lightText hover:text-primary md:hidden hoverEffect'>
            <HiOutlineMenu/>
        </button>

        {/* dialog section mobile menu section using headlineui*/}

        <Dialog open={isOpen} className="relative z-50 md:hidden text-white/80" onClose={()=>setIsOpen(false)}>
        <div className="fixed inset-0 z-50 w-screen items-center justify-center p-4 bg-black/90">
      
            <DialogPanel
              transition
              className="w-[94%] space-y-4 bg-primary p-6 border border-lightText rounded-md absolute top-10"
            >
              <div className='flex items-center justify-between gap-5'>
                <Title className='text-xl text-white'>Navigation Menu</Title>
                <button onClick={()=>setIsOpen(false)} className='text-white/40 text-3xl hover:text-red-600 duration-300 border border-white/20 round-sm hover:border-white/80'>
                  <IoCloseOutline/>
                </button>
              </div>
              <div className='flex flex-col gap-5 pt-5'>
              {headerNavigation?.map((item)=>(
                <NavLink onClick={()=>setIsOpen(false)} key={item?.title} to={item?.link} className='flex items-center hover:text-white text-xl relative group gap-2 duration-300 font-semibold'>
                  <span className='w-2.5 h-2.5 rounded-full border border-white/80 inline-flex group-hover:text-white duration-300'/>
                  {item?.title}
                  <span className='absolute w-full h-[1px] bg-white/40 left-0 -bottom-1 group-hover:bg-blue-700 duration-300'/>
                </NavLink>
              ))}
              <NavLink onClick={()=>setIsOpen(false)} to={'/signin'} className='text-xl flex items-center hover:text-white relative group gap-2 duration-300 font-semibold'>
              <span className='w-2.5 h-2.5 rounded-full border border-white/80 inline-flex group-hover:text-white duration-300'/>
              Signin
              <span className='absolute w-full h-[1px] bg-white/40 left-0 -bottom-1 group-hover:bg-blue-700 duration-300'/>
              </NavLink>
              </div>
              <div className='pt-3'>
              <SocialLinks/>
              </div>
            </DialogPanel>
          </div>
        
      </Dialog>

      </Container>
    </div>
  )
}

export default Header
