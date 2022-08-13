import React from 'react';
import { Plus } from 'react-feather';
import { Link } from 'react-router-dom';
import PlusMinus from '../general/PlusMinus';
const ProductCard = (props) => {
  return (
    <>
      <div className='product-card'>
        <div className='img-wrap'>
          <Link to={props.data.path}>
            <img src={props.data.image} className='img-fluid' alt={props.data.alt} />
          </Link>
        </div>
        <div className='content-wrap'>
          <Link to={props.data.path} className='font-sm title-color'>
            {props.data.title}
          </Link>
          <span className='content-color font-xs'>{`${props.data.qty}g`}</span>
          <span className='title-color font-sm plus-item'>
            {`$${props.data.price}`}
            <PlusMinus item={props.data} />
            <span className='plus-theme'>
              <Plus />
            </span>
          </span>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
