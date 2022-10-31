import React from 'react';

import { useContext } from 'react';
import OrderHistoryContext from '../../../context/order-history/orderHistoryContext';
import OrderBox from './OrderBox';

const OrderDetail = () => {
  const orderHistoryCtx = useContext(OrderHistoryContext);
  console.log(orderHistoryCtx);
  return (
    // <!-- Main Start -->
    <main className='main-wrap order-detail mb-xxl'>
      {/* <!-- Banner Start --> */}
      <section className='pt-0'>
        <div className='banner-box'>
          <div className='media'>
            <img src='assets/icons/svg/box.svg' alt='box' />
            <div className='media-body'>
              <span className='font-sm'>Order ID: #5151515</span>
              <h2>Order Delivered</h2>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Banner End --> */}

      {/* <!-- Item Section Start --> */}
      <section className='item-section p-0'>
        <h3 className='font-theme font-md'>Items:</h3>

        <div className='item-wrap'>
          {orderHistoryCtx.item.map((item, i) => (
            <OrderBox data={item} key={i} />
          ))}
        </div>
      </section>
      {/* <!-- Item Section End --> */}

      {/* <!-- Order Summary Section Start --> */}
      <section className='order-summary p-0'>
        <h3 className='font-theme font-md'>Payment Details</h3>
        {/* <!-- Product Summary Start --> */}
        <ul>
          <li>
            <span>Bag total</span>
            <span>${orderHistoryCtx.bagTotal}</span>
          </li>

          <li>
            <span>Bag savings</span>
            <span className='font-theme'>-${orderHistoryCtx.bagSaving}</span>
          </li>

          <li>
            <span>Coupon Discount</span>
            <a href='offer.html' className='font-danger'>
              Apply Coupon
            </a>
          </li>

          <li>
            <span>Delivery</span>
            <span>${orderHistoryCtx.deliverCharges}</span>
          </li>

          <li>
            <span>Total Amount</span>
            <span>${orderHistoryCtx.grandTotal}</span>
          </li>
        </ul>
        {/* <!-- Product Summary End --> */}
      </section>
      {/* <!-- Order Summary Section End --> */}

      {/* <!-- Address Section Start --> */}
      <section className='address-section p-0'>
        <h3 className='font-theme font-md'>Address</h3>

        <div className='address'>
          <h4 className='font-sm title-color'>Noah Hamilton</h4>
          <p className='font-sm content-color'>8857 Morris Rd. ,Charlottesville, VA 22901</p>
        </div>
      </section>
      {/* <!-- Address Section End --> */}

      {/* <!-- Payment Method Section Start --> */}
      <section className='payment-method p-0'>
        <h3 className='font-theme font-md'>Payment Method</h3>

        <div className='payment-box'>
          <img src='assets/icons/png/mastercard1.png' alt='card' />
          <span className='font-sm title-color'> **** **** **** 6502</span>
        </div>
      </section>
      {/* <!-- Payment Method Section End --> */}
    </main>
    //  <!-- Main End -->
  );
};

export default OrderDetail;
