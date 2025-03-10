import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Input from '../components/Input'
import Label from '../components/Label'
import Title from '../components/Title'

const SignUp = () => {
  const [clientName, setClientName]=useState("")
  const [email, setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [checked, setChecked]=useState(false)


  const [errorclientName, setErrorClientName]=useState("")
  const [errorEmail, setErrorEmail]=useState("")
  const [errorPassword,setErrorPassword]=useState("")


  const navigate =useNavigate()
  const token = localStorage.getItem("token")

  useEffect(()=>{
    if(token){
      navigate("/")
    }

  },[token])

  const handleName=(e)=>{
    setClientName(e.target.value);
    setErrorClientName("");
  }

  return (
    <div className='w-full h-full flex items-center justify-center'>
     <form action="" className='w-full max-w-sm flex items-center justify-center border border-gray-400 my-20 rounded-md shadow-sm shadow-orange-400 mx-4  '>
      <div className='px-6 py-4 flex flex-col justify-center w-full'> 
      <Title className='underline font-bold underline-offset-4 decoration-[1px] mb-4 text-center'> Create your Account </Title>
      <div className='flex flex-col gap-3 '>
      <div className='flex flex-col gap-0.5'>
          <Label htmlFor="text">Full Name</Label>
         <Input placeholder='ex: john Dao' type='text'onChange={handleName} value={clientName} />
        </div>
        <div className='flex flex-col gap-0.5'>
          <Label htmlFor="email">Your Email</Label>
         <Input placeholder='john@gmail.com' type='email' />
        </div>
        <div className='flex flex-col gap-0.5'>
          <Label htmlFor="password">Your Password</Label>
         <Input placeholder='********' type='password' />
        </div>
        <div className='flex items-center gap-2'>
          <input type="checkbox" />
          <p className='text-sm text-primary '>I agree to the orebi <span className='text-blue-500'>Terms of Services</span> and <span className='text-blue-500'>Privacy policy</span></p>
          
        </div>
        <button className='bg-primary/90 hover:bg-primary font-medium h-10 rounded-md hoverEffect  text-base text-gray-200  hover:text-white cursor-pointer w-full  '>Create Account</button>
        <p className='text-sm text-center font-medium'>Already have an account?  {" "} <Link to="/signin" > <span className='hover:text-blue-600 hoverEffect text-blue-800 underline font-bold '> Sing In</span></Link> </p>
      </div>
      </div>
      
     </form>
    </div>
  )
}

export default SignUp


