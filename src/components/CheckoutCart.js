import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {RiArrowGoBackLine} from 'react-icons/ri';
import '../pages/Checkout.css'

function CheckoutCart(props) {

    const [count, setCount] = useState(0);
   
    function decrementCount() {
        setCount(prevCount => prevCount -1)
    }

   function incrementCount() {
        setCount(prevCount => prevCount +1)
    }
    
    // const [cartIsEmpty, setCartIsEmpty] = useState(true);

    // const handleCartIsEmpty = () => {
    //     setCartIsEmpty(true)
    // }

    // const handleCartIsNotEmpty = () => {
    //     setCartIsEmpty(false)
    // }

    
    
    // let div = ''
    // if (cartIsEmpty){
        
    // } else {
    
    // }


  return (
      <div>
		  <Link to='/products'><button className='checkout-btn return-btn'>Back to Products <RiArrowGoBackLine /></button></Link>
		  <div className='checkout-cart-container'>
			  
			  {/* <div className='checkout-box-1'>
				  <h1 className='checkout-h1'>Cart Items</h1>
				  <p className='checkout-p'>Your shopping cart is currently empty. Let's put our best foot forward and find it some friends!</p>
			  </div> */}

			  <div className='checkout-box-2'>
				  <table className='checkout-table'>
					  <thead className='checkout-table-head'><h1>Products</h1></thead>
					  <tr className='checkout-table-row'>
						  <td className='checkout-table-cell'>
							  {props.cartItems.map(item => <p>{item.image}</p>)}
						  </td>
						  <td>
							  {props.cartItems.map(item => <p>{item.title}</p>)}
						  </td>
						  <td>
							  {props.cartItems.map(item =>
									<div>
										<button onClick={decrementCount}>-</button>
							  			<button onClick={incrementCount}>+</button>
									</div>
									)}
						  </td>
						  <td>
							  {props.cartItems.map(item =>  <p>{item.price}</p>)}
						  </td>
						  <td>
							  {props.cartItems.map(item => <button className='remove-btn'>Remove</button>)}
						  </td>
						</tr>
						<tfoot>Total Price: {props.price} SEK </tfoot>
				  </table>
			  </div>
			  {/* <div className='checkout-box item-3'>
				  <table className='checkout-table'>
					  <thead className='checkout-table-head'>
						  <tr className='checkout-table-row'>
							  <th>Product</th>
							  <th>Name</th>
							  <th>Qty</th>
							  <th>Price</th>
							  <th>Remove</th>
						  </tr>
					  </thead>
					  <tbody className='checkout-table-body'>
						  <tr>Picture</tr>
						  <tr>Name of Prod</tr>
						  <tr>Qty<button onClick={decrementCount}>-</button><button onClick={incrementCount}>+</button></tr>
						  <tr>Cost</tr>
						  <tr><button>Remove</button></tr>
					  </tbody>
					  <tfoot className='checkout-table-foot'>
						  <tr>
							  <td>Sum</td>
							  <td>499</td>
						  </tr>
					  </tfoot>
				  </table>
			  </div> */}
		  </div>




		  
			  
				{/* <li>{props.cartItem.id}{props.cartItem.title}{props.cartItem.price}</li> */}
				{/* <span>{count}</span>
				<button onClick={decrementCount}>-</button>
				<button onClick={incrementCount}>+</button>
				<button>Remove</button> */}
				

			{/* <div>
				{
					cartItems.map(cartItem => <CartItems key={cartItems.id} cartItem={cartItem} />)
				}
			</div> */}
			
			
			 
      </div>
    
  )
}

export default CheckoutCart;