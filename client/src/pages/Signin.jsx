import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Input from '../components/Input'
import Label from '../components/Label'
import Title from '../components/Title'
import toast from 'react-hot-toast'
import axios from 'axios'
import { serverUrl } from '../../config'


const signin = () => {
    const [email, setEmail]=useState("")
     const [password,setPassword]=useState("")
     const [loading, setLoading]=useState(false)
     const [errorEmail, setErrorEmail]=useState("")
     const [errorPassword,setErrorPassword]=useState("")

     const navigate =useNavigate()
     const token = localStorage.getItem("token")
   
     useEffect(()=>{
       if(token){
         navigate("/")
       }
   
     },[token])

    

     const handleEmail=(e)=>{
      setEmail(e.target.value);
      setErrorEmail("");
    }
    const handlePassword=(e)=>{
      setPassword(e.target.value);
      setErrorPassword("");
    }

    const handleSignIn= async(e)=>{
      e.preventDefault()
      if(!email){
        setErrorEmail("Enter your email")
      }
      if(!password){
        setErrorPassword("Enter password")
      }
      if(email && password){
        try {
          setLoading(true)
          const response = await axios.post(serverUrl+"/api/user/login",{email,password})
          const data=response?.data;
          if(data?.success){
            localStorage.setItem('token',data?.token)
            toast.success(data?.message)
            navigate("/")

          }else{
            toast.error(data?.message)

          }
          
        } catch (error) {
          console.error("User login Erroe",error)
          toast.error(error?.message)
          
        } finally{
          setLoading(false)
        }
      }

    }


    




  return (
    <div className='w-full h-full flex items-center justify-center'>
     <form action="" className='w-full max-w-sm flex items-center justify-center border border-gray-400 my-20 rounded-md shadow-sm shadow-orange-400 mx-4  '>
      <div className='px-6 py-4 flex flex-col justify-center w-full'> 
      <Title className='underline font-bold underline-offset-4 decoration-[1px] mb-4 text-center'>Sign In</Title>
      <div className='flex flex-col gap-3 '>
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
        <button onClick={handleSignIn} disabled={loading} className='bg-primary/90 hover:bg-primary font-medium h-10 rounded-md hoverEffect  text-base text-gray-200  hover:text-white cursor-pointer w-full disabled:bg-primary/40 disabled:cursor-not-allowed  '> {loading ? "Processing..." : "Sing In"} </button>
        <p className='text-sm text-center font-medium'>Don't have an account? {" "} <Link to="/signup" > <span className='hover:text-blue-600 hoverEffect text-blue-800 underline font-bold '> Sing Up</span></Link> </p>
      </div>
      </div>
      
     </form>
    </div>
  )
}

export default signin
