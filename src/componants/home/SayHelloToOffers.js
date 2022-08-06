import React from 'react';
import TopTitle from '../general/TopTitle';
import ProductCardListType from '../productCard/ProductCardListType';
import { SAY_HELLO_TO_OFFERS } from './sayHelloToOffersList';

const SayHelloToOffers = () => {
  return (
    <>
      {/* <!-- Say hello to Offers! Start --> */}
      <section className='offer-section pt-0'>
        <div className='offer'>
          <TopTitle title='Say hello to Offers!' subTitle='Best price ever of all the time' link='See all' path={`${process.env.PUBLIC_URL}/offer`} />
          <div className='offer-wrap'>
            {SAY_HELLO_TO_OFFERS.map((item, i) => (
              <ProductCardListType data={item} key={i} />
            ))}
          </div>
        </div>
      </section>
      {/* <!-- Say hello to Offers! End --> */}
    </>
  );
};
export default SayHelloToOffers;
