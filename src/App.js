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
import CheckoutCart from './components/CheckoutCart';
// import CheckoutCart from './components/CheckoutCart';
// import CartItems from './components/CartItems';

function App() {
  
  const dummyCart = [
    {
      id: 1, 
      title: 'New Shoes'
    },
    {
      id: 2, 
      title: 'New New Shoes'
    }
  ]

  const [cartItems, setCartItems] = useState(dummyCart); 

  const handleOnClick = (e) => {
    e.preventDefault();

    const newItem = {
      id: '',
      title: ''
    }

    setCartItems([
          ...cartItems, 
          newItem
        ])

        console.log('hej');
  }


  const addToCart = (newItem) => {
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
          <Route path='/home' element={<Homepage />}></Route>
          <Route path='/products' element={<Products />}></Route>
          <Route path='/products/:id' element={<Product handleOnClick={handleOnClick} />}></Route>
          <Route path='/cart' element={<Checkout addToCart={addToCart} cartItes={cartItems} />}></Route>
          <Route path='/checkout' element={<CheckoutCart addToCart={addToCart} cartItems={cartItems} />}></Route>
          {/* <Route path='/checkout' element={<CartItems addToCart={addToCart} cartItem={cartItem} />}></Route>                                */}
          <Route path='/checkoutmsg' element={<CheckoutMsg />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
