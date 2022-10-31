import React from 'react';
const OrderHistoryContext = React.createContext({
  item: [],
  bagTotal: 0,
  bagSaving: 0,
  deliverCharges: 0,
  grandTotal: 0,
});
export default OrderHistoryContext;
