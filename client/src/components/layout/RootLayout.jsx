import React from 'react'
import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from '../../redux/store'
import Footer from '../Footer'
import Header from '../Header'
import ServicesTag from '../ServicesTag'

const RootLayout = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
        <Header />
        <ScrollRestoration />
        <Outlet />
        <ServicesTag />
        <Footer />
        <Toaster 
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#000000",
              color: "#ffffff",
            },
          }}
        />
      </PersistGate>
    </Provider>
  )
}

export default RootLayout
