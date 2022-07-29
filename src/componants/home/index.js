import React from 'react';
import HomeSlider from '../general/homeSlider/HomeSlider';
import SearchBox from '../general/SearchBox';
import Main from '../shell/Main';
const Home = () => {
  return (
    <Main className='index-page'>
      <SearchBox />
      <HomeSlider />
    </Main>
  );
};
export default Home;
