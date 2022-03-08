//=============================================================================
/*===== MIMMI: CHECKOUT / CHECKOUT (CART AND FORM) PAGE =====*/
//=============================================================================

import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {RiArrowGoBackLine} from 'react-icons/ri';
import {useContext} from 'react'
import {AppContext} from '../App';
import './Checkout.css';


function Checkout(props) {

	const {setCartItems, cartItems} = useContext(AppContext)

	//==========CHECKOUT CART==========
	const [count, setCount] = useState(0);
   
    function decrementCount() {
        setCount(prevCount => prevCount -1)
    }

   function incrementCount() {
        setCount(prevCount => prevCount +1)
    }

	 //==========CHECKOUT / DELETE==========
	 const deleteCartItem = (item) => {
		let filtered = cartItems.filter(c => c.id !== item.id);
		setCartItems(filtered);
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
				{/* CHECKOUT EMPTY CART */} {/* CHECKOUT NOT EMPTY CART */}
				{cartItems.length < 1 
				?
				<div className='checkout-empty'>
					<h1 className='checkout-h1'>Cart Items</h1>
					<p className='checkout-p'>Your shopping cart is currently empty. Let's put our best foot forward and find it some friends!</p>
				</div>
				:
				<div className='checkout-cart-container'>
					<h1>Products</h1>
					{cartItems.map(item => 
					<div className='cart-wrapper' key={item.id}>
						<div className='cart-box box-1'>
							<img className='box-1-img' src={item.image} alt={item.title} width='80%'/>
						</div>
						<div className='cart-box box-2'>
							<p>{item.title}</p>
						</div>
						<div className='cart-box box-3'>
							<p>{item.price} SEK</p>
						</div>
						<div className='cart-box box-4'>
							<button onClick={decrementCount}>-</button>
							{count}
							<button onClick={incrementCount}>+</button>
						</div>
						<div className='cart-box box-4'>
							<button className='remove-btn' onClick={() => deleteCartItem(item)}>Remove</button>
						</div>
					</div> 
					)}
					<p>Total Price: {props.checkoutTotal} SEK</p>
				</div>
				}	
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