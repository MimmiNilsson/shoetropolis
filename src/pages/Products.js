import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

function Products(props) {

    const [products, setProducts] = useState([]); 

    const fetchData = async () => {
        try{

            const response = await fetch('https://codexplained.se/shoes.php'); 
            const data = await response.json(); 
            
			setProducts(data) 

        } catch(error) {
			console.log(error);

        }
    } 
    useEffect(()=> {
        fetchData();
    },[]);  
    
  return (
    <div> 
		<h1>Our Products</h1>

		{
			products.map( product => (
				<article key={product.id}>
					<img alt={product.title} src={product.url} width="50%"/>
					<p>{product.title}</p>
					<p>{product.price}</p>
					<button>Add to Cart</button>
					<Link to={`/products/${product.id}`}>Read More...</Link>	
				</article>
			))
      }
    </div>

  )
}

export default Products;