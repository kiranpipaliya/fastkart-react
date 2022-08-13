import React from 'react';
import { Search, Mic } from 'react-feather';
const SearchBox = () => {
  return (
    <>
      {/* <!-- Search Box Start --> */}
      <div className='search-box'>
        <Search className='search' />
        <input className='form-control' type='search' placeholder='Search here...' />
        <Mic className='mic' />
      </div>
      {/* <!-- Search Box End --> */}
    </>
  );
};
export default React.memo(SearchBox);
