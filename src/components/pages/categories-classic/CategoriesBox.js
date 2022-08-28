import React from 'react';
import { ChevronRight } from 'react-feather';
import { Link } from 'react-router-dom';
const CategoriesBox = (props) => {
  return (
    <div className='product-list media'>
      <Link to={`${process.env.PUBLIC_URL}/shop`}>
        <img src={props.data.image} className='img-fluid' alt={props.data.alt} />
      </Link>
      <div className='media-body'>
        <Link to={`${process.env.PUBLIC_URL}/shop`}> {props.data.title} </Link>
        <p className='content-color'>{props.data.subTitle}</p>
      </div>
      <span>
        <Link to={`${process.env.PUBLIC_URL}/shop`} className='arrow-nav'>
          <ChevronRight />
        </Link>
      </span>
    </div>
  );
};
export default CategoriesBox;
