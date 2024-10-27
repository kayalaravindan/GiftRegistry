import React from 'react';

function Checkout({ cart, onCheckout }) {
  const totalCost = cart.reduce((sum, item) => sum + Number(item.price), 0);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Checkout</h2>
      <p style={styles.total}>Total: ${totalCost.toFixed(2)}</p>
      <button style={styles.button} onClick={onCheckout}>
        Complete Purchase
      </button>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#FFF0F5', // Light pink background
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    color: '#8E44AD', // Purple color for heading
    fontSize: '24px',
    marginBottom: '15px',
  },
  total: {
    color: '#C71585', // Medium violet red for total
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  button: {
    backgroundColor: '#9B59B6', // Purple button
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

export default Checkout;
