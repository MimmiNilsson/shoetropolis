import React from "react";
import Product from "./Pages/Product";
import './ShoppingCart.css'

function ShoppingCartItem({cart, deleteFromCart}) { 

    const handleDeleteBtn = () => {
        deleteFromCart(cart.id)
     
        console.log('handleDeleteBtn');
    }

  return (
    <div className="cart-items">
      <div key={cart.id} className="shopCart">
        <p>{cart.title}</p>
        <p>{cart.price}</p>
        <button className="removeBtn" onClick={handleDeleteBtn}>Remove</button>
      </div>
      <div>
        <img src={cart.image} alt={cart.title} width="150px" height="150px" /> 
      </div>
    </div>
  );
}

export default ShoppingCartItem;
