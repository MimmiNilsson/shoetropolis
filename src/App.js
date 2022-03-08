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
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./components/Pages/Products";
import HomePage from "./components/Pages/HomePage";
import Header from "./components/Header";
import React, { useEffect, useState } from "react";

function App() {

  const [items, setItems] = useState([]);

  const [sum, setSum] = useState(0); 

  const [quantity, setQuantity] = useState(0)

  useEffect(
    () => {
      total()
    }, [items]
  )
  useEffect(
    () => {
      qty()
    }, [items]
  )

  const qty = () => {
    let totalItems = 0; 
    for (let i = 0; i < items.length; i++) {
      totalItems = items.length
    }
    setQuantity(totalItems)
  }

  const total = () => {
    let totalVal = 0; 
    for (let i = 0; i < items.length; i++) {
      totalVal += items[i].price
    }
    setSum(totalVal)
  }

  const addToCart = (newItem) => {
    console.log(newItem);
    setItems([...items, newItem]);

  };

  const deleteFromCart = (id) => {
    let remove = items.filter((item) => item.id !== id);
    setItems(remove);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Header
          addToCart={addToCart}
          items={items}
          deleteFromCart={deleteFromCart}
          setItems={setItems} 
          sum={sum} 
          setSum={setSum}
          quantity={quantity}
          setQuantity={setQuantity}
        />
        <Routes>
          <Route
            path="/Products"
            element={<Products addToCart={addToCart} />}
          ></Route>
          <Route path="/Home" element={<HomePage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
