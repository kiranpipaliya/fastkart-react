import React from 'react';
import { Star } from 'react-feather';
const Rating = (props) => {
  return (
    <>
      <div className='rating'>
        {[...Array(5)].map((_, i) => (
          <>{i + 1 <= props.rating ? <Star className='fill' key={i} /> : <Star className='empty' key={i} />}</>
        ))}
      </div>
    </>
  );
};
export default React.memo(Rating);
