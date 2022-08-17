import React from 'react';
import { Link } from 'react-router-dom';
const EmptyCart = (props) => {
  return (
    <>
      <div className='banner-box'>
        <img src='assets/svg/empty-cart.svg' className='img-fluid' alt='404' />
      </div>
      <section className='error mb-large'>
        <h2 className='font-lg'>Whoops !! Cart is Empty</h2>
        <p className='content-color font-md'>Looks like you haven’t added anything to your cart yet. You will find a lot of interesting products on our “Shop” page</p>
        <Link to={`${process.env.PUBLIC_URL}/shop`} className='btn-solid'>
          Start Shopping
        </Link>
      </section>
    </>
  );
};
export default EmptyCart;
