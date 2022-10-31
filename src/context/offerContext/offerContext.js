import React from 'react';
const OfferContext = React.createContext({
  items: [],
  filterOffer: (value) => {},
});
export default OfferContext;
