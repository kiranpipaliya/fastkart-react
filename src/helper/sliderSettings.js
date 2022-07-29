// Home Slider Settings ///
export const HomeSliderSettings = {
  dots: false,
  slidesToShow: 1,
  infinite: true,
  centerMode: true,
  centerPadding: '50px',
  arrows: false,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 475,
      settings: {
        centerPadding: '20px',
      },
    },

    {
      breakpoint: 375,
      settings: {
        centerPadding: '15px',
      },
    },
  ],
};
