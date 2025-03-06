import axios from 'axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { logo } from '../assets/images'
import Title from './Title'
import { serverUrl } from '../../config'


const Login = ({setToken}) => {
  
   console.log(serverUrl)
      const [email, setEmail]= useState('')
      const [password, setPassword]=useState("")



    const handleAdminLogin = async(e)=>{
        e.preventDefault();
       console.log(email ,password);
      
       try {
        const response = await axios.post(serverUrl + '/api/user/admin', {email, password});

        const data = response?.data;
        if(data?.success){
          setToken(data?.token);
          toast.success(data?.message);
        }else{
           toast.error(data?.message)
        }
       } catch (error) {

        console.log("Admin Login Erro", error)
        toast.error(error?.message)
       }
    }





  return (
    <div className='flex flex-col gap-2 bg-gray-300 min-h-screen items-center justify-center'>
      <div className='bg-white p-2 rounded-md'>
        <img src={logo} alt="logo" />
      </div>
      <div className='bg-white min-w-96 p-5 shadow-xl rounded-lg'>
       <Title className={'text-xl font-bold'}>Admin Panel Login</Title>

       <form onSubmit={handleAdminLogin} className='flex flex-col gap-5 mt-4'>
        <div>
            <p className='text-sm font-semibold'>Email Address</p>
            <input type="email" placeholder='Enter your Email...*' className='border w-full py-1 px-4 mt-1 rounded-md border-gray-400' required value={email} onChange={(e)=> setEmail(e.target.value)} />
        </div>

        <div>
            <p className='text-sm font-semibold'>Password</p>
            <input type="password" placeholder='Enter your password...*' className='border w-full py-1 px-4 mt-1 rounded-md border-gray-400' required value={password} onChange={(e)=> setPassword(e.target.value)} />
        </div>
        <button type='submit' className='bg-black/80 text-white py-2 rounded-md hover:bg-black duration-300 transition-colors'>
            Login
        </button>

       </form>
      </div>
    </div>
  )
}

export default Login
