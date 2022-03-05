import React, {useState} from 'react';
import {Link} from 'react-router-dom';

function CheckoutCart(props) {

//     const [count, setCount] = useState(0);
   
//     function decrementCount() {
//         setCount(prevCount => prevCount -1)
//     }

//    function incrementCount() {
//         setCount(prevCount => prevCount +1)
//     }
    
    // const [cartIsEmpty, setCartIsEmpty] = useState(true);

    // const handleCartIsEmpty = () => {
    //     setCartIsEmpty(true)
    // }

    // const handleCartIsNotEmpty = () => {
    //     setCartIsEmpty(false)
    // }

    // HELP... how to target an entire div???
    // does this function need to be from cart and then passed to checkout?
    
    
    // let div = ''
    // if (cartIsEmpty){
        
    // } else {
    
    // }



    // Need to map table items... cart items... and display in checkout...
  return (
      <div>
          <div className='checkout-cart-container'>
            <h1>Cart Items</h1>
            <p>Your shopping cart is currently empty. Let's put our best foot forward and find it some friends!</p>
            <Link to='/products'><button>Back to Products</button></Link>
        </div>
        <div>
            {/* <li>{props.cartItem.id}{props.cartItem.title}{props.cartItem.price}</li> */}
            {/* <span>{count}</span>
            <button onClick={decrementCount}>-</button>
            <button onClick={incrementCount}>+</button>
            <button>Remove</button> */}
        </div>

        <div>
            <h1>Cart Items 2</h1>
            <p>
                {
                    props.cartItems.map(item => <p>{item.title}</p>)
                }   
            </p>
            {/* <p>{props.cartItems}</p> */}
        </div>

        {/* <div>
              {
                cartItems.map(cartItem => <CartItems key={cartItems.id} cartItem={cartItem} />)
              }
        </div> */}
         
          {/* <table>
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
          </table> */}
         
      </div>
    
  )
}

export default CheckoutCart;