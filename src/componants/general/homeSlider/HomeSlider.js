import React from 'react';
import Slider from 'react-slick';
import { HomeSliderSettings } from '../../../utils/sliderSettings';
import Img from '../../../utils/Img';
import { Link } from 'react-router-dom';
import { HOME_SLIDER_LIST } from './homeSliderList';
const HomeSlider = () => {
  return (
    <>
      {/* <!-- Banner Section Start --> */}
      <section className='banner-section ratio2_1'>
        <Slider className='h-banner-slider' {...HomeSliderSettings}>
          {HOME_SLIDER_LIST.map((item, i) => (
            <div key={i}>
              <div className='banner-box'>
                <Img src={item.image} alt={item.alt} className='bg-img' />
                <div className='content-box'>
                  <h1 className={`title-color font-md heading ${item.textWhite ? 'font-white' : ''} `}>{item.title}</h1>
                  <p className={` font-sm ${item.textWhite ? 'font-white' : 'content-color'} `}>{item.pera}</p>
                  <Link to={item.path} className='btn-solid font-sm'>
                    {item.btnText}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>
      {/* <!-- Banner Section End --> */}
    </>
  );
};
export default HomeSlider;
