import React, { useReducer } from 'react';
import CartContext from './cartContext';
const cartInitialState = {
  items: [
    { id: 'w1', amount: 5, path: `${process.env.PUBLIC_URL}/offer`, image: 'assets/images/product/8.png', title: 'Assorted Capsicum Combo', qty: 500, priceMin: 25.25, price: 25.25, disc: 50 },
    {
      id: 'w2',
      amount: 5,
      path: `${process.env.PUBLIC_URL}/offer`,
      image: 'assets/images/product/6.png',
      title: 'Assorted Capsicum Combo',
      qty: 500,
      priceMin: 22.25,
      price: 22.25,
      disc: 50,
    },
    {
      id: 'w3',
      amount: 5,
      path: `${process.env.PUBLIC_URL}/offer`,
      image: 'assets/images/product/7.png',
      title: 'Assorted Capsicum Combo',
      qty: 550,
      priceMin: 35.21,
      price: 35.21,
    },
    { id: 'w4', amount: 2, path: `${process.env.PUBLIC_URL}/offer`, image: 'assets/images/product/8.png', title: 'Assorted Capsicum Combo', qty: 500, priceMin: 35.15, price: 35.15, disc: 50 },
  ],
  totalAmount: 0,
  totalSave: 0,
  delivery: 50,
  grandTotal: 0,
};
const cartReducer = (state, actions) => {
  let updatedState;
  if (actions.type === 'REMOVE') {
    const existingItemIndex = state.items.findIndex((item) => item.id === actions.id);
    const existingItem = state.items[existingItemIndex];
    if (existingItem.amount === 1) {
      updatedState = state.items.filter((item) => item.id !== actions.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedState = [...state.items];
      updatedState[existingItemIndex] = updatedItem;
    }
    return {
      ...state,
      items: updatedState,
    };
  }
  if (actions.type === 'REMOVE_WHOLE') {
    updatedState = state.items.filter((item) => item.id !== actions.id);
    return {
      ...state,
      items: updatedState,
    };
  }
};

const CartProvider = (props) => {
  const [state, dispatchAction] = useReducer(cartReducer, cartInitialState);
  let updatedTotalAmount = [];
  let totalSave = [];
  state.items.map((item) => {
    item.price = item.priceMin * item.amount;
    if (item.disc) {
      item.save = item.priceMin * ((100 - item.disc) / 100) * item.amount;
    }
    updatedTotalAmount.push(item.price);
    totalSave.push(item.save ? item.save : 0);
  });
  updatedTotalAmount = updatedTotalAmount.reduce((acc, price) => acc + price, 0);
  totalSave = totalSave.reduce((acc, save) => acc + save, 0);
  const addItemHandler = (item) => {};

  const removeItemHandler = (id) => {
    dispatchAction({ type: 'REMOVE', id: id });
  };
  const removeWholeItemHandler = (id) => {
    dispatchAction({ type: 'REMOVE_WHOLE', id: id });
  };

  const cartContext = {
    items: state.items,
    totalAmount: Math.round(updatedTotalAmount),
    totalSave: Math.round(totalSave),
    delivery: state.delivery,
    grandTotal: Math.round(updatedTotalAmount - totalSave + state.delivery),
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    removeWholeItem: removeWholeItemHandler,
  };

  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};
export default CartProvider;
