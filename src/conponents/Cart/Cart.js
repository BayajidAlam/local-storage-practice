import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
  let total = 0;
  let shiping = 0;
  let quantity = 0;
  for(const product of cart){
    quantity = quantity + product.quantity
    total = total + product.price * quantity;
    shiping = shiping + product.shipping;
  }

  const tax = parseFloat((total* 0.1).toFixed(2));
  const grandTotal = total + shiping + tax;
  return (
    <div className='cart'>
        <p>Order Summary</p>
        <p className='selected'>Selected items: {quantity}</p>
        <p>Total Price: ${total}</p>
        <p>Total Shipping Charge: ${shiping}</p>
        <p>Tax: ${tax}</p>
        <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
    </div>
  );
};

export default Cart;