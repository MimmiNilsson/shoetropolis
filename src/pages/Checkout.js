//=============================================================================
/*===== MIMMI: CHECKOUT / CHECKOUT (CART AND FORM) PAGE =====*/
//=============================================================================

import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {RiArrowGoBackLine} from 'react-icons/ri';
import './Checkout.css';


function Checkout(props) {
	//==========CHECKOUT CART==========
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
				<div className='checkout-cart-container'>
					<h1 className='checkout-h1'>Products</h1>
					{props.cartItems.map(item => 
					<table className='checkout-table'>
						<tr className='checkout-table-row'>
							<td className='checkout-table-cell table-img'><img src={item.image} alt={item.title} width='20%'/></td>
							<td className='checkout-table-cell'><p>{item.title}</p></td>
							<td className='checkout-table-cell'>
								<button onClick={decrementCount}>-</button>
								{count}
								<button onClick={incrementCount}>+</button>
							</td>
							<td className='checkout-table-cell'><p>{item.price} SEK</p></td>
							<tfoot className='checkout-table-foot'>Total Price: {props.sum} SEK</tfoot>
						</tr>
					</table>
					)}
				</div>

				{/* <h1 className='checkout-h1'>Products</h1>
				<table className='checkout-table'>
					<tbody className='checkout-table-body'>
						<tr className='checkout-table-row'>
							<td className='checkout-table-cell table-img table-col'>
								{props.cartItems.map(item => 
								<div><img src={item.image} alt={item.title} width='100%'/></div>
								)}
							</td>
							<td className='checkout-table-cell table-col'>
								{props.cartItems.map(item => <p>{item.title}</p>)}
							</td>
							<td className='checkout-table-cell table-col'>
								{props.cartItems.map(item =>
								<div>
									<button onClick={decrementCount}>-</button>
									{count}
									<button onClick={incrementCount}>+</button>
								</div>
								)}
							</td>
							<td className='checkout-table-cell table-col'>
								{props.cartItems.map(item =>  <p>{item.price} SEK</p>)}
							</td>
							<td className='checkout-table-cell table-col'>
								{props.cartItems.map(item => <button className='remove-btn'>Remove</button>)}
							</td>
						</tr>
					</tbody>
					<tfoot className='checkout-table-foot'>Total Price: {props.sum} SEK</tfoot>
				</table> */}
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