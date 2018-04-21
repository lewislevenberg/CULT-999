//Make links 'tab-able' in Opera
(function ($){
	// Fixes problem with Opera not tabbing without tabindex
	$(document).ready(function(){
		// Apply focus properly when accessing internal links with keyboard in WebKit browsers.
		$("a[href^='#']").click(function() {
		   $("#"+$(this).attr("href").slice(1)+"").focus();
		});

	});
	
})(jQuery);