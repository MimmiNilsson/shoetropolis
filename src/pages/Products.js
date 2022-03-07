import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

function Products(props) {

    const [products, setProducts] = useState([]); 

    // const handleOnClick = (product) => {
    //   addToCart(product);

    //   const newItem = {
    //     id: '',
    //     title: ''
    //   }
  
    //   setCartItems([
    //         ...cartItems, 
    //         newItem
    //       ])
  
    //       console.log('ADD TO CART-knappen');
    // }
  

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

// onClick={() => {handleOnClick(product)}}

  )
}

export default Products;