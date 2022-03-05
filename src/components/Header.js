import React from "react";
import {Link} from "react-router-dom"
import './Header.css'


function Header() {
  return (
    <nav className="navbar">
      <h1 className="store-name">Shoetropolis</h1>
      <div className="navbar-links">    
        <ul className="menu-list">
        <Link className="nav-item" to="/home">Home</Link>
        <Link className="nav-item" to="/products">Products</Link>
        <Link className="nav-item" to="/cart">Cart</Link>
        </ul>
     </div>
    </nav>
  );
}

export default Header;
