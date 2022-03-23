import React from 'react';
import { useSelector } from 'react-redux';

export default function Badge() {
  const cart = useSelector((state) => state.cart);

  return <span className="badge-circle bg-danger">{cart.length}</span>;
}
