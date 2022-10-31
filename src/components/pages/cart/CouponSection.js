import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import OfferOffcanvas from '../../ui/offcanvas/OfferOffcanvas';

import OfferContext from '../../../context/offerContext/offerContext';
const CouponSection = () => {
  const [offerOffcanvasShow, setOfferOffcanvasShow] = useState(false);
  const offerCtx = useContext(OfferContext);
  const offerItem = offerCtx.items[0];

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
              <span>{offerItem.disc}</span>
              <span>
                <span>%</span>
                <span>OFF</span>
              </span>
            </div>
            <div className='media-body'>
              <h2 className='title-color'>{offerItem.title}</h2>
              <span className='content-color'>{offerItem.subTitle}</span>
            </div>
            <div className='big-circle'>
              <span></span>
            </div>
            <div className='code'>
              <span className='content-color'>Use Code: </span>
              <Link onClick={(event) => event.preventDefault()} to=''>
                {offerItem.code}
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
      <OfferOffcanvas data={offerItem} onShow={offerOffcanvasShow} onHide={hideHandler} />
    </>
  );
};
export default CouponSection;
