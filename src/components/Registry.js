import React, { useState } from 'react';
import RegistryItem from './RegistryItem';

function Registry({ registry, addItem, removeItem, checkOffItem }) {
  const [newItem, setNewItem] = useState({ name: '', price: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(newItem);
    setNewItem({ name: '', price: '' });
  };

  const totalCost = registry.reduce((sum, item) => sum + Number(item.price), 0);
  const discountedCost = totalCost * 0.9; // 10% discount

  return (
    <div>
      <h2>Registry</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Item name"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Price"
          value={newItem.price}
          onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
        />
        <button type="submit">Add Item</button>
      </form>
      <ul>
        {registry.map(item => (
          <RegistryItem
            key={item.id}
            item={item}
            removeItem={removeItem}
            checkOffItem={checkOffItem}
          />
        ))}
      </ul>
      <p>Total Cost: ${totalCost.toFixed(2)}</p>
      <p>Discounted Cost: ${discountedCost.toFixed(2)}</p>
    </div>
  );
}

export default Registry;