import React, { useState } from 'react';
import { assets } from '../../assets/assets';
import './LoginPopup.css';


const LoginPopup = ({ setshowLogin }) => {
  const [currState, setcurrState] = useState('Login');
  
  

  return (
    <div className='login_popup'>
      <form action="" className="login_popup_container">
        <div className="login_popup_title">
          <h2>{currState}</h2>
          <img onClick={() => setshowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login_popup_input">
          {currState === 'Login' ? <></> : <input type="text" placeholder='Name' required/>}
          <input type="email" placeholder='Email' required />
          <input type="password" placeholder='Password' required/>
        </div>
        <button >{currState === 'Sign Up' ? "Create Account" : "Login"}</button>
        <div className="login_popup_condition">
          <input type="checkbox" required/>
          <p>By continuing,I agree to the terms of use &privacy policy.</p>
        </div>
       
        {currState === 'Login' ? <p>Create a new account? <span onClick={() => setcurrState('Sign Up')}>Click here</span></p> : <p>Already have an account? <span onClick={() => setcurrState('Login')}>Login here</span></p>}
      </form>
    </div>
  );
};

export default LoginPopup;
