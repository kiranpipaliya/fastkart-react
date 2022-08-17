import React, { useState } from 'react';
import { Plus } from 'react-feather';
import { Link } from 'react-router-dom';
import useItemInCart from '../../hook/ItemInCart';
import PlusMinus from '../general/PlusMinus';

export const PlusMinusAddCart = (props) => {
  const [ifItemIsInCart] = useItemInCart(props.data.id);
  const [showPlusMinus, setShowPlusMinus] = useState(ifItemIsInCart);
  const addToCartHandler = () => {
    setShowPlusMinus(!showPlusMinus);
  };

  return (
    <span className={`title-color font-sm plus-item ${showPlusMinus || ifItemIsInCart ? 'active' : ''}`}>
      {`$${props.data.price}`}
      <PlusMinus inCart={ifItemIsInCart} item={props.data} onHide={addToCartHandler} />
      <span className='plus-theme'>
        <Plus onClick={addToCartHandler} />
      </span>
    </span>
  );
};

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
          <PlusMinusAddCart data={props.data} />
        </div>
      </div>
    </>
  );
};

export default ProductCard;
