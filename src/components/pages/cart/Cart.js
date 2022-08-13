import React, { useContext } from 'react';
import SwipeBox from '../../general/SwipeBox';
import CartContext from '../../../context/cartContext/cartContext';
import CouponSection from './CouponSection';
import Summery from './Summery';
const Cart = () => {
  const cartCtx = useContext(CartContext);
  return (
    <main className='main-wrap cart-page mb-xxl'>
      <div className='cart-item-wrap pt-0'>
        {cartCtx.items.map((data, i) => (
          <SwipeBox cart={true} data={data} key={i} />
        ))}
      </div>
      <CouponSection />
      <Summery />
    </main>
  );
};
export default Cart;
