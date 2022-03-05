// //=============================================================================
// /*===== MIMMI: CHECKOUT / CART ITEMS COMPONENT =====*/
// //=============================================================================

// import React, {useState} from 'react';

// function CartItems(props) {
//     const [count, setCount] = useState(0);
   
//     function decrementCount() {
//         setCount(prevCount => prevCount -1)
//     }

//    function incrementCount() {
//         setCount(prevCount => prevCount +1)
//     }

//   return (
//     <div>
//         <div>
//             <li>{props.cartItem.id}{props.cartItem.title}{props.cartItem.price}</li>
//             <span>{count}</span>
//             <button onClick={decrementCount}>-</button>
//             <button onClick={incrementCount}>+</button>
//             <button>Remove</button>
//         </div>
//     </div>
//   )
// }

// export default CartItems;