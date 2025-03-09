import React from 'react'
import { Toaster } from 'react-hot-toast'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'
import Header from '../Header'
import ServicesTag from '../ServicesTag'

const RootLayout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <ServicesTag/>
    <Footer/>
    <Toaster 
       position='bottom-right'
       toastOptions={{
        style :{
          background : "#000000",
          color :"#ffffff",
        },
       }}
    />
      
    </>
  )
}

export default RootLayout
