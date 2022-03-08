import './App.css';
import React, {useEffect, useState, createContext} from 'react';
import {BrowserRouter, Routes, Route,} from "react-router-dom";
import Header from './components/Header';
import Homepage from './pages/Homepage';
import Products from './pages/Products';
import Product from './pages/Product';
import Checkout from './pages/Checkout';
import Footer from './components/Footer';
import CheckoutMsg from './pages/CheckoutMsg';

export const AppContext = createContext();

function App() {

  //==========CART / ADD ITEMS==========
  const [cartItems, setCartItems] = useState([]);
  
  const addToCart = (newItem) => {
    console.log(newItem)
    setCartItems([
      ...cartItems, 
      newItem
    ])
  }

  //==========(CHECKOUT) / TOTAL SUM==========
  const [checkoutTotal, setCheckoutTotal] = useState(0);
  
  const total = () => {
    let totalValue = 0;
    for (let i = 0; i < cartItems.length; i++) {
      totalValue += cartItems[i].price; 
    }
    setCheckoutTotal(totalValue);
  }

  useEffect(() => {
    total();
  }, [cartItems]);
                
  return (     
    <AppContext.Provider value = {{
      setCartItems,
      cartItems
    }}>            
    <div className="page-container">  
      <div className='content-wrap'>
        <BrowserRouter>
        <Header />
          <Routes>
            <Route path='/home' element={<Homepage cartItems={cartItems}/>}></Route>
            <Route path='/products' element={<Products addToCart={addToCart}/>}></Route>
            <Route path='/products/:id' element={<Product addToCart={addToCart} cartItems={cartItems}/>}></Route>
            <Route path='/checkout' element={<Checkout setCartItems={setCartItems} addToCart={addToCart} cartItems={cartItems} checkoutTotal={checkoutTotal} />}></Route>
            <Route path='/checkoutmsg' element={<CheckoutMsg />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
    </AppContext.Provider>  
  );
}

export default App;