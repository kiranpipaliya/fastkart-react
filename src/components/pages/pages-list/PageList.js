import React from 'react';
import { Link } from 'react-router-dom';
import { PAGES_LIST } from './pagesList';
import { ChevronRight } from 'react-feather';
const PageSList = () => {
  return (
    <main className='main-wrap account-page mb-xxl'>
      <div className='account-wrap section-b-t'>
        <div className='user-panel mb-3'>
          <div className='media'>
            <div className='media-body'>
              <span className='content-color font-sm'>Checkout all pages and their varations over here. following are the list of all the pages. </span>
            </div>
          </div>
        </div>
 
        {/* <!-- Navigation Start --> */}
        <ul className='navigation'>
          {PAGES_LIST.map((item, i) => (
            <li key={i}>
              <Link to={`${process.env.PUBLIC_URL}/${item.path}`} className='nav-link title-color font-sm'>
                <span>{item.name}</span>
              </Link>
              <Link to={`${process.env.PUBLIC_URL}/${item.path}`} className='arrow'>
                <ChevronRight />
              </Link>
            </li>
          ))} 
        </ul>
      </div>
    </main>
  );
};
export default PageSList;
