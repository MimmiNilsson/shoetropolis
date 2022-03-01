//=============================================================================
/*===== MIMMI: CHECKOUT / CHECKOUT PAGE =====*/
//=============================================================================

import React from 'react';
import CheckoutCart from '../components/CheckoutCart';
import CheckoutForm from '../components/CheckoutForm';

function Checkout() {
  return (
	  <div>
		<CheckoutCart />
		<CheckoutForm />
	  </div>
	  
  )}

export default Checkout;