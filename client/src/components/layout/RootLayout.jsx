import React from 'react'
import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import Footer from '../Footer'
import Header from '../Header'
import ServicesTag from '../ServicesTag'
import { store } from '../../redux/store'

const RootLayout = () => {
  return (
    <Provider  store={store}>
    <Header/>
    <ScrollRestoration/>
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
      
    </Provider>
  )
}

export default RootLayout
