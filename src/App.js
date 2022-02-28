import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from './components/Header';
import Homepage from './pages/Homepage';
import Products from './pages/Products';
import Product from './pages/Product';
import Checkout from './pages/Checkout';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
         <Route path='/home' element={<Homepage />}></Route>
         <Route path='/products' element={<Products />}></Route>
         <Route path='/products/:id' element={<Product />}></Route>
         <Route path='/cart' element={<Checkout />}></Route>
          <Route path='/checkout' element={<Checkout />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
