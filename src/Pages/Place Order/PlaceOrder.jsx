import React, { useContext } from 'react'
import './Place Order.css'
import { StoreContext } from '../../context/Storecontext'

const PlaceOrder = () => {
  const {getTotalCartAmount}=useContext(StoreContext);
  return (
   <form  className='place_order'   action="">
   <div className="place_order_left">
    <p className='title'>Delivery Information</p>
    <div className="multi_fields">
      <input type="text" placeholder='First name' />
      <input type="text" placeholder='last name'/>
    </div>
    <input type="text" placeholder='Email address'/>
    <input type="text" placeholder='Street' />

    <div className="multi_fields">
    <input type="text" placeholder='City'/>
    <input type="text" placeholder='State' />
    </div>
    <div className="multi_fields">
    <input type="text" placeholder='Zip code'/>
    <input type="text" placeholder='Country' />
    </div>

    <input type="text" placeholder='Phone' />
    

   </div>
   <div className="place_order_right">
   <div className="cart_total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart_total_details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
              
            </div>
            <div className="cart_total_details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
  
            </div>
            <hr />
            <div className="cart_total_details">
              <b>Total</b>
              <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button onClick={()=>navigate('/order')}>Proceed To Checkout</button>
          
        </div>
        <div className=" ">
          <p>If you have a promocode,Enter it here</p>
          <div className="cart_promocode_input">
            <input type="text" placeholder='Promo Code' />
            <button>Submit</button>
          </div>
        </div>
      </div>
     

      </form>



   
  )
}

export default PlaceOrder