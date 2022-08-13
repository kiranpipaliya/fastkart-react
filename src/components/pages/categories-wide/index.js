import React from 'react';

import SearchBox from '../../general/SearchBox';
import CategoriesSection from './CategoriesSection';

const CatagoriesWide = () => {
  return (
    <main className='main-wrap mb-xxl catagories-wide'>
      <SearchBox />
      <CategoriesSection />
    </main>
  );
};
export default CatagoriesWide;
