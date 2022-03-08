import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { TextField } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCart from "./ShoppingCart";

function Header({ addToCart, items, deleteFromCart, setItems, sum, setSum, quantity, setQuantity}) {
  return (
    <div className="header">
      <ul className="navbar">
        <h1>ShoeTropoliZ</h1>
        <div>
          <TextField
            id="outlined-basic"
            label="Search for Products"
            variant="outlined"
            size="small"
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <button className="header-search-btn">
                    {" "}
                    <SearchIcon />
                  </button>
                </InputAdornment>
              ),
            }}
          />
        </div>
        <Link to="../Home">
          {" "}
          <h2 className="hover">Home</h2>{" "}
        </Link>
        <Link to="../products">
          {" "}
          <h2 className="hover">Products</h2>{" "}
        </Link>

        <h2 className="hover">Cart</h2>
      </ul>
      <ShoppingCart
        addToCart={addToCart}
        items={items}
        deleteFromCart={deleteFromCart}
        setItems={setItems} 
        sum={sum} 
        setSum={setSum}
        quantity={quantity}
      />
    </div>
  );
}

export default Header;
