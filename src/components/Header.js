import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { TextField } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import styled from 'styled-components';
import ShoppingCart from "./ShoppingCart";

function Header({ addToCart, items, deleteFromCart, setItems, sum, setSum, quantity}) {

  const [open, setOpen] = useState(false)
   
  return (
    <div className="header">
      <ul className="navbar">
        <StoreName>Shoetropolis</StoreName>
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

      
         <h2 className="cart" onClick={() => {setOpen(true)}}>
          Cart 
          </h2>  
         
      </ul>
      <ShoppingCart
        addToCart={addToCart}
        items={items}
        deleteFromCart={deleteFromCart}
        setItems={setItems} 
        sum={sum} 
        setSum={setSum}
        quantity={quantity}
        open={open} 
        setOpen={setOpen}
      />
    </div>
  );
}

const StoreName = styled.h1 `
  color: #fff;
  text-shadow: #eee 1px 0 10px;
  font-size: 2rem;
  margin: .5rem;  
`;


export default Header;
