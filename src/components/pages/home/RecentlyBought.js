import React from 'react';
import { Link } from 'react-router-dom';
import { RECENTLY_BOUGHT } from './recentlyBoutghtList';
import Img from '../../../utils/Img';
const RecentlyBought = () => {
  return (
    <>
      {/* <!-- Buy from Recently Bought Start --> */}
      <section className='recently pt-0'>
        <div className='recently-wrap'>
          <h3 className='font-md'>Buy from Recently Bought</h3>
          <img className='corner' src='assets/svg/corner.svg' alt='corner' />
          <ul className='recently-list'>
            {RECENTLY_BOUGHT.map((item, i) => (
              <li className='item' key={i}>
                <Link to={item.path}>
                  <Img src={item.image} alt={item.alt} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      {/* <!-- Buy from Recently Bought End --> */}
    </>
  );
};

export default RecentlyBought;
