import React from 'react';
import CartItem from './CartItem';

function Cart({ cart, removeItem }) {
  const totalCost = cart.reduce((sum, item) => sum + Number(item.price), 0);

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cart.map(item => (
          <CartItem key={item.id} item={item} removeItem={removeItem} />
        ))}
      </ul>
      <p>Total: ${totalCost.toFixed(2)}</p>
    </div>
  );
}

export default Cart;