import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../context/cartContext/cartContext';

const FooterButton = () => {
  const cartCtx = useContext(CartContext);
  const btnDisabled = cartCtx.items.length === 0;
  const disabledFun = (event) => {
    if (btnDisabled) event.preventDefault();
  };
  return (
    <>
      <footer className='footer-wrap footer-button'>
        <Link onClick={disabledFun} to={`${process.env.PUBLIC_URL}/address1`} className={`${btnDisabled && 'disabledCursor'} font-md'`}>
          Proceed to Checkout
        </Link>
      </footer>
    </>
  );
};
export default FooterButton;
