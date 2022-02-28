import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Products from "./components/Pages/Products";
import HomePage from "./components/Pages/HomePage";
import Header from "./components/Header";



function App() {
  return (
    <div className="App"> 
    
    <BrowserRouter>
    <Header />
    <Routes>
    <Route path="/Products" element={<Products />}></Route> 
    <Route path="/Home" element={<HomePage />}></Route> 
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
