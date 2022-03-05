import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {RiArrowGoBackLine} from 'react-icons/ri';
import '../pages/Checkout.css'

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
          <Link to='/products'><button className='checkout-btn return-btn'>Back to Products <RiArrowGoBackLine /></button></Link>
          <div className='checkout-cart-container'>
              <div className='checkout-box box-1'>
              <h1 className='checkout-h1'>Cart Items</h1>
            <p className='checkout-p'>Your shopping cart is currently empty. Let's put our best foot forward and find it some friends!</p>
              </div>
            
        </div>
        <div>
            {/* <li>{props.cartItem.id}{props.cartItem.title}{props.cartItem.price}</li> */}
            {/* <span>{count}</span>
            <button onClick={decrementCount}>-</button>
            <button onClick={incrementCount}>+</button>
            <button>Remove</button> */}
        </div>

        <div className='checkout-box box-2'>
            <h1>Cart Items 2</h1>
            <p className='checkout-p'>
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