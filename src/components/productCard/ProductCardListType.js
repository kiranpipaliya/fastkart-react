import React from 'react';
import { Link } from 'react-router-dom';
import PlusMinus from '../general/PlusMinus';
const ProductCardListType = (props) => {
  return (
    <>
      <div className='product-list media'>
        <Link to={props.data.path}>
          <img src={props.data.image} className='img-fluid' alt={props.data.alt} />
        </Link>
        <div className='media-body'>
          <Link to={props.data.path} className='font-sm'>
            {props.data.title}
          </Link>
          <span className='content-color font-xs'>{`${props.data.qty}g`}</span>
          <span className='title-color list-title font-sm'>
            {`$${props.data.price}`}
            {props.data.disc && <span className='badges-round bg-theme-theme font-xs'>{`${props.data.disc}% off`}</span>}
          </span>
          {props.plusMins && <PlusMinus item={props.data} className='d-xs-none  d-inline-block' />}
        </div>
      </div>
    </>
  );
};
export default ProductCardListType;
