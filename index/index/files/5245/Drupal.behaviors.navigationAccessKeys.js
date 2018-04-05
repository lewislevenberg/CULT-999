/**
 * Function to add accesskeys to main navigation. Should be present on every
 * page.
 */
(function ($) {
  "use strict";
  Drupal.behaviors.navigationAccessKeys = {
    attach: function(context) {
      var $skipLink = $('#skip-link'),
          $navLink = $skipLink.find('a[href=#nav]')
            .attr({
              accessKey: 'm',
              title: Drupal.t('Accesskey: m')
            })
            .click(function(e){
              e.preventDefault();
              $('#nav .content > .menu > li:first-child')
                .addClass('hover')
                .children('a:first-child')
                .focus();
            });
    }
  };
})(jQuery);