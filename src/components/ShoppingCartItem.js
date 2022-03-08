import React from "react";

function ShoppingCartItem({cart, deleteFromCart}) { 

    const handleDeleteBtn = () => {
        deleteFromCart(cart.id)
     
        console.log('handleDeleteBtn');
    }

  return (
    <div>
      <div key={cart.id} className="shopCart">
        <p>{cart.title}</p>
        <p>{cart.price}</p>
        <img src={cart.img} width="150px" height="150px" /> 
        <button>+</button> 
        <button>-</button>
        <button onClick={handleDeleteBtn}>Remove from cart</button>
      </div>
    </div>
  );
}

export default ShoppingCartItem;
