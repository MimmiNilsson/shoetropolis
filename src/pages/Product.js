//=============================================================================
/*===== MIMMI: PRODUCT / SINGLE PRODUCT PAGE =====*/
//=============================================================================

import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import {RiArrowGoBackLine} from 'react-icons/ri';
import {motion} from 'framer-motion';
import './Product.css';

function Product(props) {
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
        <Link to='/products'><button className='sing-prod-btn return-btn'>Back to Products <RiArrowGoBackLine /></button></Link>
        <div className='sing-prod-container'>
            <motion.div 
                initial={{
                    x:'-100vw'
                }}
                animate={{
                    x: '0'
                }}
                transition={{
                    type: 'spring', 
                    duration: 1, 
                    speed: 0.25,
                    bounce: 0.25
                }}
            className='sing-prod-img box box-1'>
                <img className='prod-img' alt={product.title} src={product.url}/>
            </motion.div>
            <motion.div 
                initial={{
                    x:'100vw'
                }}
                animate={{
                    x: '0'
                }}
                transition={{
                    type: 'spring', 
                    duration: 1, 
                    speed: 0.25,
                    bounce: 0.25
                }}
                className='sing-prod-info box box-2'>
                    <h1 className='sing-prod-h1'>{product.title}</h1>
                    <p className='sing-prod-p'>{product.price} SEK</p>
                    <button className='sing-prod-btn add-btn' onClick={props.handleOnClick}>Add to Cart</button>
                    <p className='sing-prod-p'>In Stock: {product.storage}</p>
                    <p className='sing-prod-p'>{product.description}</p>
            </motion.div>
        </div>
    </div>
  )
}

export default Product;