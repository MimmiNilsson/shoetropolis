//=============================================================================
/*===== MIMMI: CHECKOUT / CHECKOUT (CART AND FORM) PAGE =====*/
//=============================================================================

import React, {useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import {RiArrowGoBackLine} from 'react-icons/ri';
import {TiDelete} from 'react-icons/ti'
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'
import {AppContext} from '../../App';
import './Checkout.css';


function Checkout(props) {

	const {items, setItems} = useContext(AppContext)

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
		let filtered = items.filter(c => c.id !== item.id);
		setItems(filtered);
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
		<div className='checkout-container'>
			<div className='checkout-main-cart'>
				{/* CHECKOUT EMPTY CART */} {/* CHECKOUT NOT EMPTY CART */}
				{items.length < 1 
				?
				<div className='checkout-empty'>
					<h1 className='checkout-h1 empty-cart-h1'>Cart Items</h1>
					<p className='checkout-p empty-cart-p'>Your shopping cart is currently empty. Let's put our best foot forward and find it some friends!</p>
					<Link to='/products'><button className='empty-cart-return-btn'>Back to Products</button></Link>
				</div>
				:
				<div>
					<Link to='/products'><button className='checkout-btn return-btn'>Back to Products <RiArrowGoBackLine /></button></Link>
					<div className='checkout-cart-container'>
					<h1 className='checkout-h1 not-empty-cart-h1'>Products</h1>
					{items.map(item => 
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
							<button className='checkout-cart-qty-btn minus' onClick={decrementCount}><AiOutlineMinus /></button>
							{count}
							<button className='checkout-cart-qty-btn plus' onClick={incrementCount}><AiOutlinePlus /></button>
						</div>
						<div className='cart-box box-4'>
							<button className='checkout-cart-remove-btn' onClick={() => deleteCartItem(item)}><TiDelete /></button>
						</div>
					</div> 
					)}
					<p className='checkout-cart-footer'>Total price: {props.sum} SEK</p>
				</div>
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
					{/* <h2>{JSON.stringify(user)}</h2> */}
				</form>
				<Link to='/checkoutmsg'><button className='checkout-order-btn'>Place Order</button></Link>
			</div>
		</div>
	</div>
  )}

export default Checkout;