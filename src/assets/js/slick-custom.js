

(function ($) {
    /// Home Banner Slider slider ///
    $(".h-banner-slider").slick({
        dots: false,
        slidesToShow: 1,
        infinite: true,
        centerMode: true,
        centerPadding: "50px",
        arrows: false,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 475,
                settings: {
                    centerPadding: "20px",
                },
            },

            {
                breakpoint: 375,
                settings: {
                    centerPadding: "15px",
                },
            },
        ],
    });

    /// Product Slider ///
    $(".product-slider").slick({
        dots: false,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: "50px",
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
                    centerPadding: "120px"
                },
            }
        ],
    });

    /// Product Page Banner Slider ///
    $('.product-banner').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });

    /// Product Slider ///
    $(".product-recent-slider").slick({
        dots: false,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: "50px",
        arrows: false,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    });

    /// Onboarding Slider ///
    $('.onboarding-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });
})(jQuery);