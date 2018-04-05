(function ($) {

Drupal.behaviors.commentNotify = {
  attach: function (context) {
    $('#edit-notify', context)
      .bind('change', function() {
        $('#edit-notify-type', context)
          [this.checked ? 'show' : 'hide']()
          .find('input[type=checkbox]:checked').attr('checked', 'checked');
      })
      .trigger('change');
  }
}

})(jQuery);
;

/**
 *  @file
 *  Teaser categorisation
 */

(function ($) {
  function teaserCategorisation() {
    $('#kmapps-list .app-teaser-wrapper div.cate').each(function() {
      var categoryNone =  $(this).html();
      if(!categoryNone) {
        $(this).parent().parent('li').addClass('mergeCategory');
      }
    });
    $('#kmapps-list .app-teaser-wrapper').parent('li').hide();
	
	//var catList;
    /*$('#kmapps-list .form-checkbox').change(function() {
		
      var nocheck = 0;
      $("#kmapps-list input.Courses").each( function() {
        if($(this).is(':checked')) {
          nocheck = 1;
          var catgry = $(this).val();
          catgry = catgry.replace(/\s/g, '');
		  console.log(catgry);
          if($('#kmapps-list .dashboardMain').css('display')=="none"){
            $('#kmapps-list .'+catgry).parent('li').show();
          }
			$('#kmapps-list .dashboard-second .design p.management').click(function() { 
			//alert(nocheck);
				$('#kmapps-list .dashboardMain').hide();
				$('#kmapps-list .'+catgry).parent('li').show();
			});
        }
        else {
          var catgryHide = $(this).val();
          catgryHide = catgryHide.replace(/\s/g, '');
          $('#kmapps-list .'+catgryHide).parent('li').hide();  
        }
      });
      if(nocheck == 0) {
        $('#kmapps-list .app-teaser-wrapper').parent('li').hide();
        $('#kmapps-list .dashboardMain').show();
        catgry="";
      }
    });*/
	
	$(".kmapps-list-full").hide();
	$('#kmapps-list .form-checkbox').change(function() {
		var cssClass="."+$(this).val();
		cssClass = cssClass.replace(/\s/g, '');
		if($(this).is(':checked')) {
			$(cssClass).parent("li").show();
		}else {
			$(cssClass).parent("li").hide();
		}
		
		if($(".kmapps-list-full li:visible").length==0){
			$(".kmapps-list-full").hide();
			$('#kmapps-list .dashboardMain').show();
		}
	})
    $('#kmapps-list .dashboard-second div.design').click(function() { 
			//alert(nocheck);
		var visibleItems=0;
		$(".kmapps-list-full li").each(function(){
			if($(this).css("display")!="none"){
				visibleItems++;
			}
		});
		if(visibleItems!=0){
			$('#kmapps-list .dashboardMain').hide();
			$(".kmapps-list-full").show();
		}
	});
    
    
   /* $('#kmapps-list .form-checkbox').change(function() {
      var addcatgry = '';
      $("#kmapps-list input").each( function() {
        if($(this).is(':checked')) {
          var catgry = $(this).val();
          catgry = catgry.replace(/\s/g, '');
          addcatgry += catgry+'_';
        }
      });
      $.ajax({
        url: '?q=km-apps/'+addcatgry,
        success: function(data){
          alert(data);
        }
      });

    });*/

  }
  function layoutEnable() {
    $('.kmapps-listing .form-radios').change(function() {
      var enableLayout = '';
      $(".kmapps-listing input").each( function() {
        if($(this).is(':checked')) {
          var enable = $(this).val();
          enableLayout += enable+'_';
        }
      });
      $.ajax({
        url: '?q=enable/'+enableLayout,
        success: function(data){
          //alert(data);
        }
      });

    });
  }


  $(document).ready(function() { 
    teaserCategorisation();
    layoutEnable();
  });

}(jQuery));
;
