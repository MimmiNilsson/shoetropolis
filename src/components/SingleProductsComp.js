import React from 'react'
import {Link} from 'react-router-dom'

function SingleProductsComp({prod, addToCart}) {

const handleClick = (e) => {
  e.preventDefault(); 
  const newItem = {title: prod.title, price: prod.price, img:prod.url, id: prod.id, desc: prod.description}             
  addToCart(newItem)
} 

  return (
    <div className='singleProducts'>
    <h2>{prod.title}</h2>
    <img className='img' alt='Shoe' src={prod.url} width='150px'/>
    <p><b>{prod.price} Kr</b></p>
    <p><b>In stock {prod.storage}</b></p>
    <Link to={`/Product${prod.id}`}><p>Description</p> </Link> 
    <button className='btn' onClick={handleClick} > Add to cart </button>
    </div>
  )
}


export default SingleProductsComp 

