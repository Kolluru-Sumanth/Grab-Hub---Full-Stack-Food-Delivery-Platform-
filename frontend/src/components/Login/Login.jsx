import React, { useState } from 'react'
import "./Login.css"
import { assets } from '../../assets/frontend_assets/assets'
const Login = ({setShowLogin}) => {
  const [current,setCurrent]=useState("Sign-Up")
  return (
<div className="login-popup">
<form className="login-popup-container">
    <div className="login-popup-title">
        <h2>{current}</h2>
        <img onClick={()=>{setShowLogin(false)}} src={assets.cross_icon} alt="" />
    </div>
    <div className="login-popup-input">
        {current==="Sign-Up"?<input type="text" placeholder='Your Name' required/>:<></>}
        <input type="email" placeholder='Your Email'required/>
        <input type="password" placeholder='Password' required/>
    </div>
    <button>{current==="Sign-Up"?"Create Account":"Login"}</button>
    <div className="login-popup-condition">
        <input type="checkbox" required />
        <p>By continuing,I agree to the Terms and Conditions</p>
    </div>
    {current==="Sign-Up"?<p>Already have an Account? <span onClick={()=>{setCurrent("Login")}}>Login</span></p>
    :<p>Create a new Accont? <span onClick={()=>{setCurrent("Sign-Up")}}>Click here</span></p>}
</form>
</div>
)
}

export default Login