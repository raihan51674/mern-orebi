import React from 'react'
import Container from './Container'
import {logo} from '../assets/images/index'
import { Link } from 'react-router-dom'

const Navbar = ({token,setToken}) => {

  const handleToken = () => {
    setToken('');
  }
  




  return (
    <header className='border-b border-b-gray-600 w-full sticky top-0 left-0 z-50 bg-white'>
      <Container className='py-6 flex items-center justify-between'>
       <div>
      <Link to={'/'}>
      <img src={logo} alt="logo" className='w-24' />
      <p className='text-xs font-bold uppercase tracking-wide text-blue-500 mt-2'>Admin Panel</p>
      
      </Link>
       </div>
       {token ? <button onClick={handleToken} className='bg-black/80 text-white py-2 px-6 hover:bg-black rounded-md duration-300'>Logout</button> : <button  className='bg-black/80 text-white py-2 px-6 hover:bg-black rounded-md duration-300'>Login</button>}
      </Container>
    </header>
  )
}

export default Navbar
