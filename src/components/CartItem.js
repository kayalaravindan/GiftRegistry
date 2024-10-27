import React from 'react';

function CartItem({ item, removeItem }) {
  return (
    <li>
      {item.name} - ${item.price}
      <button onClick={() => removeItem(item.id)}>Remove</button>
    </li>
  );
}

export default CartItem;