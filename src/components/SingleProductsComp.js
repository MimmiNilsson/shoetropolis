import React from 'react'

function SingleProductsComp({prod}) {
  return (
    <div className='singleProducts'>
    <h2>{prod.title}</h2>
    <img className='img' alt='Cake' src={prod.url} width='150px'/>
    <p><b>{prod.price} Kr</b></p>
    <p><b>In stock {prod.storage}</b></p>
    <p><b>Description</b></p> 
    <button className='btn'> Add to cart </button>
    </div>
  )
}

export default SingleProductsComp