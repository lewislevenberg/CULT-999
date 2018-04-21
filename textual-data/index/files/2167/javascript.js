// $Id: javascript.js,v 1.1.4.2 2009/08/12 23:29:56 add1sun Exp $

var maxHeight = 400;

$(document).ready(function(){
	
	//$('.round_1').corner("1px");
	//$('.round_6').corner("6px");
	//$('.round').corner();
	//$('.round_top').corner("top");

	$('p.event img.event_image').bind("mouseenter", function() {
	   $(this).css({border: "1px solid #FED519"});
	});
	$('p.event img.event_image').bind("mouseleave", function() {
	   $(this).css({border: "1px solid #000"});
	});
	
	$("#solr_sort_select").change(function() {
		window.location.href = $("#solr_sort_select").val();
	});

	$('h3 a[href*="events"]:last').parent().addClass('left_menu_last_region');
	
	/*
	accordion_menu.accordion('activate',3)
	$('h3 a[href*="events"]:last').parent().addClass('left_menu_last_region');
	*/
   
  $('.checkbox-depth-0 .form-item .form-checkbox').change(function(){
    if($(this).attr('checked')) {
      console.log("Herrow");
      $(this).parents('div.checkbox-depth-0').eq(0).nextAll('div').each(function() {
        if( $(this).hasClass('checkbox-depth-0') ) {
          return false;
        } else {
          $(this).find('input').attr('checked',true);
        }
      });
    } else {
      console.log("Herrow");
      $(this).parents('div.checkbox-depth-0').eq(0).nextAll('div').each(function() {
        if( $(this).hasClass('checkbox-depth-0') ) {
          return false;
        } else {
          $(this).find('input').removeAttr('checked');
        }
      });      
    }
  });

  /* RSS Feed link Chrome detection */
  $('.feed-icon a').click(function(){
  
    var is_chrome = window.navigator.userAgent.match(/Chrome/i);
    if(is_chrome) {
      console.log("Herrow!");
      alert ( "You may need to install a third party plugin to view this RSS feed properly.");
    }
    
  });

});
window.onload = function() {
	if(($('#map') != null) && ($('#map').length > 0)) {
		init_map();
  	}
};

