import React, { useRef, useState, useContext, useEffect } from 'react';
import { Minus, Plus } from 'react-feather';
import useItemInCart from '../../hook/ItemInCart';
import CartContext from '../../context/cartContext/cartContext';

const PlusMinus = (props) => {
  const [ifCartItemInCart, cartItem] = useItemInCart(props.item.id);
  const counter = useRef(0);
  const [count, setCount] = useState(0);
  const cartCtx = useContext(CartContext);
  const counterHandler = (event) => {
    event.preventDefault();
    setCount(event.current.value);
  };

  const subHandler = () => {
    if (count >= 1) {
      cartCtx.removeItem(props.item.id);
      setCount(count - 1);
    }
    if (count === 0) props.onHide();
  };
  const addHandler = () => {
    setCount(count + 1);
    cartCtx.addItem(props.item, count + 1);
  };
  useEffect(() => {
    if (ifCartItemInCart && cartItem) {
      setCount(cartItem.amount);
    }
  }, [cartItem, ifCartItemInCart]);

  const classes = `plus-minus ${props.className ? props.className : ''}`;
  return (
    <>
      <span className={classes}>
        <Minus onClick={subHandler} className='sub' />
        <input ref={counter} disabled value={count} onChange={counterHandler} type='number' min='0' max='10' />
        <Plus onClick={addHandler} className='add' />
      </span>
    </>
  );
};
export default PlusMinus;
