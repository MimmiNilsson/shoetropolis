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
    <div>
        <h1>The kind of shoes a Ninja would wear</h1>
            <article className='sing-prod'>
                <img alt={product.title} src={product.url} width="40%" />
                <h3>{product.title}</h3>
                <p>{product.price}</p>
                <p>{product.storage}</p>
                <p>{product.description}</p>
                <button>Knapp</button>
            </article>
    </div>
  )
}

export default Product;