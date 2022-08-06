import React from 'react';
import Slider from 'react-slick';
const ProductSlider = (props) => {
  const settings = {
    dots: false,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: '50px',
    arrows: false,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          centerPadding: '120px',
        },
      },
    ],
  };
  const classes = `product-slider ${props.className ?? ''}`;
  return (
    <>
      <Slider {...settings} className={classes}>
        {props.children}
      </Slider>
    </>
  );
};
export default ProductSlider;
