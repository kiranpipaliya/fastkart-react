import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import OfferOffcanvas from '../../ui/offcanvas/OfferOffcanvas';

export default function OfferBox(props) {
  const [offerModalShow, setOfferModalShow] = useState(false);
  const offerModalShowHandler = (e) => {
    setOfferModalShow(!offerModalShow);
  };
  const offerModalHide = (show) => {
    setOfferModalShow(!show);
  };
  return (
    <>
      <div className='coupon-ticket' onClick={offerModalShowHandler}>
        <div className='media'>
          <div className='off'>
            <span>{props.data.disc}</span>
            <span>
              <span>%</span>
              <span>OFF</span>
            </span>
          </div>
          <div className='media-body'>
            <h2 className='title-color'>{props.data.title}</h2>
            <span className='content-color'>{props.data.subTitle}</span>
          </div>
          <div className='big-circle'>
            <span></span>
          </div>
          <div className='code'>
            <span className='content-color'>Use Code: </span>
            <Link to='#'>{props.data.code}</Link>
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
      <OfferOffcanvas data={props.data} onShow={offerModalShow} onHide={offerModalHide} />
    </>
  );
}
