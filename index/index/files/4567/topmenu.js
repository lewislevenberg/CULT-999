$(function(){
    /*CKEDITOR.config.contentsCss = '/www/ecm/files/upload/CAYM/design/css/main.css?2012-07-05';*/
    /* Top Menu */
    $('body').append('<div id="menu-holder">');
    $('.top-nav > li').each(function(){
        dropDown = $(this).children('ul');
        if(dropDown.length > 0){
            dIndex = $(this).index();
            offset = $(this).offset();
            oLeft = offset.left + (dIndex > 0 ? 3 : 0);
            oTop = offset.top + $(this).height();
            dropDown.appendTo('#menu-holder');
            dropDown.attr('class', 'top-nav-dropdown');
            dropDown.attr('id', 'top-nav-drop' + dIndex);
            dropDown.css('top', oTop+'px');
    
			if (($(this).parent().width() - ($(this).position().left)) < dropDown.width()) {
				oLeft = oLeft - ((dropDown.width() - ($(this).parent().width() - ($(this).position().left))));
			}
            
            dropDown.css('left', oLeft+'px');
            
			
            $(this).hover(function(){
                dIndex = $(this).index();
                dDown = $('#top-nav-drop' + dIndex);
                dDown.addClass('active');
                $('#menu-holder ul.top-nav-dropdown:not(.active):visible').slideUp(200);
                var has_foo = typeof dDropClose != 'undefined';
                if(has_foo) clearTimeout(dDropClose);
                if (dDown.is(':hidden')) dDown.slideDown(200);
            },
            function(){
                dDown.removeClass('active');
                dDropClose = setTimeout(function(){
                    dDown.slideUp(200);
                }, 30);
            });
            dropDown.hover(function(){
                var has_foo = typeof dDropClose != 'undefined';
                if(has_foo) clearTimeout(dDropClose);
            },
            function(){
                dDown.removeClass('active');
                dDropClose = setTimeout(function(){
                    dDown.slideUp(200);
                }, 30);
            });
        }
    });
    dMaxHeight = 0;
    $('#menu-holder ul.top-nav-dropdown > li').each(function(){
        $(this).css('height', $(this).parent().height()+'px');
    });
});