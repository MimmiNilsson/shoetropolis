//=============================================================================
/*===== MIMMI: PRODUCT / SINGLE PRODUCT PAGE =====*/
//=============================================================================

import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

function Product() {
    const params = useParams();
    const [product, setProduct] = useState({}); 
    
    const fetchData = async () => {
        
      try{
            const response = await fetch('https://codexplained.se/shoes.php?id=' + params.id); 
            const data = await response.json(); 
            
            setProduct(data);

        } catch(error) {
            console.log(error);
        }

       
    } 

    useEffect(()=> {
        fetchData();
    },);

  return (
    <div className='prod-sing-container'> 
        <button className='returnBtn'>Back to Products</button>
        <div className='prod-sing-img'>
            <img alt={product.title} src={product.url} width="40%" />
        </div>
        <div className='prod-sing-info'>
            <h1>{product.title}</h1>
            <p>{product.price} SEK</p>
            <button>Add to Cart</button>
            <p>In Stock: {product.storage}</p>
            <p>{product.description}</p>
        </div>
    </div>
  )
}

export default Product;