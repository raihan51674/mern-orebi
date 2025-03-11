import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Container from '../components/Container'
import Title from '../components/Title'
import LogOut from '../components/LogOut'

const Profile = () => {

  const token = localStorage.getItem("token")
  const navigate =useNavigate();
      
  useEffect(()=>{
    if(!token){
      navigate("/")
    }

  },[token])

  return (
  
   <Container>
    <Title>Profile pages</Title>
    <h1>user details</h1>
    <LogOut/>
   </Container>
    
  )
}

export default Profile
