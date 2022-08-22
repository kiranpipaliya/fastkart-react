import React, { useReducer } from 'react';
import AddressContext from './addressContext';

const addressInitialState = {
  address: [
    {
      id: 'address1',
      name: 'Noah Hamilton',
      address: '8857 Morris Rd. Charlottesville, VA 22901',
      active: true,
      addressDefault: true,
      addressType: 'home',
      image: 'assets/images/map/map.jpg',
      alt: 'map',
    },
    {
      id: 'address2',
      name: 'Noah Hamilton',
      address: '8857 Morris Rd. Charlottesville, VA 22901',
      active: false,
      addressDefault: false,
      addressType: 'work',
      image: 'assets/images/map/map.jpg',
      alt: 'map',
    },
    {
      id: 'address3',
      name: 'Noah Hamilton',
      address: '8857 Morris Rd. Charlottesville, VA 22901',
      active: false,
      addressDefault: false,
      addressType: 'home',
      image: 'assets/images/map/map.jpg',
      alt: 'map',
    },
    {
      id: 'address4',
      name: 'Noah Hamilton',
      address: '8857 Morris Rd. Charlottesville, VA 22901',
      active: false,
      addressDefault: false,
      addressType: 'other',
      image: 'assets/images/map/map.jpg',
      alt: 'map',
    },
  ],
};

const addressReducer = (state, action) => {
  let updatedAddress = [];
  if (action.type === 'SET_ADDRESS') {
    const existingItemIndex = state.address.findIndex((item) => item.id === action.id);
    const removeAllActive = state.address.map((add) => ({
      ...add,
      active: false,
    }));
    updatedAddress = [...removeAllActive];
    const currentActive = { ...updatedAddress[existingItemIndex], active: true };
    updatedAddress[existingItemIndex] = currentActive;

    return {
      ...state,
      address: updatedAddress,
    };
  }
  if (action.type === 'ADD_ADDRESS') {
    const address = {
      id: `address${state.address.length + 1}`,
      name: action.address.name,
      address: `${action.address.address1}, ${action.address.address2}, ${action.address.state}, ${action.address.city}, ${action.address.zip}`,
      active: false,
      addressDefault: false,
      addressType: action.address.type,
      image: 'assets/images/map/map.jpg',
      alt: 'map',
    };
    updatedAddress = [...state.address, address];
    console.log(address.id);
    return {
      ...state,
      address: updatedAddress,
    };
  }
};

const AddressProvider = (props) => {
  const [state, dispatchAction] = useReducer(addressReducer, addressInitialState);
  const setAddress = (id) => {
    dispatchAction({ type: 'SET_ADDRESS', id });
  };

  const addAddressHandler = (address) => {
    dispatchAction({ type: 'ADD_ADDRESS', address });
  };

  const allAddress = state.address.length === 1 ? [{ ...state.address[0], active: true, addressDefault: true }] : state.address;

  const addressContext = {
    address: allAddress,
    addAddress: addAddressHandler,
    setAddress: setAddress,
  };
  return <AddressContext.Provider value={addressContext}>{props.children}</AddressContext.Provider>;
};
export default AddressProvider;
