import React, { useState, useEffect } from "react";
import ProductsComp from "../ProductsComp";
import "./productsPage.css";

function Products({addToCart}) {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("https://codexplained.se/shoes.php");
      const data = await response.json();
      setProducts(data);
    } catch (error) {}
  };
  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <div className="test">
      <ProductsComp products={products} addToCart={addToCart}/>
    </div>
  );
}

export default Products;
