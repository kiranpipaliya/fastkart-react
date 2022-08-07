import React from 'react';
const SimpleProduct = (props) => {
  return (
    <>
      <div className='staples-box'>
        <div>
          <img className='img-fluid' src={props.image} alt={props.alt} />
        </div>
        <h4>{props.title}</h4>
      </div>
    </>
  );
};
export default SimpleProduct;
