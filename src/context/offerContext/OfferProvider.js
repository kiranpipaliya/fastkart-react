import React, { useReducer } from 'react';
import OfferContext from './offerContext';

const initialState = {
  items: [
    {
      disc: 50,
      title: 'on your first order',
      subTitle: 'on order above $250.00',
      code: 'SCD450',
    },
    {
      disc: 25,
      title: 'on your Second order',
      subTitle: 'on order above $1050.00',
      code: 'DCA420',
    },
    {
      disc: 30,
      title: 'on your food items order',
      subTitle: 'on order above $200.00',
      code: 'ACE420',
    },
    {
      disc: 23,
      title: 'on your first order',
      subTitle: 'on order above $350.00',
      code: 'HCH220',
    },
    {
      disc: 34,
      title: 'on your grocery items order',
      subTitle: 'on order above $220.00',
      code: 'DCD231',
    },
    {
      disc: 25,
      title: 'on your first order',
      subTitle: 'on order above $350.00',
      code: 'DDD450',
    },
  ],
};

const offerReducer = (state, action) => {
  if (action.type === 'FILTER') {
    let filtered;
    console.log('Global', action.value);
    if (action.value === 'All') {
      filtered = [...state.items];
    } else {
      filtered = state.items.filter((Item) => Item.disc >= action.value);
      console.log('filtered', filtered);
    }
    console.log(filtered);
    return {
      ...state,
      itemsFiltered: filtered,
    };
  }
  return state;
};
const OfferProvider = (props) => {
  const [state, dispatchAction] = useReducer(offerReducer, initialState);

  const filterOffer = (value) => {
    dispatchAction({ type: 'FILTER', value: value });
  };
  const offerContext = {
    items: state.itemsFiltered ? state.itemsFiltered : state.items,
    filterOffer: filterOffer,
  };
  return <OfferContext.Provider value={offerContext}>{props.children}</OfferContext.Provider>;
};
export default OfferProvider;
