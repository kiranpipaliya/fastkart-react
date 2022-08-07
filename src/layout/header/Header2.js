import React from 'react';
import { ArrowLeftCircle, Home } from 'react-feather';
import { Link } from 'react-router-dom';
const Header2 = (props) => {
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
          {!CategoriesWidePageCondition && <h1 className='title-color font-md'>{props.pageName}</h1>}
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
