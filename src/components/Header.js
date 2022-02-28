import React from "react";
import {Link} from "react-router-dom"


function Header() {
  return (
    <div className="header">    
      <ul className="navbar">
       <Link to="/home">Home | </Link>
       <Link to="/products">Products |</Link>
       <Link to="/cart">Cart</Link>
      </ul>
    </div>
  );
}

export default Header;
