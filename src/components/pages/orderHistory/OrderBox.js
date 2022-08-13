import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Rating from '../../general/Ratings';

const BottomContent = (props) => {
  const [showRatingCurrent, setShowRatingCurrent] = useState(0);
  const showRatingHandler = (i) => {
    setShowRatingCurrent(i);
  };
  return (
    <div className={`bottom-content ${showRatingCurrent ? 'active' : ''}`}>
      <Link to={props.item.path2} className='title-color font-sm fw-600'>
        Order Again
      </Link>

      <span onClick={showRatingHandler} className='give-rating content-color font-sm'>
        Rate & Review Product
      </span>
      <Rating rating={props.item.rating} />
    </div>
  );
};

const OrderBox = (props) => {
  const item = props.item;
  return (
    <>
      <div className='order-box'>
        <div className='media'>
          <Link to={item.path} className='content-box'>
            <h2 className='font-sm title-color'>{`${item.id},${item.date}`}</h2>
            <p className='font-xs content-color'>{item.address}</p>
            <span className='content-color font-xs'>
              Paid: <span className='font-theme'>{item.price}</span>, Items: <span className='font-theme'>{item.qty}</span>
            </span>
          </Link>
          <div className='media-body'>
            <img src={item.image} alt={item.alt} />
          </div>
        </div>
        <BottomContent item={item} />
      </div>
    </>
  );
};
export default OrderBox;
