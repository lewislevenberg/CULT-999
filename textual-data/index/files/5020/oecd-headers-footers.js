jQuery(document).ready(function ($) {

  $('.oecd-header__primary-toggle').click(function (event) {
    event.preventDefault();
    var toggleButton = $(event.currentTarget);
    var hiddenClass = 'oecd-header--primary-hidden';
    var header = toggleButton.closest('.oecd-header');
    header.toggleClass(hiddenClass);
    if (!header.hasClass(hiddenClass)) {
      // Focus the navigation
      toggleButton
        .closest('.oecd-header')
        .find('.oecd-header__primary')
        .attr('tabindex', '0').focus();
    }
  });

  $('.oecd-header__secondary-toggle').click(function (event) {
    event.preventDefault();
    var toggleButton = $(event.currentTarget);

    var secondaryContainer = toggleButton.closest('.oecd-header__secondary-container');
    secondaryContainer.toggleClass('oecd-header__secondary-container--active');

    var hiddenClass = 'sr-only';
    var secondary = secondaryContainer.find('.oecd-header__secondary');
    secondary.toggleClass(hiddenClass);
    // Focus the navigation
    if (!secondary.hasClass(hiddenClass)) {
      secondary.attr('tabindex', '0').focus();
    }
  });

});