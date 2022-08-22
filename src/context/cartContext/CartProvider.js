import React, { useReducer } from 'react';
import CartContext from './cartContext';
const cartInitialState = {
  items: [],
  totalAmount: 0,
  totalSave: 0,
  delivery: 50,
  grandTotal: 0,
};
const cartReducer = (state, actions) => {
  let updatedState;
  if (actions.type === 'ADD') {
    const existingItemIndex = state.items.findIndex((item) => item.id === actions.item.id);
    const existingItem = state.items[existingItemIndex];
    if (existingItem) {
      const updatedItem = { ...existingItem, amount: existingItem.amount + 1 };
      updatedState = [...state.items];
      updatedState[existingItemIndex] = updatedItem;
    } else {
      updatedState = [...state.items];
      const newItem = { ...actions.item, priceMin: actions.item.price, amount: actions.countAmount };
      updatedState.push(newItem);
    }

    return {
      ...state,
      items: updatedState,
    };
  }

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
    const priceTotal = item.priceMin * item.amount;
    item.price = priceTotal.toFixed(2);
    if (item.disc) {
      item.save = item.priceMin * ((100 - item.disc) / 100) * item.amount;
    }
    updatedTotalAmount.push(parseFloat(item.price));
    totalSave.push(item.save ? item.save : 0);
  });
  const cartTotal = updatedTotalAmount.length !== 0 ? parseFloat(updatedTotalAmount.reduce((acc, price) => acc + price).toFixed(2)) : 0;
  const cartSave = totalSave.length !== 0 ? parseFloat(totalSave.reduce((acc, save) => acc + save).toFixed(2)) : 0;

  const addItemHandler = (item, countAmount) => {
    dispatchAction({ type: 'ADD', item: item, countAmount: countAmount });
  };

  const removeItemHandler = (id) => {
    dispatchAction({ type: 'REMOVE', id: id });
  };
  const removeWholeItemHandler = (id) => {
    dispatchAction({ type: 'REMOVE_WHOLE', id: id });
  };

  const cartContext = {
    items: state.items,
    totalAmount: cartTotal,
    totalSave: cartSave,
    delivery: state.delivery,
    grandTotal: Math.round(cartTotal - cartSave + state.delivery),
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    removeWholeItem: removeWholeItemHandler,
  };

  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};
export default CartProvider;
