import './App.css';
import React, {useEffect, useState, createContext} from 'react';
import {BrowserRouter, Routes, Route,} from "react-router-dom";
import Header from './components/Header';
import HomePage from "./components/Pages/HomePage";
import Products from "./components/Pages/Products";
import Product from './pages/Product';
import Checkout from './pages/Checkout';
import Footer from './components/Footer';
import CheckoutMsg from './pages/CheckoutMsg';

export const AppContext = createContext();

function App() {

  //==========ERIK==========
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

  const deleteFromCart = (id) => {
    let remove = items.filter((item) => item.id !== id);
    setItems(remove);
  };

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
  
  const totalCheckout = () => {
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
            <Route path="/Home" element={<HomePage />}></Route>
            <Route
            path="/Products"
            element={<Products 
            addToCart={addToCart} />} >
            </Route>            
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
