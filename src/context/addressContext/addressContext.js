import React from 'react';
const AddressContext = React.createContext({
  address: [],
  addAddress: (address) => {},
  setAddress: (id) => {},
});
export default AddressContext;
