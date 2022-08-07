import React from 'react';
import HomeSlider from '../../general/homeSlider/HomeSlider';
import SearchBox from '../../general/SearchBox';
import Main from '../../shell/Main';
import { EVERYDAY_ESSENTIALS_SECTION_LIST, EVERYDAY_ESSENTIALS_SECTION_TITLE, LOWEST_PRICE_SECTION_LIST, LOWEST_PRICE_SECTION_TITLE } from './lowestPriceSctionList';
import ProductSliderSection from './LowestPriceSection';
import OfferCouponSection from './OfferCoupnSection';
import QuestionSection from './QuestionSection';
import RecentlyBought from './RecentlyBought';
import SayHelloToOffers from './SayHelloToOffers';
import ShopByCategories from './ShopByCategories';
const Home = () => {
  return (
    <Main className='index-page'>
      <SearchBox />
      <HomeSlider />
      <RecentlyBought />
      <ShopByCategories />
      <SayHelloToOffers />
      <ProductSliderSection data={LOWEST_PRICE_SECTION_LIST} titleData={LOWEST_PRICE_SECTION_TITLE} />
      <ProductSliderSection data={EVERYDAY_ESSENTIALS_SECTION_LIST} titleData={EVERYDAY_ESSENTIALS_SECTION_TITLE} />
      <OfferCouponSection />
      <ProductSliderSection data={LOWEST_PRICE_SECTION_LIST} titleData={LOWEST_PRICE_SECTION_TITLE} />
      <QuestionSection />
    </Main>
  );
};
export default Home;
