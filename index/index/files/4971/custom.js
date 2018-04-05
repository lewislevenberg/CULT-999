; (function ($) {

    //Set up Slider
    $(".royalSlider").royalSlider({
        // options go here
        // as an example, enable keyboard arrows nav
        imageScaleMode: 'fill',
        keyboardNavEnabled: true,
        autoScaleSlider: true,
        autoScaleSliderWidth: 1099,
        autoScaleSliderHeight: 312,
        arrowsNav: true,
        usePreloader: true,
        numImagesToPreload: 4,
        delay: 8000,
        pauseOnHover: true,
        transitionSpeed: 600,
        controlsInside: true,
        sliderTouch: true,
        loop: true,
        navigateByClick: false,

        imgWidth: 1099,
        imgHeight: 312,

        sliderDrag: false,
        controlNavigation: 'bullets',
        autoPlay: {
            // autoplay options go gere
            enabled: true,
            pauseOnHover: true
        }
    });
})(jQuery);