import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./components/Pages/Products";
import HomePage from "./components/Pages/HomePage";
import Header from "./components/Header";
import React, { useEffect, useState, createContext } from "react";
import Footer from "./components/Footer";
import Product from "./components/Pages/Product";
import Checkout from "./components/Pages/Checkout";
import CheckoutMsg from "./components/Pages/CheckoutMsg";
export const AppContext = createContext();

function App() {
  const [items, setItems] = useState([]);

  const [sum, setSum] = useState(0);

  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    total();
  }, [items]);
  useEffect(() => {
    qty();
  }, [items]);

  const qty = () => {
    let totalItems = 0;
    for (let i = 0; i < items.length; i++) {
      totalItems = items.length;
    }
    setQuantity(totalItems);
  };

  const total = () => {
    let totalVal = 0;
    for (let i = 0; i < items.length; i++) {
      totalVal += items[i].price;
    }
    setSum(totalVal);
  };

  const addToCart = (newItem) => {
    console.log(newItem);
    setItems([...items, newItem]);
  };

  const deleteFromCart = (id) => {
    let remove = items.filter((item) => item.id !== id);
    setItems(remove);
  };

  return (
    <AppContext.Provider value = {{

      setItems,
      
      items
      
      }}>
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
          <Route path="/Products" element={<Products addToCart={addToCart} />} ></Route>
          <Route path="/Product:id" element={<Product addToCart={addToCart} items={items} />} ></Route>
          <Route path="/Home" element={<HomePage />}></Route>
          <Route path='/checkout' element={<Checkout items={items} addToCart={addToCart} sum={sum} />}></Route>
          <Route path='/checkoutmsg' element={<CheckoutMsg />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
    </AppContext.Provider>
  );
}

export default App;
