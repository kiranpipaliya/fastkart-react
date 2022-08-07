import React from 'react';
import { Link } from 'react-router-dom';
import PlusMinus from '../general/PlusMinus';
const ProductCardListType = (props) => {
  return (
    <>
      <div className='product-list media'>
        <Link to={props.data.path}>
          <img src={props.data.image} className='img-fluid' alt='offer' />
        </Link>
        <div className='media-body'>
          <Link to={props.data.path} className='font-sm'>
            {props.data.title}
          </Link>
          <span className='content-color font-xs'>{props.data.qty}</span>
          <span className='title-color font-sm'>
            {props.data.price}
            <span className='badges-round bg-theme-theme font-xs'>{props.data.disc}</span>
          </span>
          <PlusMinus className='d-xs-none  d-inline-block' />
        </div>
      </div>
    </>
  );
};
export default ProductCardListType;
