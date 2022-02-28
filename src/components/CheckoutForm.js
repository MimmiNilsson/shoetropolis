import React, {useState} from 'react'
import {Link} from 'react-router-dom';

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
    <div className='checkout-contaienr'>
		<div className='checkout-form'>
			<h1>Shipping Details</h1>
			<form>
				<label>First Name</label>
				<input type="text" name='firstname' value={user.firstname} onChange={handleChange}></input>
				
				<label>Last Name</label>
				<input type="text" name='lastname' value={user.lastname} onChange={handleChange}></input>
				
				<label>Email</label>
				<input type="text" name='email' value={user.email} onChange={handleChange}></input>
				
				<label>Street Address</label>
				<input type="text" name='street' value={user.street} onChange={handleChange}></input>

				<label>Zip Code</label>
				<input type="text" name='zip' value={user.zip} onChange={handleChange}></input>

				<label>City</label>
				<input type="text" name='city' value={user.city} onChange={handleChange}></input>

				<label>Country</label>
				<select name='country' value={user.country} onChange={handleChange}>
					<option value="SE">Sweden</option>
					<option value="NO">Norway</option>
					<option value="FI">Finland</option>
					<option value="DK">Denmark</option>
				</select>
				
				<label>Comment</label>
				<textarea name="comment" value={user.comment} onChange={handleChange}></textarea>

				<Link to='/checkoutmsg'><button>Proceed to Checkout</button></Link>
				<h2>{JSON.stringify(user)}</h2>
			</form>
		</div>
    </div>
  )
}

export default CheckoutForm;