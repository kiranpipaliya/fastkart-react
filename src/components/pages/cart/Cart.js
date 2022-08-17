import React, { useContext } from 'react';
import SwipeBox from '../../general/SwipeBox';
import CartContext from '../../../context/cartContext/cartContext';
import CouponSection from './CouponSection';
import Summery from './Summery';
import EmptyCart from './EmptyCart';
const Cart = () => {
  const cartCtx = useContext(CartContext);
  const classes = cartCtx.items.length === 0 ? 'empty-cart' : 'cart-page';
  return (
    <main className={`main-wrap mb-xxl ${classes}`}>
      {cartCtx.items.length !== 0 && (
        <>
          <div className='cart-item-wrap pt-0'>
            {cartCtx.items.map((data, i) => (
              <SwipeBox data={data} key={i} />
            ))}
          </div>
          <CouponSection />
          <Summery />
        </>
      )}
      {cartCtx.items.length === 0 && <EmptyCart />}
    </main>
  );
};
export default Cart;
