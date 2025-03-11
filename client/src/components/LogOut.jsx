import React from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'



const LogOut = () => {
  const navigate = useNavigate()

  const handleLogout=()=>{
    localStorage.removeItem('token')
    toast.success("Logout successfully")
    navigate('/')
  }
  return (
    <button onClick={handleLogout} className='bg-primary/80 px-6 py-2 text-lg text-gray-200 hover:bg-primary hover:text-white hoverEffect rounded-md mt-3 '>Logout</button>
  )
}

export default LogOut
