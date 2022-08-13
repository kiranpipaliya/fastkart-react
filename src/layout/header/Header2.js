import React, { useContext } from 'react';
import { ArrowLeftCircle, Home } from 'react-feather';
import { Link } from 'react-router-dom';
import CartContext from '../../context/cartContext/cartContext';
import WishlistContext from '../../context/wishlistContext/wishlistContext';

const Header2 = (props) => {
  const wishListCtx = useContext(WishlistContext);
  const cartCtx = useContext(CartContext);
  const pageName = props.pageName;
  const CategoriesWidePageCondition = pageName === 'category wide';
  return (
    <>
      {/* <!-- Header Start --> */}
      <header className='header'>
        <div className='logo-wrap'>
          <Link to=''>
            <ArrowLeftCircle />
          </Link>
          {CategoriesWidePageCondition && (
            <Link to=''>
              <img className='logo' src='assets/images/logo/Fastkart.png' alt='logo' />
            </Link>
          )}
          {!CategoriesWidePageCondition && (
            <h1 className='title-color font-md'>
              {pageName}
              {pageName === 'my wishlist' && <span className='font-sm content-color'>{`  ( ${wishListCtx.items.length} Items )`}</span>}
              {pageName === 'my cart' && <span className='font-sm content-color'>{`  ( ${cartCtx.items.length} Items )`}</span>}
            </h1>
          )}
        </div>
        <div className='avatar-wrap'>
          {CategoriesWidePageCondition && (
            <Link to='offer'>
              <lord-icon className='icons' src='assets/icons/gift.json' trigger='loop' stroke='70' colors='primary:#0baf9a,secondary:#0baf9a'></lord-icon>{' '}
            </Link>
          )}
          {!CategoriesWidePageCondition && (
            <Link to=''>
              <Home />
            </Link>
          )}
        </div>
      </header>
      {/* <!-- Header End --> */}
    </>
  );
};
export default Header2;
