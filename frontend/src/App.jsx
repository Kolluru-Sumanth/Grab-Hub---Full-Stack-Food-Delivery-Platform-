import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import './index.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Order from './pages/PlaceOrder/Order'
import Login from './components/Login/Login'
import Footer from './components/Footer/Footer'
const App = () => {
  const [showLogin,setShowLogin]=useState(false) 
  return (
    <>
    {showLogin?<Login setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/Order' element={<Order/>}/>
      </Routes>
      <Footer/>
    </div>
    </>
  )
}

export default App