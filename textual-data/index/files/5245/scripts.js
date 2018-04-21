jQuery(document).ready( function($) {
	
  // temporary directive for https://www.internetsociety.org/node/31818/
	// hide submit button if third option is clicked
$("#edit-submitted-nomination-type-3").click(hideSubmitPIR);
$("#edit-submitted-nomination-type-2").click(showSubmitPIR);
$("#edit-submitted-nomination-type-1").click(showSubmitPIR);
function hideSubmitPIR(){
    $("#webform-client-form-31818. #edit-submit").hide();
};
function showSubmitPIR(){
    $("#webform-client-form-31818. #edit-submit").show();
};

	
	$('#nav li.expanded a').each(function(){
		$(this).after('<span class="arrow"></span>');
	});
	$('#nav li ul li .arrow').each(function(){ $(this).remove(); });
	
	$('#nav li .arrow').click(function(){
		if($('#nav').hasClass('Small')){
			if($(this).parent().hasClass('expanded')){
				$(this).parent().find('ul.menu').slideToggle();
				$(this).toggleClass('open');
				return false;
			}
		}
	});
	
	$('#nav .smallmenu a').click(function(){
		$('#nav ul:first-child').slideToggle();
		$(this).toggleClass('expanded');
		if($(this).html() == 'MENU +'){ $(this).html('MENU -'); }
		else{ $(this).html('MENU +'); }
		return false;
	});
	
	$('#slideshow .photo img').each(function(){
		$(this).removeAttr('width').removeAttr('height');
	});
	
	$('#block-menu-menu-header-menu ul.menu').attr('id','topnav');
	selectnav('topnav', { label: "Quick Links" });
	$('#aside-left ul.menu').attr('id','leftnav');
	selectnav('leftnav', { label: $('#copy h1').text() });
	$('#block-menu-menu-header-menu select').after('<img class="smallsearch" src="/sites/all/themes/isoc/images/small-search.png" alt="Search" />');
	
	$('#headerutility .smallsearch').click(function(){
		$(this).hide();
		$('#block-search-form').slideToggle().find('input.form-text').trigger('focus');
		return false;
	});
	
	$('#views-exposed-form-events-calendar-page-1 #edit-field-eventdate-value-wrapper label').attr('for','edit-field-eventdate-value-value-year');
	
	
	$('#slideshow a.read-more').on('click touchend', function(e) {
		var el = $(this);
		var link = el.attr('href');
		window.location = link;
	});
	
	$(window).resize(function() {
		slideshowResizer();
		responsive();
	});

	// Show/hide site map in footer
	$('.site-map ul').hide();

	$('.site-map h2').click(function() {
		$('.site-map ul').slideToggle('fast', function() {
			// Animation complete.
		});
	});

});
jQuery(window).load(function() {
	slideshowResizer();
	responsive();
});

function setEqualHeight(columns){  
	 var tallestcolumn = 0;
	 columns.each(function(){
		 currentHeight = jQuery(this).height();
		 if(currentHeight > tallestcolumn){
			tallestcolumn  = currentHeight;
		 }
	 });
	 columns.height(tallestcolumn);
}
function slideshowResizer(){
	var trueheight = 0;
	var slideheight = 0;
	jQuery('#slideshow .views_slideshow_slide').each(function(){
		slideheight = jQuery(this).find('.photo img').innerHeight();
		//alert(slideheight);
		if(slideheight != 0){
			trueheight = slideheight;
			jQuery('#slideshow').css('height',slideheight+21+'px');
			return false;
		}
	});
	if(jQuery('#nav').hasClass('Small')){
		jQuery('.slideshow-info').css('top',trueheight+'px');
		//jQuery('#slideshow').css('margin-bottom',jQuery('.slideshow-info').height()+20+'px');
	}
	else{ jQuery('.slideshow-info').attr('style',''); }
}
function responsive(){
	var winWidth = jQuery(document).width();
	var size = "Large";
	if( (winWidth < 960) && ( winWidth >= 760 ) ){
		
		//$('#nav ul').show();
		jQuery('#secondrow .column').each(function(){
			jQuery(this).addClass('moved').appendTo('#firstrow');
		});
		setEqualHeight(jQuery("#firstrow > .column"));
		size = "Medium";
	}
	if(winWidth <760){
		size = "Small";
		/*if( $('#nav .small-menu-button a').hasClass('expanded') ){
			$('#nav ul').show();
			$('#nav .small-menu-button a').html('MENU -');
		}
		else{
			$('#nav ul').hide();
			$('#nav .small-menu-button a').html('MENU +');
		}*/
	}
	if(winWidth >= 960){
		//$('#nav ul').show();
		jQuery('#firstrow .moved').each(function(){
			jQuery(this).removeClass('moved').appendTo('#secondrow');
		});
		setEqualHeight(jQuery("#firstrow > .column"));
		setEqualHeight(jQuery("#secondrow > .column"));
		size = "Large";
	}
	jQuery('#nav').attr('class',size);
	jQuery('.debug').html('Width: '+winWidth+' Size: '+size);
}



(function ($) {
  Drupal.behaviors.olebs =  {
    attach: function(context, settings) {

      var data = $(context).data('openlayers');
      if (jQuery.isEmptyObject(data)) {
        return;
      }

      $(".form-item-baselayers select").change(function(e) {
        var map = $(this).closest('form').find("input[name='map']").val();
        if (data.map.map_name == map) {
          var layer = $(this).val();
          var layers = data.openlayers.layers.slice();
          for(var i=0, len=layers.length; i<len; i++) {
            if (layers[i].drupalID == layer) {
              data.openlayers.setBaseLayer(layers[i]);
            }
          }
        }
      });

      $(".form-item-baselayers input[type='radio']").change(function(e) {
        var map = $(this).closest('form').find("input[name='map']").val();
        if (data.map.map_name == map) {
          var layer = $(this).val();
          var layers = data.openlayers.layers.slice();
          for(var i=0, len=layers.length; i<len; i++) {
            if (layers[i].drupalID == layer) {
              data.openlayers.setBaseLayer(layers[i]);
            }
          }
        }
      });

      $(".field-name-map-switcher input[type='checkbox']").change(function(e) {

        var checked = this.checked;
        var map = $(this).closest('form').find("input[name='map']").val();

        if (data.map.map_name == map) {
          var layer = $(this).val();
          var layers = data.openlayers.layers.slice();
          for(var i=0, len=layers.length; i<len; i++) {
            if (layers[i].drupalID == layer) {
              layers[i].setVisibility(true);
              $(".field-name-map-switcher input[type='checkbox']").attr('checked', false).removeClass('active');
			  $('.all-button').removeClass('active');
              $(this).attr('checked', true).addClass('active');
            }
            else {
              if (!layers[i].isBaseLayer) {
                layers[i].setVisibility(false);
              }
            }
          }
        }
      });

      $all_button = '<button class="all-button option active">All</button>';
      $('.field-name-map-switcher .form-checkboxes').prepend($all_button);
      $('.all-button').click(function(e) {
	    $(this).addClass('active');
        var layers = data.openlayers.layers.slice();

        for(var i=0, len=layers.length; i<len; i++) {
          layers[i].setVisibility(true);
        }
        $(".field-name-map-switcher input[type='checkbox']").attr('checked', true).removeClass('active');
        e.preventDefault();
      });

    }
  };

  Drupal.behaviors.storyFluidvids = {
    attach: function (context, settings) {
			if ($('body').hasClass('node-type-story')) {
				fluidvids.init({
					selector: ['iframe'], // runs querySelectorAll()
					players: ['www.youtube.com', 'player.vimeo.com'] // players to support
				});
			}
		}
  };
})(jQuery);
