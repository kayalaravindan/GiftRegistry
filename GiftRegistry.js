import React, { useState, useEffect } from 'react';
import styles from './GiftRegistry.module.css';

const GiftRegistry = () => {
  const [currentUser, setCurrentUser] = useState('User1');
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [otherUsers, setOtherUsers] = useState(['User2', 'User3']);
  const [selectedUser, setSelectedUser] = useState('');

  // ... (keep all the existing functions unchanged)

  const inlineStyles = {
    color: '#8B0000', // Dark red
    fontSize: '18px'
  };

  return (
    <div className={styles.container} style={inlineStyles}>
      <h1 className={styles.header}>Gift Registry App</h1>
      <h2 className={styles.subHeader}>Current User: {currentUser}</h2>

      <h3 className={styles.subHeader}>Available Items</h3>
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.id} className={styles.listItem}>
            {item.name} - ${item.price}
            <button className={styles.button} onClick={() => addToCart(item)}>Add to Cart</button>
            <button className={styles.button} onClick={() => addToWishlist(item)}>Add to Wishlist</button>
          </li>
        ))}
      </ul>

      <h3 className={styles.subHeader}>Your Cart</h3>
      <ul className={styles.list}>
        {cart.map((item) => (
          <li key={item.id} className={styles.listItem}>
            {item.name} - ${item.price}
            <button className={styles.button} onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>

      <h3 className={styles.subHeader}>Your Wishlist</h3>
      <ul className={styles.list}>
        {wishlist.map((item) => (
          <li key={item.id} className={styles.listItem}>
            {item.name} - ${item.price}
            <button className={styles.button} onClick={() => removeFromWishlist(item.id)}>Remove</button>
          </li>
        ))}
      </ul>

      <h3 className={styles.subHeader}>View Other Users' Registries</h3>
      <select className={styles.select} onChange={(e) => viewOtherUserRegistry(e.target.value)}>
        <option value="">Select a user</option>
        {otherUsers.map((user) => (
          <option key={user} value={user}>
            {user}
          </option>
        ))}
      </select>

      {selectedUser && (
        <div className={styles.userRegistry}>
          <h4 className={styles.subHeader}>{selectedUser}'s Registry</h4>
          <h5 className={styles.subHeader}>Cart</h5>
          <ul className={styles.list}>
            {cart.map((item) => (
              <li key={item.id} className={styles.listItem}>
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
          <h5 className={styles.subHeader}>Wishlist</h5>
          <ul className={styles.list}>
            {wishlist.map((item) => (
              <li key={item.id} className={styles.listItem}>
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default GiftRegistry;