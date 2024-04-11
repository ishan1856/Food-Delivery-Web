import React, { useContext, useState } from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/Storecontext';

const Navbar =({setshowLogin}) =>{
    const [menu,setMenu]=useState('home');

    const {getTotalCartAmount}=useContext(StoreContext);
  return (
    <div className='navbar'>
      <div className='logo_title'>
      <Link to='/'>  <img src={assets.logo} alt="" className="logo" /></Link>
      <div className="title">FlavorDash</div>
      </div>
        <ul className="navbar_menu">
            <Link to='/' onClick={()=>setMenu('home')} className={menu==='home'?'active':''}>Home</Link>
            <a href='#explore_menu' onClick={()=>setMenu('menu')} className={menu==='menu'?'active':''}>Menu</a>
            <a href='#appdownload' onClick={()=>setMenu('mobile-app')} className={menu==='mobile-app'?'active':''}>Mobile-App</a>
            <a href='#footer' onClick={()=>setMenu('contact-us')} className={menu==='contact-us'?'active':''}>Contact us</a>
        </ul>
        <div className="navbar_right">
           <img src={assets.search_icon} alt="" /> 
           <div className="navbar_search_icon">
          <Link to='/cart'>  <img src={assets.basket_icon} alt="" /></Link>
            <div className={getTotalCartAmount()===0?"":"dot"}>
              

            </div>
           </div>
           <button onClick={()=>{ setshowLogin(true)
           }}>Sign In</button>
        </div>
    </div>
  )
}

export default Navbar