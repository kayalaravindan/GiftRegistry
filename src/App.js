import React, { useState } from 'react';
import Registry from './components/Registry';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

function App() {
  const [registry, setRegistry] = useState([]);
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState({ name: 'John Doe' }); // Simplified user state

  const addItemToRegistry = (item) => {
    setRegistry([...registry, { ...item, id: Date.now() }]);
  };

  const removeItemFromRegistry = (itemId) => {
    setRegistry(registry.filter(item => item.id !== itemId));
  };

  const checkOffItem = (itemId) => {
    setRegistry(registry.map(item => 
      item.id === itemId ? { ...item, checked: true } : item
    ));
  };

  const addItemToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeItemFromCart = (itemId) => {
    setCart(cart.filter(item => item.id !== itemId));
  };

  const checkout = () => {
    // Implement checkout logic here
    console.log('Checkout completed');
    setCart([]);
  };

  return (
    <div className="App">
      <h1>{user.name}'s Gift Registry</h1>
      <Registry 
        registry={registry} 
        addItem={addItemToRegistry} 
        removeItem={removeItemFromRegistry}
        checkOffItem={checkOffItem}
      />
      <Cart 
        cart={cart} 
        removeItem={removeItemFromCart}
      />
      <Checkout cart={cart} onCheckout={checkout} />
    </div>
  );
}

export default App;