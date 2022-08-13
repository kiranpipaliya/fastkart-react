import React from 'react';
import { Link } from 'react-router-dom';
const CouponSection = () => {
  return (
    <>
      <section className='pt-0 coupon-ticket-wrap'>
        <div className='coupon-ticket' data-bs-toggle='offcanvas' data-bs-target='#offer-1' aria-controls='offer-1'>
          <div className='media'>
            <div className='off'>
              <span>50</span>
              <span>
                <span>%</span>
                <span>OFF</span>
              </span>
            </div>
            <div className='media-body'>
              <h2 className='title-color'>on your first order</h2>
              <span className='content-color'>on order above $250.00</span>
            </div>
            <div className='big-circle'>
              <span></span>
            </div>
            <div className='code'>
              <span className='content-color'>Use Code: </span>
              <Link to=''>SCD450</Link>
            </div>
          </div>
          <div className='circle-5 left'>
            <span className='circle-shape'></span>
            <span className='circle-shape'></span>
          </div>
          <div className='circle-5 right'>
            <span className='circle-shape'></span>
            <span className='circle-shape'></span>
          </div>
        </div>
      </section>
    </>
  );
};
export default CouponSection;
