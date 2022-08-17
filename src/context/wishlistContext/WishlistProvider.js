import React, { useReducer } from 'react';
import WishlistContext from './wishlistContext';

const initialState = {
  items: [
    { id: 'w1', amount: 5, path: `${process.env.PUBLIC_URL}/offer`, image: 'assets/images/product/8.png', title: 'Assorted Capsicum Combo', qty: 500, price: 25.25, disc: 50 },
    {
      id: 'w2',
      amount: 5,
      path: `${process.env.PUBLIC_URL}/offer`,
      image: 'assets/images/product/6.png',
      title: 'Assorted Capsicum Combo',
      qty: 500,
      price: 22.25,
      disc: 50,
    },
    {
      id: 'w2',
      amount: 5,
      path: `${process.env.PUBLIC_URL}/offer`,
      image: 'assets/images/product/7.png',
      title: 'Assorted Capsicum Combo',
      qty: 550,
      price: 35.21,
    },
    { id: 'w4', amount: 2, path: `${process.env.PUBLIC_URL}/offer`, image: 'assets/images/product/8.png', title: 'Assorted Capsicum Combo', qty: 500, price: 35.15, disc: 50 },
    { id: 'w5', amount: 3, path: `${process.env.PUBLIC_URL}/offer`, image: 'assets/images/product/6.png', title: 'Assorted Capsicum Combo', qty: 600, price: 45.15 },
    { id: 'w6', amount: 4, path: `${process.env.PUBLIC_URL}/offer`, image: 'assets/images/product/7.png', title: 'Assorted Capsicum Combo', qty: 550, price: 35.25, disc: 50 },
  ],
  totalAmount: 0,
};

const wishlistReducer = (state, action) => {
  let updatedList;
  if (action.type === 'REMOVE_WHOLE') {
    updatedList = state.items.filter((item) => item.id !== action.id);
  }
  return {
    items: updatedList,
    totalAmount: 0,
  };
};
const WishlistProvider = (props) => {
  const [state, dispatchAction] = useReducer(wishlistReducer, initialState);
  const removeWholeItem = (id) => {
    dispatchAction({ type: 'REMOVE_WHOLE', id: id });
  };
  const wishlistContext = {
    items: state.items,
    removeWholeItem: removeWholeItem,
  };
  return <WishlistContext.Provider value={wishlistContext}>{props.children}</WishlistContext.Provider>;
};
export default WishlistProvider;
