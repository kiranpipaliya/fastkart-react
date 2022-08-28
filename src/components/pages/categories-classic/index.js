import React from 'react';
import SearchBox from '../../general/SearchBox';
import CategoriesBox from './CategoriesBox';
import { PRODUCT_LIST } from './productList';
const CategoriesClassic = () => {
  return (
    <>
      <main class='main-wrap catagories-classic mb-xxl'>
        <SearchBox />

        {/* <!-- Catagories Section Start --> */}
        <div class='section-p-t'>
          <div class='catagories-wrap'>
            {PRODUCT_LIST.map((item, i) => (
              <CategoriesBox data={item} key={i} />
            ))}
          </div>
        </div>
        {/* <!-- Catagories Section End --> */}
      </main>
    </>
  );
};
export default CategoriesClassic;
