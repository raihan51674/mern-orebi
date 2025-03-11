import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Input from '../components/Input'
import Label from '../components/Label'
import Title from '../components/Title'
import toast from 'react-hot-toast'
import axios from  'axios'
import {serverUrl} from '../../config'

const SignUp = () => {
  const [clientName, setClientName]=useState("")
  const [email, setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [checked, setChecked]=useState(false)
  const [loading, setLoading]=useState(false)


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

  const handleEmail=(e)=>{
    setEmail(e.target.value);
    setErrorEmail("");
  }
  const handlePassword=(e)=>{
    setPassword(e.target.value);
    setErrorPassword("");
  }


  //email validator
  const EmailValidation=(email)=>{
    return String(email).toLowerCase().match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
  };
  const handleCheck=(e)=>{
    setChecked(e.target.checked)
  }


  const handlesiginUp=async(e)=>{
    e.preventDefault();
   if (checked){
    if(!clientName){
      setErrorClientName("Enter your name")
    }
    if(!email){
      setErrorEmail("Enter your email")
    } if(!password){
      setErrorPassword("Enter your password")
    }else{
      if(!EmailValidation(email)){
       setErrorEmail("Enter a valid email")
      }
    }
    try {
      setLoading(true)
      if (clientName && email && EmailValidation(email) && password ){
      
        const response = await axios.post(`${serverUrl}/api/user/register`,{
          name: clientName,
          email,
          password,
        })
        const data=response?.data;
        if(data?.success){
          toast.success(data?.message)
          navigate("/signin")

        }else{
          toast.error(data?.message)
        }
      }
      
    } catch (error) {
      console.error("User Registration error",email);
      toast.error(error?.message)
      
      
    }finally{
      setLoading(false)
    }

   }
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
         {errorclientName && (<p className='text-sm text-red-500 font-semibold'> <span className='italic mr-1 font-bold'>!</span> {errorclientName}</p>)}
        </div>
        <div className='flex flex-col gap-0.5'>
          <Label htmlFor="email">Your Email</Label>
         <Input placeholder='john@gmail.com' type='email' required value={email} onChange={handleEmail} />
         {errorEmail && (<p className='text-sm text-red-500 font-semibold'> <span className='italic mr-1 font-bold'>!</span> {errorEmail}  </p>)}
        </div>
        <div className='flex flex-col gap-0.5'>
          <Label htmlFor="password">Your Password</Label>
         <Input placeholder='********' type='password' value={password} onChange={handlePassword} />
         {errorPassword && (<p className='text-sm text-red-500 font-semibold'> <span className='italic mr-1 font-bold'>!</span> {errorPassword}</p>)}
        </div>
        <div className='flex items-center gap-2'>
          <input type="checkbox" onChange={handleCheck} />
          <p className='text-sm text-primary '>I agree to the orebi <span className='text-blue-500'>Terms of Services</span> and <span className='text-blue-500'>Privacy policy</span></p>
          
        </div>
        <button disabled={!checked || loading} onClick={handlesiginUp} className='bg-primary/90 hover:bg-primary font-medium h-10 rounded-md hoverEffect  text-base text-gray-200  hover:text-white cursor-pointer w-full disabled:bg-primary/40 disabled:cursor-not-allowed '>{loading ? "processing..." : "Create Account"}</button>
        <p className='text-sm text-center font-medium'>Already have an account?  {" "} <Link to="/signin" > <span className='hover:text-blue-600 hoverEffect text-blue-800 underline font-bold '> Sing In</span></Link> </p>
      </div>
      </div>
      
     </form>
    </div>
  )
}

export default SignUp


