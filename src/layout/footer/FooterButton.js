import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../context/cartContext/cartContext';
import AddressContext from '../../context/addressContext/addressContext';

const FooterButton = (props) => {
  const cartCtx = useContext(CartContext);
  const addressCtx = useContext(AddressContext);
  const btnDisabledCart = cartCtx.items.length === 0;
  const btnDisabledAddress = addressCtx.address.length === 0;
  const disabledFun = (event, page) => {
    if (page) event.preventDefault();
  };
  return (
    <>
      <footer className='footer-wrap footer-button'>
        {props.pageName === 'my-cart' && (
          <Link onClick={(e) => disabledFun(e, btnDisabledCart)} to={`${process.env.PUBLIC_URL}/delivery-address`} className={`${btnDisabledCart && 'disabledCursor'} font-md'`}>
            Proceed to Checkout
          </Link>
        )}
        {props.pageName === 'delivery-address' && (
          <Link onClick={(e) => disabledFun(e, btnDisabledAddress)} to={`${process.env.PUBLIC_URL}/payment`} className={`${btnDisabledAddress && 'disabledCursor'} font-md'`}>
            Proceed to Payment
          </Link>
        )}
        {props.pageName === 'order-detail' && (
          <Link to={`${process.env.PUBLIC_URL}/shop`} className={`${btnDisabledAddress && 'disabledCursor'} font-md'`}>
            Reorder
          </Link>
        )}
      </footer>
    </>
  );
};
export default FooterButton;
