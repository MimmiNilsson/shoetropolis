import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { TextField } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCart from "./ShoppingCart";
import { motion } from "framer-motion"

function Header({ addToCart, items, deleteFromCart, setItems, sum, setSum, quantity}) {

  const [open, setOpen] = useState(false)

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 1, x: "-100%" },
  }

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

        <motion.h2
         animate={open ? "open" : "closed"}
         variants={variants}
          onClick={() => {setOpen(true)}}>
          Cart     
         </motion.h2> 
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

export default Header;
