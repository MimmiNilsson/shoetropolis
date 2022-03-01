//=============================================================================
/*===== MIMMI: CHECKOUT / CART ITEMS COMPONENT =====*/
//=============================================================================

import React from 'react';

function CartItems(props) {
  return (
    <div>
        <div>
            <li>{props.cartItem.id}{props.cartItem.title}{props.cartItem.price}</li>
        </div>
    </div>
  )
}

export default CartItems;