//=============================================================================
/*===== MIMMI: CHECKOUT / CHECKOUT (CART AND FORM) PAGE =====*/
//=============================================================================

import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {RiArrowGoBackLine} from 'react-icons/ri';
import './Checkout.css'
// import Product from './Product';
// import CheckoutCart from '../components/CheckoutCart';
// import CheckoutForm from '../components/CheckoutForm';


function Checkout(props) {
	//==========CHECKOUT CART==========
	console.log(props);
	// FROM CART?!
	
	const [count, setCount] = useState(0);
   
    function decrementCount() {
        setCount(prevCount => prevCount -1)
    }

   function incrementCount() {
        setCount(prevCount => prevCount +1)
    }

	//==========CHECKOUT FORM==========
	const [user, setUser] = useState({
		firstname: '',
		lastname: '',
		email: '',
		street: '',
		zip: '', 
		city: '',
		country: 'SE',
		comment: ''
	})

	const handleChange = (e) => {
		const inputValue = e.target.value;
		const inputName = e.target.name;

		setUser({
			...user,
			[inputName]: inputValue
		})
	}

  return (
	<div>
		<Link to='/products'><button className='checkout-btn return-btn'>Back to Products <RiArrowGoBackLine /></button></Link>
		<div className='checkout-container'>
			<div className='checkout-main-cart'>
				{/* CHECKOUT EMPTY CART */}
				<div className='checkout-empty'>
					<h1 className='checkout-h1'>Cart Items</h1>
					<p className='checkout-p'>Your shopping cart is currently empty. Let's put our best foot forward and find it some friends!</p>
				</div>
				{/* CHECKOUT NOT EMPTY CART */}
				{/* <div>
					{props.cartItems.map(i =>(
						<td>{i.title}</td>
					))}
				</div> */}
				<table className='checkout-table'>
					<thead className='checkout-table-head'>
						<h1 className='checkout-h1'>Products</h1>
					</thead>
					<tbody>
						<tr className='checkout-table-row'>
							<td className='checkout-table-cell'>
								{props.cartItems.map(item => <p>{props.product.image}</p>)}
							</td>
							<td>
								{props.cartItems.map(item => <p>{props.product.title}</p>)}
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
								{props.cartItems.map(item =>  <p>{props.product.price}</p>)}
							</td>
							<td>
								{props.cartItems.map(item => <button className='remove-btn'>Remove</button>)}
							</td>
						</tr>
					</tbody>
					<tfoot>Total Price: {props.sum} SEK </tfoot>
				</table>
			</div>
			{/* CHECKOUT FORM */}
			<div className='checkout-aside-form'>
			<h1 className='checkout-h1 checkout-header'>Shipping Details</h1>
				<form className='checkout-form'>
					<label className='checkout-form-label'>First Name</label>
					<input className='checkout-form-input' type="text" name='firstname' value={user.firstname} onChange={handleChange}></input>
					
					<label className='checkout-form-label'>Last Name</label>
					<input className='checkout-form-input' type="text" name='lastname' value={user.lastname} onChange={handleChange}></input>
					
					<label className='checkout-form-label'>Email</label>
					<input className='checkout-form-input' type="text" name='email' value={user.email} onChange={handleChange}></input>
					
					<label className='checkout-form-label'>Street Address</label>
					<input className='checkout-form-input' type="text" name='street' value={user.street} onChange={handleChange}></input>

					<label className='checkout-form-label'>Zip Code</label>
					<input className='checkout-form-input' type="text" name='zip' value={user.zip} onChange={handleChange}></input>

					<label className='checkout-form-label'>City</label>
					<input className='checkout-form-input' type="text" name='city' value={user.city} onChange={handleChange}></input>

					<label className='checkout-form-label'>Country</label>
					<select type='select' className='checkout-form-input' name='country' value={user.country} onChange={handleChange}>
						<option value="SE">Sweden</option>
						<option value="NO">Norway</option>
						<option value="FI">Finland</option>
						<option value="DK">Denmark</option>
					</select>
					
					<label className='checkout-form-label'>Comment</label>
					<textarea className='checkout-form-input textarea-input' name="comment" value={user.comment} onChange={handleChange}></textarea>

					<Link to='/checkoutmsg'><button className='order-btn'>Place Order</button></Link>
					{/* <h2>{JSON.stringify(user)}</h2> */}
				</form>
			</div>
		</div>
	</div>
  )}

export default Checkout;