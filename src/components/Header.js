import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { useState } from "react";
import { TextField } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";

function Header() {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };
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
            onChange={handleChange}
            InputProps={{
              endAdornment: (
                <InputAdornment>
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
    </div>
  );
}

export default Header;
