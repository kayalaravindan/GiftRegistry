import React from 'react';

function RegistryItem({ item, removeItem, checkOffItem }) {
  return (
    <li>
      <span style={{ textDecoration: item.checked ? 'line-through' : 'none' }}>
        {item.name} - ${item.price}
      </span>
      <button onClick={() => removeItem(item.id)}>Remove</button>
      <button onClick={() => checkOffItem(item.id)}>Check Off</button>
    </li>
  );
}

export default RegistryItem;