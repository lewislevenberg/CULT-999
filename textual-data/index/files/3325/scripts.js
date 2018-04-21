jQuery.noConflict();
jQuery(function($){
    // so we can style pages with JS enabled differently
    document.documentElement.className = "js";

    // Remove style attributes from image captions, since we've already added padding in our CSS
    $(".wp-caption").removeAttr('style');

    // clear label for newsletter signup
    $("input#cons_email").placeholderLabel();


    // accesskey tooltip hints
    $("[accesskey]").each(function(){
    var key = $(this).attr('accesskey');
    if (key) {
      var modifier = $.browser.safari ? "control + alt" : "alt";
      if ( navigator.userAgent.toLowerCase().indexOf("macintosh" != -1) )
        modifier = modifier.replace('alt', 'option');
      $(this).attr('title', $(this).attr('title') + " [" + [modifier, key].join(" + ") + "]" );
    }
    });

    // caption overlays
    $(".wp-caption").each(function(){
    var $img = $(this).find("img"),
        text = $.trim( $img.attr('title') );
    if ( text )
      $("<span>").addClass('overlayed-text').text(text).insertAfter($img);
    // since it's a floated element and it doesn't have a fixed width, set it here
    // so its contents stay within its bounds.
    $(this).width( $img.width() );
    });

    $("a:has(img)").css('border','none');

    // Manually add text overlays to non-captioned images:
    $("img.title-overlay").each(function(){
    var $img = $(this),
        $target = $img.parent().is('a') ? $img.parent() : $img,
        text = $.trim( $img.attr('title') );
    $target.wrap('<div class="wp-caption"></div>');
    $img.closest('.wp-caption').css('float', $img.css('float'));
    if ( text )
      $("<span>").addClass('overlayed-text').text(text).insertAfter($img);
    // since it's a floated element and it doesn't have a fixed width, set it here
    // so its contents stay within its bounds.
    $(this).width( $img.width() );
    });


    // Resize big images
    var medium_width= [[320, 285], 280];
    $(".post .entry-content").each(function(){
    var post_width = $(this).width();
    $('img', this).each(function(){
      if ($(this).width() > post_width) {
        var new_width = post_width;
      } else if ( $.inArray($(this).width(), medium_width[0]) > -1 ) {
        var new_width = medium_width[1];
      }
      if (new_width) {
        var ratio = $(this).height() / $(this).width();
        new_height = Math.round(ratio * new_width);
        $(this).width(new_width).height(new_height)
          .removeAttr('width').removeAttr('height')
          .parents('.wp-caption').width($(this).width());
      }
    });
    });

    // Homepage Slideshow
    var $masthead = $("#masthead", 'body.home');
    if ($masthead.length > 0) {

    var $slideshow = $('ul#slideshow', $masthead);
        $slides = $slideshow.children('li.story').removeClass('hidden selected'),
        numSlides = $slides.length;
    // Wrap in container:
    $slideshow.wrap('<div class="slideshow-container" />').parent().width(function(){
      return $slideshow.width(); });
    $slideshow.width(function(){
      var sum = function(lengths){
        var s=0;
        $.each(lengths, function(){ s += this; });
        return s;
      };
      return sum( $slides.map(function(){ return $(this).width(); }).get() );
    });

    $slides.first().addClass('selected');

    $slides.each(function ($i, $slide) {
        if ($(this).find('a > img').length) {

            $(this).click(function(){
                window.location = $('a:has(img)', this).attr('href');
                return false;
            }).css('cursor', 'pointer').attr('title', function(){
                return $('a:has(img)', this).attr('title');
            });
        }
    });


    $masthead.find('> a.nav').bind('click autoslide', function(event){
      if (event.type=='autoslide' && $masthead.data('mouseover')) return false;

      var direction = (this.id == 'toprev') ? 1 : -1,
          oldLeft = (parseInt($slideshow.css('left'),10)||0),
          offset = $slides.first().width() * direction,
          left = oldLeft + offset,
          totalWidth = $slideshow.width(),
          index = Math.round(oldLeft / $slides.first().width());
      if (left <= -1 * totalWidth) left = 0;
      if (left > 0) left = -1 * (totalWidth - offset);

      $slideshow.queue();
      $slideshow.animate({'left': left }, 400, 'swing');
      $slides.removeClass('selected').eq(index).addClass('selected');
    }).end()
      .hover(function(){
        $.data(this, 'mouseover', true);
      }, function(){
        $.data(this, 'mouseover', false);
      });

    window.setInterval(function(){
      $("#tonext").trigger('autoslide');
    }, 7000);

    }

    // hide extra projects in footer. Will be as long as the next-longest list
    var $footer_projects = $("#ft li.page-item-36 li"),
      max_footer_size = Math.max.apply(Math, $.makeArray($footer_projects.parents('#ft li').siblings().map(function(){ return $(">ul>li", this).size(); })));
    if ($footer_projects.size() > max_footer_size) {
    var $more_link = $footer_projects.parents('#ft li').find(">a:eq(0)").clone().html("More&hellip;");
    $footer_projects.eq(max_footer_size-2)
      .after( $("<li>").append($more_link) ).next()
      .nextAll().hide();
    }

    // Hover menu IE6 compatibility
    $("ul#top-nav > li").hover(function(){
    $(this).addClass('hover');
    }, function(){
    $(this).removeClass('hover');
    });
    // Add "Overview" to main nav
    $("ul#top-nav>li").each(function(){
    var $a = $('>a:first', this),
        href = $a.attr('href'),
        text = /\/news\//.test(href) ? 'All ' + $a.text() : "Overview";
    $("<li>").addClass(this.className).append( $a.clone().text(text) ).prependTo( $('>ul:first',this) );
    });

    $("a", '#share-buttons').click(function(){
    var w=550, h=340, options = 'width='+w+',height='+h+',top='+((screen.height-h)*0.4)+',left='+((screen.width-w)/2);
    window.open($(this).attr('href'), 'twitter', options );
    return false;
    });


    // Donate sub-menu items
    if ($('body').hasClass('parent-pageid-83')) {
        // Get submenu
        $('#sidebar ul:first li').each(function () {
            if ($(this).hasClass('page-item-83')) {
                $(this).addClass('current_page_item');
                /*$(this).find('ul.children').remove();*/
            }
        });
    }

});
