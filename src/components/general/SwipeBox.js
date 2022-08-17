import React, { useState, useContext } from 'react';
import ProductCardListType from '../productCard/ProductCardListType';
import { Trash } from 'react-feather';
import { useSwipeable } from 'react-swipeable';
import WishlistContext from '../../context/wishlistContext/wishlistContext';
import CartContext from '../../context/cartContext/cartContext.js';
import useItemInCart from '../../hook/ItemInCart';

const SwipeBox = (props) => {
  const [itemInCart] = useItemInCart(props.data.id);

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
    itemInCart && CartCtx.removeWholeItem(item.id);
  };

  return (
    <div {...swipeHandler} className={`swipe-to-show ${swipe ? 'active' : ''}`}>
      <ProductCardListType plusMins={true} data={props.data} />
      <div className='delete-button'>
        <Trash onClick={removeHandler.bind(null, props.data)} />
      </div>
    </div>
  );
};
export default SwipeBox;
