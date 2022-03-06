//=============================================================================
/*===== MIMMI: CHECKOUT / CHECKOUT PAGE =====*/
//=============================================================================

import React from 'react';
import CheckoutCart from '../components/CheckoutCart';
import CheckoutForm from '../components/CheckoutForm';


function Checkout({addToCart, cartItems}) {
  return (
	  <div>
		<CheckoutCart addToCart={addToCart} cartItems={cartItems}/>
		<CheckoutForm />
	  </div>
	  
  )}

export default Checkout;