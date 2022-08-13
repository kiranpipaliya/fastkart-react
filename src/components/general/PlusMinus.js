import React, { useRef, useState, useContext } from 'react';
import { Minus, Plus } from 'react-feather';
import CartContext from '../../context/cartContext/cartContext';

const PlusMinus = (props) => {
  const counter = useRef(0);
  let [count, setCount] = useState(props.item.amount);
  const cartCtx = useContext(CartContext);
  const counterHandler = (event) => {
    event.preventDefault();
    setCount(Number(event.target.value));
  };

  const subHandler = () => {
    props.cart && cartCtx.removeItem(props.item.id);

    setCount(Number(count - 1));
    if (count > 0) {
      setCount(Number(count - 1));
    }
  };
  const addHandler = () => {
    props.cart && cartCtx.addItem(props.item);
    if (count < 10) {
      setCount(Number(count + 1));
    }
  };

  const classes = `plus-minus ${props.className}`;
  return (
    <>
      <div className={classes}>
        <Minus onClick={subHandler} className='sub' />
        <input ref={counter} value={props.item.amount} onChange={counterHandler} type='number' min='0' max='10' />
        <Plus onClick={addHandler} className='add' />
      </div>
    </>
  );
};
export default PlusMinus;
