import React, { useContext, useState } from 'react'
import axios from "axios"
import "./Login.css"
import { assets } from '../../assets/frontend_assets/assets'
import { StoreContext } from '../../context/StoreContext'
const Login = ({setShowLogin}) => {
    const {url,setToken}=useContext(StoreContext);

    const [current,setCurrent]=useState("Sign-Up");
    const [data,setData]=useState({
        name:"",
        email:"",
        password:""
    })

    const onChangeHandler=(event)=>{
        const name= event.target.name;
        const value= event.target.value;
        setData(data=>({...data,[name]:value}))
    }

    const onLogin= async(event)=>{
        event.preventDefault();
        let newUrl=url;
        if (current==="Login") {
            newUrl+="/api/user/login"
        }
        else{
            newUrl+="/api/user/register"
        }

        const response= await axios.post(newUrl,data);
        if (response.data.success) {
            setToken(response.data.token);
            localStorage.setItem("token",response.data.token);
            setShowLogin(false)
        }
        else{
            alert(response.data.message);
        }
    }
  return (
<div className="login-popup">
<form onSubmit={onLogin} className="login-popup-container">
    <div className="login-popup-title">
        <h2>{current}</h2>
        <img onClick={()=>{setShowLogin(false)}} src={assets.cross_icon} alt="" />
    </div>
    <div className="login-popup-input">
        {current==="Sign-Up"?<input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Your Name' required/>:<></>}
        <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Your Email'required/>
        <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Password' required/>
    </div>
    <button type='submit'>{current==="Sign-Up"?"Create Account":"Login"}</button>
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