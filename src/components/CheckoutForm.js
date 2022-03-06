//=============================================================================
/*===== MIMMI: CHECKOUT / ORDER FORM COMPONENT =====*/
//=============================================================================

import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import '../pages/Checkout.css'

function CheckoutForm() {
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
    <div className='checkout-form-container'>
		<div className='checkout-form-wrap'>
			<h1 className='checkout-h1'>Shipping Details</h1>
			<form className='checkout-form'>
				<div className='checkout-form-box info-box-1'>
					<label className='checkout-form-label'>First Name</label>
					<input className='checkout-form-input' type="text" name='firstname' value={user.firstname} onChange={handleChange}></input>
					
					<label className='checkout-form-label'>Last Name</label>
					<input className='checkout-form-input' type="text" name='lastname' value={user.lastname} onChange={handleChange}></input>
				</div>
				<div className='checkout-form-box info-box-2'>

				</div>
				
				
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
				<h2>{JSON.stringify(user)}</h2>
			</form>
		</div>
    </div>
  )
}

export default CheckoutForm;