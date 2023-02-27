import React from 'react';
import { Link } from 'react-router-dom';
import CheckoutForm from './Checkout';

function CheckoutButton() {
  return (
    <Link to="/checkout">
      <button>Checkout</button>
    </Link>
  );
}

export default CheckoutButton;
