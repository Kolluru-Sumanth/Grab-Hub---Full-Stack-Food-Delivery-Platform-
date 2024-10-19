import React, { useState } from 'react';
import { assets } from '../../assets/frontend_assets/assets';
import './navbar.css';
import { Link } from 'react-router-dom';
const Navbar = ({setShowLogin}) => {
  const [menu, setMenu] = useState("Home");

  return (
    <div className='navbar'>
      <Link to="/"><img src={assets.logo} alt="Grab Hub" className='logo' /></Link>
      <ul className="navbar-menu">
        <Link to={"/"} onClick={()=>{setMenu("Home")}} className={menu==="Home"? "active": ""}>Home</Link>
        <a href='#explore-menu' onClick={()=>{setMenu("Menu")}} className={menu==="Menu"? "active": ""}>Menu</a>
        <a href='#app-download' onClick={()=>{setMenu("Mobile-App")}} className={menu==="Mobile-App"? "active": ""}>Moblie-App</a>
        <a href='#footer' onClick={()=>{setMenu("Contact-Us")}} className={menu==="Contact-Us"? "active": ""}>Contact-Us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="search" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="cart" />
          <div className="dot"></div>
        </div>
        <button onClick={()=>{setShowLogin(true)}}>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
