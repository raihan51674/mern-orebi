import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
 <BrowserRouter>
     <StrictMode>
    <App />
    <Toaster 
       position='bottom-right'
       toastOptions={{
        style :{
          background : "#000000",
          color :"#ffffff",
        },
       }}
    />
       
    
  </StrictMode>
 </BrowserRouter>
)
