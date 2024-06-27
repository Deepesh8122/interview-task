(function ($) {
    $(function () {
        $('.owl-carousel').slick({
            dots: false,
            arrows: false,
            loop: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2500,
            speed: 3000,
            centerMode: true,
            centerPadding: "200px",
            responsive: [
                {
                    breakpoint: 1399,
                    settings: {
                        centerPadding: "130px"
                    }
                },
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerPadding: "80px"
                    }
                }
            ]
        });
    });
})(jQuery);
