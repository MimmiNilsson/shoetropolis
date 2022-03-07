import './App.css';
import React, {useState} from 'react';
import {BrowserRouter, Routes, Route,} from "react-router-dom";
import Header from './components/Header';
import Homepage from './pages/Homepage';
import Products from './pages/Products';
import Product from './pages/Product';
import Checkout from './pages/Checkout';
import Footer from './components/Footer';
import CheckoutMsg from './pages/CheckoutMsg';

function App() {

  // const dummyCart = [
  //   {
	// 		image: 'url',
	// 		title: 'Blue Summer Shoes',
	// 		price: '499 SEK'
	// 	}, 
	// 	{
	// 		image: 'url',
	// 		title: 'Nice Nikes',
	// 		price: '900 SEK'
	// 	},
  //   {
	// 		image: 'url',
	// 		title: 'Funky Shoes',
	// 		price: '3990 SEK'
	// 	}
  // ];

  const [cartItems, setCartItems] = useState([]); 
  // const [sum, setSum] = useState(0);

  const addToCart = (newItem) => {
    console.log(newItem)
    setCartItems([
      ...cartItems, 
      newItem
    ])
  }
                      
  return (                   
    <div className="page-container">  
      <div className='content-wrap'>
        <BrowserRouter>
        <Header />
          <Routes>
            <Route path='/home' element={<Homepage cartItems={cartItems}/>}></Route>
            <Route path='/products' element={<Products addToCart={addToCart}/>}></Route>
            <Route path='/products/:id' element={<Product addToCart={addToCart} cartItems={cartItems}/>}></Route>
            <Route path='/checkout' element={<Checkout addToCart={addToCart} cartItems={cartItems} />}></Route>
            <Route path='/checkoutmsg' element={<CheckoutMsg />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;


// const handleOnClickAdd = (cartItem) => {
//   addToCart(cartItem);