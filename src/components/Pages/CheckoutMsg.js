//=============================================================================
/*===== MIMMI: CHECKOUT / CHECKOUT MESSAGE PAGE =====*/
//=============================================================================

import React from 'react';
import {Link} from 'react-router-dom';
import './CheckoutMsg.css'

function CheckoutMsg() {
    
  return (
    <div className='checkout-msg-container'>
      <div className='checkout-msg-wrap'>
        <h2 className='checkout-msg-h2'>Thank you for choosing Shoetropolis!</h2>
        <p className='checkout-msg-p'>Your order is being processed and you will shortly receive an order confirmation to your email with your purchase details and tracking information.</p>
        <Link to='/home'><button className='checkout-msg-return-btn'>Back to Shoetropolis</button></Link>
      </div>
    </div>
  )
}

export default CheckoutMsg;