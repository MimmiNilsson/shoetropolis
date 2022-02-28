import React, {useState, useEffect} from 'react'
import ProductsComp from '../ProductsComp';
import Header from '../Header'
import './productsPage.css' 

function Products() {

    const [products, setProducts] = useState([]); 

    const fetchData = async () => {
        try{

            const response = await fetch('https://codexplained.se/shoes.php'); 
            const data = await response.json(); 
            setProducts(data) 

        } catch(error) {

        }
    } 
    useEffect(()=> {
        fetchData()
    },[]);  
    
  return (
    <div className='test'> 
     <Header />
        
      <ProductsComp products={products} />
        </div>

  )
}

export default Products