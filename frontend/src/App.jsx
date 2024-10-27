import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import './index.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Order from './pages/PlaceOrder/Order'
import Login from './components/Login/Login'
import Footer from './components/Footer/Footer'
import Verify from './pages/Verify/Verify'
import MyOrders from './pages/Myorders/Myorders'
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
        <Route path='/verify' element={<Verify/>}></Route>
        <Route path='/myorders' element={<MyOrders/>}></Route>
      </Routes>
      <Footer/>
    </div>
    </>
  )
}

export default App