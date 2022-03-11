//=============================================================================
/*===== MIMMI: PRODUCT / SINGLE PRODUCT PAGE =====*/
//=============================================================================

import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import {RiArrowGoBackLine} from 'react-icons/ri';
import {BsArrowRightCircle} from 'react-icons/bs';
import {motion} from 'framer-motion';
import styled from 'styled-components';
import './Product.css';

function Product(props) {
    //==========SINGLE PROD PAGE / API==========
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
    };

    useEffect(()=> {
        fetchData();
    },);

    //==========HANDLE ADD TO CART BTN==========
    const handleAddBtn = () => {
        const newItem = 
        {
            // id: Math.random() * 1000000,
            id: product.id,
            image: product.url, 
            title: product.title, 
            price: product.price, 
            qty: 'qty'
        }
            
        props.addToCart(newItem);
    }

     //==========Qty==========
    //  const [quantity, setQuantity] = useState(undefined)
    //  const updateProduct = (product) => {
    //      product = Object.assign(
    //          {},
    //          {...product}, 
    //          {quantity: quantity + 1})
    //  }

  return (
    <div> 
        <div className='sing-prod-header'>
            <Link className='prod-upper-btn-link' to='/products'><button className='prod-upper-btn btn-1'>Products <RiArrowGoBackLine /></button></Link>
            <Link className='prod-upper-btn-link' to='/checkout'><button className='prod-upper-btn btn-2'>Checkout <BsArrowRightCircle /></button></Link>
        </div>
        <div className='sing-prod-container' key={product.id}>
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
                    <p className='sing-prod-p'>Qty: <input className='sing-prod-input' type='number'></input></p>
                    <motion.div
                    whileHover= {{
                        scale: 1
                       }} 
                       whileTap= {{
                         scale: 0.95
                       }}>
                        <AddBtn className='sing-prod-add-btn' onClick={handleAddBtn}>Add to Cart</AddBtn>
                    </motion.div>
                    <p className='sing-prod-p'>In Stock: {product.storage}</p>
                    <p className='sing-prod-p'>{product.description}</p>
            </motion.div>
        </div>
    </div>
  )
}

const AddBtn = styled.button `
    width: 80%;
    font-size: 1rem;
    letter-spacing: 2px;
    text-decoration: none;
    text-transform: uppercase;
    color: #000;
    cursor: pointer;
    border: 3px solid;
    padding: 0.25em 0.5em;
    box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px;
    position: relative;
    user-select: none;
    touch-action: manipulation;
    }
  `;


export default Product;