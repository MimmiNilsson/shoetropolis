import React from "react";
import "./ShoppingCart.css";
import ShoppingCartItem from "./ShoppingCartItem";


export default function ShoppingCart({ items, deleteFromCart, sum, quantity, open, setOpen }) {


  return (
    <div className={`cart-container ${ open && 'open' }`}>
      ShoppingCart
      <button onClick={() => setOpen(!open)}>x</button>
      <p>items: {quantity}</p>
      <p>Total Price: {sum} </p>
      {items.map((cart) => (
        <ShoppingCartItem
          sum={sum} 
          key={cart.id}
          cart={cart}
          deleteFromCart={deleteFromCart}
        />
      ))}
    </div>
  );
}
