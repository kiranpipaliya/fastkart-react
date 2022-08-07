import React, { useRef, useState } from 'react';
import { Minus, Plus } from 'react-feather';

const PlusMinus = (props) => {
  const counter = useRef(0);
  let [count, setCount] = useState(counter.current);

  const counterHandler = (event) => {
    event.preventDefault();
    setCount(Number(event.target.value));
  };

  const subHandler = () => {
    if (count > 0) {
      setCount(Number(count - 1));
    }
  };
  const addHandler = () => {
    if (count < 10) {
      setCount(Number(count + 1));
    }
  };

  const classes = `plus-minus ${props.className}`;
  return (
    <>
      <div className={classes}>
        <Minus onClick={subHandler} className='sub' />
        <input ref={counter} value={count} onChange={counterHandler} type='number' min='0' max='10' />
        <Plus onClick={addHandler} className='add' />
      </div>
    </>
  );
};
export default PlusMinus;
