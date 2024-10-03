import React, { useState } from 'react'
import { assets } from '../../assets/frontend_assets/assets'
import './navbar.css'
const Navbar = () => {
  const [menu,setMenu]=useState("home");

  return (
    <div className='navbar'>
      <img src={assets.logo} alt="Grab Hub" className='logo'/>
      <ul className='navbar-menu'>
        <li  onClick={()=>{setMenu("home")}} className={menu==="home"?"active":""}>Home</li>
        <li  onClick={()=>{setMenu("menu")}} className={menu==="menu"?"active":""}>menu</li>
        <li  onClick={()=>{setMenu("contact us")}} className={menu==="contact us"?"active":""}>contact us</li>
      </ul>
      <div className="navbar-right">
      <img src={assets.search_icon} alt="search" />
      <div className="navbar-search-icon">
      <img src={assets.basket_icon} alt="cart" />
      <div className="dot"></div>
      </div>
      <button>sign in</button>
      </div>
    </div>
  )
}

export default Navbar