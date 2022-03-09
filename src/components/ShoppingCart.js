import React from "react";
import "./ShoppingCart.css";
import ShoppingCartItem from "./ShoppingCartItem";
import {Link} from 'react-router-dom'


export default function ShoppingCart({ items, deleteFromCart, sum, quantity, open, setOpen }) {


  return (
    <div className={`cart-container ${ open && 'open' }`}>
      <div className="modal">
      <button className="cartBtn" onClick={() => setOpen(!open)}>Close</button>
      <p>items: {quantity}</p>
      <p>Total Price: {sum} </p>
      <Link to='/checkout'><button className="cartBtnCheckout">Checkout</button></Link>
      </div>
      <div>
      {items.map((cart) => (
        <ShoppingCartItem
          sum={sum} 
          key={cart.id}
          cart={cart}
          deleteFromCart={deleteFromCart}
        />
      ))}
      </div>
    </div>
  );
}
