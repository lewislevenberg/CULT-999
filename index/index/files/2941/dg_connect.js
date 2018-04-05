(function($) {

  Drupal.behaviors.dg_connect = {
    attach: function (context) {
      // Reusable flexslider settings
      
      var innerSlideshow = $('.small-carousel .slide-wrapper');
      var homeSlideshow = $('#block-views-home-block-1 .slide-wrapper');
      var homeSlideshowNav = $('#block-views-home-block-1 .custom-controls li');
      
      innerSlideshow.flexslider({
        controlsContainer: ".small-carousel",
        slideDirection: "horizontal",
        slideshow: true, // auto display
        animation: "fade",
        pauseOnHover: true,
        slideshowSpeed: 6000,
        animationSpeed: 1000,
        animationLoop: true,
        directionNav: false,
        controlNav: true,
        start: function() {
          innerSlideshow.find('.slides > li:first-child').css('display','list-item');
          innerSlideshow.find('.slides > li:not(:first-child)').hide();
        }
      });

      homeSlideshow.flexslider({
        controlsContainer: "#block-views-home-block-1",
        manualControls: "#block-views-home-block-1 .custom-controls li",
        // slideDirection: "horizontal",
        slideshow: true, // auto display
        animation: "fade",
        slideshowSpeed: 6000,
        animationSpeed: 350,
        animationLoop: true,
        directionNav: false,
        controlNav: true,
        pauseOnHover: true,
        start: function() {
          homeSlideshow.find('.slides > li:first-child').css('display','list-item');
          homeSlideshow.find('.slides > li:not(:first-child)').hide();
        }
      });
      
//      homeSlideshowNav.hover(function() {
//        homeSlideshow.flexslider($(this).index());
//      });
      homeSlideshowNav.mousestop(50, function() {
        homeSlideshow.flexslider($(this).index());
      });
      
      homeSlideshowNav.click(function() {
        window.location.href = $(this).find('a').attr('href');
      });
      
    }
  };
  
  
$(document).ready(function(){ 

  // clear select list button*/
  $('.clear-form-button').click(function(){
	  $('.chzn-choices').children('.search-choice').remove();
	  $('.chzn-drop .result-selected').removeClass('result-selected').addClass('active-result');
	  $('.chzn-done option:selected').removeAttr('selected');	  
  }); 
});

})(jQuery);
