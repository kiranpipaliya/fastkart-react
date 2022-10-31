import React from 'react';
import { Link } from 'react-router-dom';
import { X } from 'react-feather';
export default function OrderBox(props) {
  return (
    <Link to={`${process.env.PUBLIC_URL}/product`} className='media'>
      <div className='count'>
        <span className='font-sm'>{props.data.amount}</span>
        <X />
      </div>
      <div className='media-body'>
        <h4 className='title-color font-sm'>{props.data.title}</h4>
        <span className='content-color font-sm'>{props.data.qty}g</span>
      </div>
      <span className='title-color font-md'>${props.data.price}</span>
    </Link>
  );
}
