import React, { useState } from 'react';
import { assets } from '../../assets/frontend_assets/assets';
import './navbar.css';

const Navbar = () => {
  const [menu, setMenu] = useState("Home");

  return (
    <div className='navbar'>
      <img src={assets.logo} alt="Grab Hub" className='logo' />
      <ul className="navbar-menu">
        {["Home", "Menu","Mobile-App", "Contact-Us"].map((item) => (
          <li
            key={item}
            onClick={() => setMenu(item)}
            className={menu === item ? "active" : ""}
          >
            {item}
          </li>
        ))}
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="search" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="cart" />
          <div className="dot"></div>
        </div>
        <button>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
