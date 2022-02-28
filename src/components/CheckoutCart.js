import React from 'react'
import {Link} from 'react-router-dom'

function CheckoutCart() {
  return (
    <div className='checkout-cart-container'>
        
			<h1>Cart Items</h1>
			<p>Your shopping cart is currently empty. Let's put our best foot forward and find it some friends!</p>
			<Link to='/products'><button>Back to Products</button></Link>
			<table>
			</table>
   		
    </div>
  )
}

export default CheckoutCart