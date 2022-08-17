import React from 'react';
import HomeSlider from '../../general/homeSlider/HomeSlider';
import SearchBox from '../../general/SearchBox';
import { EVERYDAY_ESSENTIALS, EVERYDAY_ESSENTIALS_TITLE, LOWEST_PRICE, LOWEST_PRICE_2, LOWEST_PRICE_TITLE } from './lowestPriceSctionList';
import ProductSliderSection from './LowestPriceSection';
import OfferCouponSection from './OfferCoupnSection';
import QuestionSection from './QuestionSection';
import RecentlyBought from './RecentlyBought';
import SayHelloToOffers from './SayHelloToOffers';
import ShopByCategories from './ShopByCategories';
const Home = () => {
  return (
    <main className='main-wrap mb-xxl index-page'>
      <SearchBox />
      <HomeSlider />
      <RecentlyBought />
      <ShopByCategories />
      <SayHelloToOffers />
      <ProductSliderSection data={LOWEST_PRICE} titleData={LOWEST_PRICE_TITLE} />
      <ProductSliderSection data={EVERYDAY_ESSENTIALS} titleData={EVERYDAY_ESSENTIALS_TITLE} />
      <OfferCouponSection />
      <ProductSliderSection data={LOWEST_PRICE_2} titleData={LOWEST_PRICE_TITLE} />
      <QuestionSection />
    </main>
  );
};
export default Home;
