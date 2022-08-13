import React, { useState, useContext } from 'react';
import ProductCardListType from '../productCard/ProductCardListType';
import { Trash } from 'react-feather';
import { useSwipeable } from 'react-swipeable';
import WishlistContext from '../../context/wishlistContext/wishlistContext';
import CartContext from '../../context/cartContext/cartContext.js';

const SwipeBox = (props) => {
  const [swipe, setSwipe] = useState(false);
  const wishListCtx = useContext(WishlistContext);
  const CartCtx = useContext(CartContext);
  const swipeHandler = useSwipeable({
    onSwipedLeft: () => setSwipe(true),
    onSwipedRight: () => setSwipe(false),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });
  const removeHandler = (item) => {
    props.wishlist && wishListCtx.removeWholeItem(item.id);
    props.cart && CartCtx.removeWholeItem(item.id);
  };

  return (
    <div {...swipeHandler} className={`swipe-to-show ${swipe ? 'active' : ''}`}>
      <ProductCardListType cart={props.cart} plusMins={true} data={props.data} />
      <div className='delete-button'>
        <Trash onClick={removeHandler.bind(null, props.data)} />
      </div>
    </div>
  );
};
export default SwipeBox;
