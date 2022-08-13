import React from 'react';
const WishlistContext = React.createContext({
  items: [],
  removeWholeItem: (id) => {},
});
export default WishlistContext;
