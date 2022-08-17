import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import OfferOffcanvas from '../../ui/offcanvas/OfferOffcanvas';
const CouponSection = () => {
  const [offerOffcanvasShow, setOfferOffcanvasShow] = useState(false);
  const modalShowHandler = () => {
    setOfferOffcanvasShow(!offerOffcanvasShow);
  };
  const hideHandler = (hide) => {
    setOfferOffcanvasShow(!hide);
  };
  return (
    <>
      <section className='pt-0 coupon-ticket-wrap'>
        <div onClick={modalShowHandler} className='coupon-ticket'>
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
              <Link onClick={(event) => event.preventDefault()} to=''>
                SCD450
              </Link>
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
      <OfferOffcanvas onShow={offerOffcanvasShow} onHide={hideHandler} />
    </>
  );
};
export default CouponSection;
