import React from "react";
import SingleProductsComp from "./SingleProductsComp";

function ProductsComp({ products }) {
  return (
    <div className="productsPage">
      {products.map((prod) => (
        <SingleProductsComp key={prod.id} prod={prod} />
      ))}
    </div>
  );
}

export default ProductsComp;
