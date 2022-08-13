import React, { useContext } from 'react';
import CartContext from '../../../context/cartContext/cartContext';

const Summery = (props) => {
  const cartCtx = useContext(CartContext);
  return (
    <>
      <section className='order-detail pt-0'>
        <h3 className='title-2'>Order Details</h3>
        <ul>
          <li>
            <span>Bag total</span>
            <span>{`$${cartCtx.totalAmount}`}</span>
          </li>

          <li>
            <span>Bag savings</span>
            <span className='font-theme'>{`-$${cartCtx.totalSave}`}</span>
          </li>

          <li>
            <span>Coupon Discount</span>
            <a href='offer.html' className='font-danger'>
              Apply Coupon
            </a>
          </li>

          <li>
            <span>Delivery</span>
            <span>$50.00</span>
          </li>
          <li>
            <span>Total Amount</span>
            <span>{`$${cartCtx.grandTotal}`}</span>
          </li>
        </ul>
      </section>
    </>
  );
};
export default Summery;
