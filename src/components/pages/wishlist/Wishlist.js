import React, { useContext } from 'react';
import SwipeBox from '../../general/SwipeBox';
import WishlistContext from '../../../context/wishlistContext/wishlistContext';
const Wishlist = () => {
  const wishListCtx = useContext(WishlistContext);
  console.log(wishListCtx);
  return (
    <main className='main-wrap cart-page mb-xxl'>
      <div className='cart-item-wrap pt-0'>
        {wishListCtx.items.map((data, i) => (
          <SwipeBox wishlist={true} data={data} key={i} />
        ))}
      </div>
    </main>
  );
};
export default Wishlist;
