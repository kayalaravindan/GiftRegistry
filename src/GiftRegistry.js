import React, { useState, useEffect } from 'react';

const GiftRegistry = () => {
  const [currentUser, setCurrentUser] = useState('User1');
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [otherUsers, setOtherUsers] = useState(['User2', 'User3']);
  const [selectedUser, setSelectedUser] = useState('');

  useEffect(() => {
    // Simulating fetching items from an API
    setItems([
      { id: 1, name: 'Item 1', price: 10 },
      { id: 2, name: 'Item 2', price: 20 },
      { id: 3, name: 'Item 3', price: 30 },
    ]);
  }, []);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId));
  };

  const addToWishlist = (item) => {
    setWishlist([...wishlist, item]);
  };

  const removeFromWishlist = (itemId) => {
    setWishlist(wishlist.filter((item) => item.id !== itemId));
  };

  const viewOtherUserRegistry = (user) => {
    setSelectedUser(user);
    // In a real app, you would fetch the user's cart and wishlist from the server
    // For this example, we'll just use dummy data
    setCart([{ id: 4, name: 'User Item 1', price: 15 }]);
    setWishlist([{ id: 5, name: 'User Item 2', price: 25 }]);
  };

  return (
    <div>
      <h1>Gift Registry App</h1>
      <h2>Current User: {currentUser}</h2>

      <h3>Available Items</h3>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => addToCart(item)}>Add to Cart</button>
            <button onClick={() => addToWishlist(item)}>Add to Wishlist</button>
          </li>
        ))}
      </ul>

      <h3>Your Cart</h3>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>

      <h3>Your Wishlist</h3>
      <ul>
        {wishlist.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => removeFromWishlist(item.id)}>Remove</button>
          </li>
        ))}
      </ul>

      <h3>View Other Users' Registries</h3>
      <select onChange={(e) => viewOtherUserRegistry(e.target.value)}>
        <option value="">Select a user</option>
        {otherUsers.map((user) => (
          <option key={user} value={user}>
            {user}
          </option>
        ))}
      </select>

      {selectedUser && (
        <div>
          <h4>{selectedUser}'s Registry</h4>
          <h5>Cart</h5>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
          <h5>Wishlist</h5>
          <ul>
            {wishlist.map((item) => (
              <li key={item.id}>
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