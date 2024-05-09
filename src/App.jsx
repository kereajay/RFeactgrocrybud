import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Card from  "./Card"

function App() {
 

  return (
    <>
     
     <ToastContainer/>
       <Card/>
       
    </>
  )
}

export default App
