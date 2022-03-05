//=============================================================================
/*===== MIMMI: CHECKOUT / ORDER MESSAGE PAGE =====*/
//=============================================================================

import React from 'react';
import {Link} from 'react-router-dom';

function CheckoutMsg() {
    
  return (
    <div className='checkout-msg-container'>
        <h2>Thank you for choosing Shoetropolis!</h2>
        <p>Your order is being processed and you will shortly receive an order confirmation to your email with your purchase details and tracking information.</p>
        <Link to='/home'><button>Back to Shoetropolis</button></Link>
    </div>
  )
}

export default CheckoutMsg;