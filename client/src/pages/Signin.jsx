import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../components/Input'
import Label from '../components/Label'
import Title from '../components/Title'


const signin = () => {
  return (
    <div className='w-full h-full flex items-center justify-center'>
     <form action="" className='w-full max-w-sm flex items-center justify-center border border-gray-400 my-20 rounded-md shadow-sm shadow-orange-400 mx-4  '>
      <div className='px-6 py-4 flex flex-col justify-center w-full'> 
      <Title className='underline font-bold underline-offset-4 decoration-[1px] mb-4 text-center'>Sign In</Title>
      <div className='flex flex-col gap-3 '>
        <div className='flex flex-col gap-0.5'>
          <Label htmlFor="email">Your Email</Label>
         <Input placeholder='john@gmail.com' type='email' />
        </div>
        <div className='flex flex-col gap-0.5'>
          <Label htmlFor="password">Your Password</Label>
         <Input placeholder='********' type='password' />
        </div>
        <button className='bg-primary/90 hover:bg-primary font-medium h-10 rounded-md hoverEffect  text-base text-gray-200  hover:text-white cursor-pointer w-full  '>Sing In </button>
        <p className='text-sm text-center font-medium'>Don't have an account? {" "} <Link to="/signup" > <span className='hover:text-blue-600 hoverEffect text-blue-800 underline font-bold '> Sing Up</span></Link> </p>
      </div>
      </div>
      
     </form>
    </div>
  )
}

export default signin
