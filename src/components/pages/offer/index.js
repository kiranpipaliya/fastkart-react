import React, { useState, useContext } from 'react';
import SearchBox from '../../general/SearchBox';
import OfferFilterOffcanvas from '../../ui/offcanvas/OfferFilterOffcanvas';
import OfferBox from './OfferBox';
import OfferContext from '../../../context/offerContext/offerContext';

const Offer = () => {
  const offerCtx = useContext(OfferContext);

  const [filterShow, setFilterShow] = useState(false);
  const filterShowHandler = () => {
    setFilterShow(!filterShow);
  };
  return (
    <>
      <main className='main-wrap offer-page mb-xxl'>
        {/* <!-- Search Box Start --> */}
        <div className='search-box'>
          <SearchBox />
          <button onClick={filterShowHandler} className='filter font-md'>
            Filter
          </button>
        </div>

        {/* <!-- Search Box End --> */}
        {/* <!-- Offer Section Start --> */}
        <section className='offer-section'>
          {offerCtx.items.map((item, i) => (
            <OfferBox data={item} key={i} />
          ))}
        </section>
        {/* <!-- Offer Section End --> */}
      </main>
      <OfferFilterOffcanvas onShow={filterShow} onHide={filterShowHandler} />
    </>
  );
};

export default Offer;
