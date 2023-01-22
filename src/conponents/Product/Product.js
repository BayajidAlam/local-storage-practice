import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css';

const Product = ({product,handleAddToCart}) => {
  
  const {name,img,price,ratings,seller} = product;
  
  return (
    <div className='product'>
          <img src={img} alt="ok" />
         <div className='product-details'>
              <p className='product-name'>{name}</p>
              <p className='price'>Price: {price}</p>
              <p><small>Seller: {seller}</small></p>
              <p><small>Ratings: {ratings}</small></p>
         </div>
         <button onClick={()=>handleAddToCart(product)} className='btn-card'>Add to cart <FontAwesomeIcon icon={faShoppingCart} /></button>
    </div>
  );
};

export default Product;


// 48.6