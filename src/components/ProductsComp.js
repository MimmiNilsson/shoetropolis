import React from "react";
import SingleProductsComp from "./SingleProductsComp";


function ProductsComp({ products, addToCart }) {
  
  return (
    
    <div className="productsPage">
      {products.map((prod) => (
        <SingleProductsComp key={prod.id} prod={prod} addToCart={addToCart}/>      
      ))}
    </div>  
  );
}

export default ProductsComp;
