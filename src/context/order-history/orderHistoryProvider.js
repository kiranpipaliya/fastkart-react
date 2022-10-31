import React from 'react';
import { useReducer } from 'react';
import OrderHistoryContext from './orderHistoryContext';

const initialState = {
  item: [
    {
      title: 'Assorted Capsicum Combo',
      qty: 500,
      price: 25.0,
      amount: 2,
    },
    {
      title: 'Assorted Capsicum Combo',
      qty: 500,
      price: 25.0,
      amount: 2,
    },
    {
      title: 'Assorted Capsicum Combo',
      qty: 500,
      price: 25.0,
      amount: 2,
    },
  ],
  bagTotal: 0,
  bagSaving: 20,
  deliverCharges: 50,
  grandTotal: 0,
};

const orderHistoryReducer = (state, action) => {
  return state;
};

const OrderHistoryProvider = (props) => {
  const [state, dispatch] = useReducer(orderHistoryReducer, initialState);

  /* Using the map function to multiply the price and amount of each item in the array. */
  const updatedBagTotal = state.item.map((item) => item.price * item.amount).reduce((acc, num) => acc + num, 0);

  const orderHistoryContext = {
    item: state.item,
    bagTotal: updatedBagTotal,
    bagSaving: state.bagSaving,
    deliverCharges: state.deliverCharges,
    grandTotal: updatedBagTotal - state.bagSaving + state.deliverCharges,
  };

  return <OrderHistoryContext.Provider value={orderHistoryContext}>{props.children}</OrderHistoryContext.Provider>;
};
export default OrderHistoryProvider;
