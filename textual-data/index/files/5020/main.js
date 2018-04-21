/*remove left-nav-on-xs*/
if (($('#webEditContent.document').length > 0 && $('.ip-title').length > 0) || $('.books .book-head').length > 0) {
    $('.leftnav-sidebar-wrapper').addClass('hidden-xs')
}

function setDocument(mode){
    if (mode == 'small'){
        $('#document').find('td').removeAttr('width');
    }
}

$(function(){
    $('img').each(function(){
        var src = $(this).attr('src')
       // if (src)
       // $(this).attr('src', src.replace(/^\/media\/oecdorg\//, '//www.oecd.org/media/oecdorg'))
    });

    $('.document *').each(function(){
       $(this).css('background-color', $(this).attr('bgcolor'));
    });
	
});


$(".breadcrumb li a").each(function(index) {
    var brd = $(this).text();
    $(".header-menu li a").each(function(index) {
        if ($(this).text() == brd) {
            $(this).closest('li').addClass('selected-menu');
        } else {
            $(this).closest('li').removeClass('selected-menu');
        }
    });
});


$('.lang-btn').click(function() {
    if ($(this).text() == 'English') {
        window.location = $('#lang-url-en a').attr('href');
    } else {
        window.location = $('#lang-url-fr a').attr('href');
    }
});

/*fix bug if there is no list item dont show header*/
$(".also-avaliable-en").each(function(index) {
    if ($(this).find('>ul>li').length == 0) {
        $(this).hide()
    };
});
$(".also-avaliable-fr").each(function(index) {
    if ($(this).find('>ul>li').length == 0) {
        $(this).hide()
    };
});

/*newsroom slide*/

var globalVar = 0;


$(function() {

	var	inc 	= 0,
		offseth	= 10,
		ratio;
	
	$('<ul />').attr({ id: "photos" }).prependTo('#flkr');
	
	$.getJSON('http://api.flickr.com/services/feeds/photos_public.gne?id=32771300@N02&lang=en-us&sort=date-taken-asc&format=json&jsoncallback=?', function(data) {
	$.each(data.items, function(i,item) {
	
		if(i <= 20){
			var thumb = (item.media.m);//.replace('_m.jpg', '_n.jpg');
			
			$('<img/>').attr({
				alt: "photo"+i, 
				title: item.title,
				src: thumb
			})
			.appendTo('#photos').wrap('<li class="img"><a href="' + item.link + '"></a></li>')
			.hide()
			.one('load', function(){
				inc ++;
				$(this).fadeIn("slow");
				$(this).parent().css("left", offseth+"px");
				offseth += $(this).innerWidth();
				if (inc === 19) {
					 ratio = offseth/430;
					 $("#photos").innerWidth((offseth+10+$(this).innerWidth())+"px");
				}
			});
			/*
			$('<img/>').attr({ src: thumb })
			.appendTo('#thumbs').wrap('<a href="' + item.link + '"></a>');
			*/
		}
	});
});
  
function flickrLoader() {
	
}
function scrollBar() {
	
    $('#thumbs').mousemove(function(evt){
        var offset = $(this).offset();
        var x = evt.clientX - offset.left;
        $("#photos").css("left", -(Math.floor(x*ratio)));
		var msg = "Handler for .mousemove() called at ";
		msg += x + "photos left: " +  $("#photos").css("left");
		$("#log").text(msg);
    });
}
});

/*BY TOPIC*/
$(function() {
	$('ul.topicsList li').sort(function(a,b) { return $(a).text().toLowerCase().localeCompare( $(b).text().toLowerCase() ); }).appendTo('ul.topicsList');
	if ( $('.breadcrumb a:last').text() == 'By Country' ) {
		$('ul.topicsList').addClass('ByCountry');
		$('ul.topicsList>li> a').each(function(idx, a) { 
			var $a = $(a);
			$a.before('<span class="flag"></span>');

			var $li = $a.parent();
			//$li.attr('class', '');

			var countryName = $a.text();
			var letter = countryName.charAt(0).toUpperCase();
			$li.addClass(letter); 
			
			countryName = countryName
				.replace(/\s+/g, '')
				.replace(',', '')
				.replace('(', '')
				.replace(')', '')
				.replace('\'', '').toLowerCase();

			$(a).parent().addClass(countryName.charAt(0).toUpperCase() + countryName.slice(1));

		});
		for(var i=65;i<=90;i++) {       
			var letter = (String.fromCharCode(i));
			$('ul.topicsList>li.'+letter+':first').before('<li class="split"><a name="#'+letter+'"><span>'+letter+'</span></a></li>');
		}
		$('ul.topicsList').columnlist({size:3, 'class':'col-md-4 col-sm-6 col-xs-12', incrementClass : 'li_col'});
	} else {
		$('ul.topicsList').addClass('ByTopic');
		$('ul.topicsList').columnlist({size:4, 'class':'col-md-3 col-sm-6 col-xs-12', incrementClass : 'li_col'});	
	}
	$('ul.topicsList').show();

});

/**DOWNLOAD TRACKING**/
$(function() {
  if ( typeof String.prototype.endsWith != 'function' ) {
    String.prototype.endsWith = function( str ) { 
      return this.substring( this.length - str.length, this.length ) === str; 
    }
  };

  $("div.section.container a[href]").each(function() {
    var linkValue = $(this).attr("href").replace(/[#]|\//g, '');
    if ( linkValue.endsWith(".pdf")
     || linkValue.endsWith(".doc")
     || linkValue.endsWith(".docx")
     || linkValue.endsWith(".ppt")
     || linkValue.endsWith(".pptx")
     || linkValue.endsWith(".xls")
     || linkValue.endsWith(".xlsx")) {

      $(this).attr("target", "_blank"); // to avoid race conditions
      $(this).attr("onMouseDown", "javascript:_gaq.push(['_trackPageview', '" + $(this).attr('href')+"']);");

    }

  });
  
  $('a#block-img-link').each(function(){
    if($(this).data("external-link")=="" && $(this).data("section-link")==""){
      $(this).addClass("nohover");
    }else{
      if($(this).data("external-link")!=""){
        $(this).attr('href', $(this).data("external-link"));
      }
      if($(this).data("section-link")!=""){
        $(this).attr('href', $(this).data("section-link"))
      }
    }
  });
  $('a#block-img-link').click(function(event){
    if(!$(event.target).parent().attr('href')){
    	return false;
    }
  });

});



/**POPUP 360**/
