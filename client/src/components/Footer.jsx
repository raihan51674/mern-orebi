import React from 'react'
import { Link } from 'react-router-dom'
import Container from './Container'
import SocialLinks from './SocialLinks'
import Title from './Title'
import { paymentCard } from '../assets/images'

const shopArray = [
  { title: 'Accessories', link: '/accessories' },
  { title: 'Cloths', link: '/shop' },
  { title: 'Electronic', link: '/shop' },
  { title: 'Home Appliances', link: '/shop' },
  { title: 'New Arrivals', link: '/shop' },
];

const Account  = [
  { title: 'Profile', link: '/profile' },
  { title: 'Orders', link: '/orders' },
  { title: 'Addresses', link: '/addresses' },
  { title: 'Account Details', link: '/profile' },
  { title: 'Privacy', link: '/profile' },
];

const Footer = () => {
  return (
    <div className='w-full bg-[#1b1b1b] py-20 text-white/80'>
      <Container className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10'>
        <div className=''>

          <div className='flex flex-col gap-6'>
            <Title className='text-xl'>
              About Orebi Shop
            </Title>
            <p className='text-base w-full lg:w-[80%]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <SocialLinks />
          </div>
        </div>

        {/* second */}
        <div>
          <Title className='text-xl mb-6'>Shop</Title>
          <div className='flex flex-col gap-2'>
            {shopArray?.map((item) => (
              <Link key={item?.title} to={item?.link} className='text-base text-lightText hover:text-white hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300'>{item?.title}</Link>
            ))}

          </div>

        </div>
        {/* third */}

        <div>
          <Title className='text-xl mb-6'>Yours Account</Title>
          <div className='flex flex-col gap-2'>
            {Account?.map((item) => (
              <Link key={item?.title} to={item?.link} className='text-base text-lightText hover:text-white hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300'>{item?.title}</Link>
            ))}

          </div>

        </div>

        {/* Forth */}

        <div className='col-span-2 flex flex-col items-center w-full'>
          <Title className='text-xl mb-6'>Subscribe to our Newsletter.</Title>
          <p className='text-lightText text-center'>Lorem ipsum dolor sit amet.</p>
          <div className='my-3'>
            
            <div className='flex items-center gap-1'>
              <input type="text" placeholder='insert your email...*' className='text-white border-b w-full h-12 border-gray-400 bg-transparent px-4 text-lg placeholder:text-base outline-none'/>
              <button className='px-4 py-2 bg-primary/70 border border-transparent hover:border-gray-500 duration-300 rounded-md text-white'>Subscribe</button>
            </div>
            
          </div>
          <img src={paymentCard} alt="" />
        </div>
      </Container>
    </div>
  )
}

export default Footer
