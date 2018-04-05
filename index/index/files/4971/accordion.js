// JavaScript Document!
;(function($) {
$(function() {
    $(".accordion").accordion({
       
      heightStyle: "content",
	  collapsible: true
    });
  });

// Hover states on the static widgets
$( "#dialog-link, #icons li" ).hover(
	function() {
		$( this ).addClass( "ui-state-hover" );
	},
	function() {
		$( this ).removeClass( "ui-state-hover" );
	}
);


})(jQuery);