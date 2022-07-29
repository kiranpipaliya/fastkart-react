import React from 'react';
import Slider from 'react-slick';
import { HomeSliderSettings } from '../../../helper/sliderSettings';
import Img from '../../ratio/Img';
import { Link } from 'react-router-dom';
const HomeSlider = () => {
  //   const parent = bgImg.current.parent;

  return (
    <>
      {/* <!-- Banner Section Start --> */}
      <section className='banner-section ratio2_1'>
        <Slider className='h-banner-slider' {...HomeSliderSettings}>
          <div>
            <div className='banner-box'>
              <Img src='assets/images/banner/home1.jpg' alt='banner' className='bg-img' />
              <div className='content-box'>
                <h1 className='title-color font-md heading'>Farm Fresh Veggies</h1>
                <p className='content-color font-sm'>Get instant delivery</p>
                <Link to='shop.html' className='btn-solid font-sm'>
                  Shop Now
                </Link>
              </div>
            </div>
          </div>

          <div>
            <div className='banner-box'>
              <Img src='assets/images/banner/home2.jpg' alt='banner' className='bg-img' />
              <div className='content-box'>
                <h2 className='font-white font-md heading'>Farm Fresh Veggies</h2>
                <p className='font-white font-sm'>Get instant delivery</p>
                <Link to='shop.html' className='btn-outline font-sm'>
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </Slider>
      </section>
      {/* <!-- Banner Section End --> */}
    </>
  );
};
export default HomeSlider;
