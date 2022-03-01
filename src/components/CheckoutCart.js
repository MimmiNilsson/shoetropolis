//=============================================================================
/*===== MIMMI: CHECKOUT / CART COMPONENT =====*/
//=============================================================================

import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import CartItems from './CartItems';

function CheckoutCart() {
    const cartItems = [ 
        {
            id: 1, 
            title: 'Name of Shoe', 
            price: 'Price of Item'
        },
    
        {
            id: 2, 
            title: 'Name of Second Shoe', 
            price: 'Price of Second Item'
        }
    
    ];
    
    const [cartIsEmpty, setCartIsEmpty] = useState(true);

    const handleCartIsEmpty = () => {
        setCartIsEmpty(true)
    }

    const handleCartIsNotEmpty = () => {
        setCartIsEmpty(false)
    }

    // HELP... how to target an entire div???
    // does this function need to be from cart and then passed to checkout?
    
    let div = ''
    if (cartIsEmpty){
        <div className='checkout-cart-container'>
            <h1>Cart Items</h1>
            <p>Your shopping cart is currently empty. Let's put our best foot forward and find it some friends!</p>
            <Link to='/products'><button>Back to Products</button></Link>
        </div>
    } else {
    
    }

    // Need to map table items... cart items... and display in checkout...
  return (
      <div>
          <ul>
              {
                cartItems.map(cartItem => <CartItems cartItem={cartItem} />)
              }
          </ul>
          <table>
              <tr>
                  <th>Product</th>
                  <th>Name</th>
                  <th>Price</th>
              </tr>
              <tr>
                  <td>Shoe</td>
                  <td>Blue Summer Shoes</td>
                  <td>499</td>
              </tr>
              <tr></tr>
              
          </table>
         
      </div>
    
  )
}

export default CheckoutCart;