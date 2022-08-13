import React from 'react';
const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  totalSave: 0,
  grandTotal: 0,
  delivery: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  removeWholeItem: (id) => {},
});
export default CartContext;
