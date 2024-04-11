import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import {Route,Routes} from 'react-router-dom'
import Cart from './Pages/Cart/Cart'
import Home from './Pages/Home/Home'
import PlaceOrder from './Pages/Place Order/PlaceOrder'
import Footer from './Components/Footer/Footer'
import LoginPopup from './Components/LoginPopup/LoginPopup'
function App() {
  const [showLogin,setshowLogin]=useState(false);

  return (
    <>
    
    {showLogin?<LoginPopup setshowLogin={setshowLogin}/>:<></>}
     <div className='app'>
      <Navbar  setshowLogin={setshowLogin}/>
      
      <Routes>
      <Route path='/'  element={<Home />}/>
       <Route path='/cart'  element={<Cart />}/>
       <Route path='/order'  element={<PlaceOrder />}/>
      </Routes>
      
     
    </div>
    <Footer />

    </>
   
  )
}

export default App