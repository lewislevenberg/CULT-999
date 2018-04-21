//Google Analytics tracking code
var _gaq=[["_setAccount","UA-16888309-1"],["_trackPageview"]];
(function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];g.async=1;
g.src=("https:"==location.protocol?"//ssl":"//www")+".google-analytics.com/ga.js";
s.parentNode.insertBefore(g,s)}(document,"script"));

//attach virtual events
$(document).ready(function() {

	//external link tracking code
	$('#redirLink').click( function() {
		_gaq.push(['_trackEvent', 'External Link', 'Click', $(this).attr('href') ]);
	});
	
	//Mailto tracking code
	$('a[href^="mailto\:"]').click(function() {
 		_gaq.push(['_trackEvent','Email', 'Click', 	$(this).attr('href') ]);
	});
	
	//Download Tracking Code
	$('a[href$="zip"],a[href$="pdf"],a[href$="doc"],a[href$="docx"],a[href$="xls"],a[href$="xlsx"],a[href$="ppt"],a[href$="pptx"],a[href$="txt"],a[href$="csv"]').click(function() {
		var u = $(this).attr('href'); _gaq.push(['_trackEvent','Download', u.match(/[^.]+$/), u ]);
	});
	
});
