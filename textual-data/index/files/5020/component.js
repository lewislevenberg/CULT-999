var screen_size = $(window).width();
/*
 ===============================
 DOCUMENT User Content fix
 ===============================
 */
$('#webEditContent table').each(function() {
    if ($(this).width() > $(this).parent().width()) {
        $(this).css('width', '100%');
        if ($(this).width() > $(this).parent().width()) {
            $(this).find('tr img').css('max-width', '100%');
            $(this).find('tr iframe').css('max-width', '100%');
        }
    }
});


/*
 ===========================
 BLOCK CARD
 ===========================
 */

(function($) {
    $.fn.blockCard = function() {
        this.find('>ul').after('<div class="block-content clearfix"></div>');
        this.find('>ul>li').mouseover(function() {
            var content = $(this).find('div').html();
            $(this).parent().parent().find('.block-content').html(content);
            if (!$(this).hasClass('more')) {
                $(this).parent().find('li').removeClass('selected');
                $(this).addClass('selected');
            }
        });
        this.find('>ul>li').first().mouseover();
    };
}(jQuery));

$('.block-card').blockCard();


/*
 === === === === === === === === === === ===
 BLOCK CARD LARGE 
 === === === === === === === === === === ===
 */
(function($) {
    $.fn.blockCardLarge = function() {
        var element = this;
        var datatoogle = true;
        if (element.find('.block-content').length !== 0) {
            datatoogle = false;
        };
        this.find('>ul>li').each(function(index) {
            if (datatoogle) {
                var content = $(this).find('div').html();
                $(this).attr("item-id", index);
                element.append('<div class="block-content" item-id = "' + index + '">' + content + '</div>');
            };
        });
        this.find('>ul>li').mouseover(function(index) {
            if (!$(this).hasClass('more')) {
                $(this).parent().find('li').removeClass('selected');
                $(this).addClass('selected');
                var selectedid = $(this).attr("item-id");
                element.find('.block-content').each(function() {
                    if ($(this).attr("item-id") === selectedid) {
                        $(this).addClass("visible");
                    } else {
                        $(this).removeClass("visible");
                    }
                });
            };
        });
        this.find('>ul>li').first().mouseover();
        setScreenSize(element);

        /*height whatsnew*/
        if (this.find(".block-content img").length > 0) {
            this.find(".block-content img").load(function() {
                equalHeights(element);
            });
        } else {
            equalHeights(element);
        }

        function equalHeights(object) {
            var max_bc_height = 0;
            object.find(".block-content").each(function(index) {
                if ($(this).outerHeight(true) > max_bc_height) {
                    max_bc_height = $(this).outerHeight(true);
                }
            });
            object.find(">ul>li").height('auto');
            totalHeightUL = object.find(">ul").height();
            if (totalHeightUL > max_bc_height) {
                max_bc_height = totalHeightUL;
            };
            object.find(">ul>li:not(.more)").outerHeight((max_bc_height - element.find(">ul>li.more").outerHeight(true)) / element.find(">ul>li:not(.more)").length);
            //equal focus area
            object.closest('.equal-blocks').find('.block-card-vertical').height(object.height() + 3);
        };

        function setScreenSize(object) {
            if (($(window).width() < 768) && ($('.hidden-xs').css('display') != 'block')) {
                object.find('>ul>li').addClass('list-group-item');
                object.find('>ul>li').not('.more').find('h3>a')
                    .addClass('panel-heading accordion-toggle')
                    .attr({
                        'data-toggle': 'collapse',
                        'data-parent': '#accordion'
                    })
                    .each(function(index) {
                        $(this).attr('href', '#whatsnew_collapse_' + index)
                    })
                object.find('>ul>li>div')
                    .addClass('panel-collapse collapse panel-body')
                    .each(function(index) {
                        $(this).attr('id', 'whatsnew_collapse_' + index)
                    })

                //when one is open close others

                object.find("ul li  h3 a").click(function(event) {
                    var clickItem = $(this);
                    $(this).closest("ul").find('li  h3 a').each(function(index) {
                        if (clickItem.is($(this))) {
                            if ($(this).closest("li").hasClass('open')) {
                                $(this).closest("li").removeClass('open');
                                item1 = $(this);
                            } else {
                                $(this).closest("li").addClass('open');
                                item2 = $(this);
                            }
                        } else {
                            $(this).closest("li").removeClass('open');
                            $(this).closest("li").find('.panel-collapse').removeClass('in');
                            $(this).closest("li").find('.panel-collapse').addClass('collapse');
                        }
                    });
                });
            } else {
                object.find('>ul>li .collapse').collapse("hide");
                equalHeights(element);
                //correct link again
                $('.panel-heading').each(function(index) {
                    $(this).attr('href', $(this).closest("li").find('.block-link').attr('href'));
                })

                object.find('>ul>li').removeClass('list-group-item');
                object.find('>ul>li>h3>a').removeClass('panel-heading accordion-toggle')
                object.find('>ul>li>div').removeClass('panel-collapse collapse panel-body')
                object.find('>ul>li>h3>a').attr({
                    'data-toggle': '',
                    'data-parent': ''
                })
            }
        };
        if (!element.find("ul").not(".newslist").find("li").first().hasClass('open')) {
            element.find("ul").not(".newslist").find("li  .panel-heading").first().click()
        };
    }
}(jQuery));
$('.block-card-large').blockCardLarge();
/*show just not empty items*/
$('.focus-carousel ul li .block-image').each(function(index) {
    if ($(this).attr('src')) {
        $(this).closest('li').show();
    }
});
/*
 === === === === === === === === === === === ===
 BLOCK CARD VERTICAL 
 === === === === === === === === === === === ===
 */

function equalverblock(elmvertical) {
    var reservedHeight = 0;
    elmvertical.find('>ul>li:not(".selected")').each(function() {
        $(this).height('auto');
        reservedHeight += $(this).height();
    });
    elmvertical.find('>ul>li.selected').height(elmvertical.height() - reservedHeight);
};


(function($) {
    $.fn.blockCardVertical = function() {
        var elmvertical = this;

        /*height whatsnew*/
        if (this.find(".block-content img").length > 0) {
            this.find(".block-content img").load(function() {
                equalverblock(elmvertical);
            });
        } else {
            equalverblock(elmvertical);
        }

        this.find('>ul>li').click(function() {
            if (!$(this).hasClass('selected')) {
                $(this).parent().find('li.selected').removeClass('selected');
                $(this).addClass('selected');
                equalverblock(elmvertical);
            }
        });
        this.find('>ul>li').first().click();
    }

    $.fn.blockCardVerticalResize = function() {
        equalverblock(this);
    }
}(jQuery));
$(function() {
    $('.block-card-vertical').blockCardVertical();
});


/*
 === === === === === === === === === === === ===
 RESPONSIVE BLOCKS
 === === === === === === === === === === === ===
 */

$(window).bind('resize', function() {
    if (screen_size != $(window).width()) {
        $('.block-card-large').blockCardLarge();
        $('.block-card-vertical').blockCardVerticalResize();
    }
});
/*
 ===========================
 FAT FOOTER
 ===========================
 */
(function($) {
    $.fn.blockFooter = function() {
        var element = this;
        $(window).bind('resize', function() {
            if (screen_size != $(window).width()) {
                setScreenSize(element);
            }

        });
        setScreenSize(element);
    }

    function setScreenSize(element) {
        if (($(window).width() < 768) && ($('.hidden-xs').css('display') != 'block')) {
            element.addClass('btn-group-vertical');
            element.find('>ul>li').addClass('btn-group');
            element.find('>ul>li>h4')
                .addClass('btn btn-default dropdown-toggle')
                .attr("data-toggle", "dropdown");
            element.find('>ul>li>ul').addClass('dropdown-menu');
        } else {
            element.removeClass('btn-group-vertical');
            element.find('>ul>li').removeClass('btn-group');
            element.find('>ul>li>h4')
                .removeClass('btn btn-default dropdown-toggle')
                .removeAttr("data-toggle");
            element.find('>ul>li>ul').removeClass('dropdown-menu');
        }
    }
}(jQuery));
$('.block-footer').blockFooter();
var con = 0;
$('.fat-footer .footer-header li h4').each(function(index) {

    if ($(this).text().length != 0) {
        con = con + 1;
    } else {
        $(this).parent().hide();
    }

});
$('.fat-footer .footer-header>li').each(function(index) {
    $(this).css('width', (100 / con + '%'))
});
/*
 ===========================
 FOCUS SWIPE
 ===========================
 */


$(function() {
    //Enable swiping...

    if ($(".block-card .block-content").swipe) {
        $(".block-card .block-content").swipe({
            //Generic swipe handler for left
            swipeLeft: function(event, direction, distance, duration, fingerCount, fingerData) {

                //console.log("You swiped " + direction ); 
                var parent = $(this).closest(".focus-carousel").find('ul');
                var length = 0;
                $(parent).find('li').each(function(index) {
                    if (!$(this).is(':hidden')) {
                        length = length + 1
                    }
                })


                var item = $(parent).find('li.selected');
                var index = $(item).index();
                if (index + 1 >= length) {
                    index = 0;
                } else {
                    index = index + 1;
                }
                var newitem = $(parent).find('li').eq(index);
                newitem.mouseover()



            },
            //Generic swipe handler for right
            swipeRight: function(event, direction, distance, duration, fingerCount, fingerData) {

                //console.log("You swiped " + direction ); 
                var parent = $(this).closest(".focus-carousel").find('ul');
                var length = 0;
                $(parent).find('li').each(function(index) {
                    if (!$(this).is(':hidden')) {
                        length = length + 1
                    }
                })


                var item = $(parent).find('li.selected');
                var index = $(item).index();
                if (index == 0) {
                    index = length - 1;
                } else {
                    index = index - 1;
                }
                var newitem = $(parent).find('li').eq(index);
                newitem.mouseover()




            },
            //Default is 75px, set to 0 for demo so any distance triggers swipe
            threshold: 0
        });
    }
});
/*
 ===========================
 NAV bar items
 ===========================
 */
if ($('.nav-side li')) {
    $('.nav-side li').first().addClass('first-item');
    $('.nav-side li').last().addClass('last-item');
}


/*
 ===========================
 CONTACT FORM
 ===========================
 */


// Contact form swap
$("#form-1, #form-2, #form-3").hide();
$("#choose-form").change(function() { //Hide -other- visible forms             
    $("#form-1, #form-2, #form-3").hide();
    $("#" + $(this).val()).show();
});
// modal
//check if dialog-form exist in the page
if ($("#dialog-form") && ($("#dialog-form").length > 0)) {
    $("#dialog-form").dialog({
        autoOpen: false,
        width: '600', // overcomes width:'auto' and maxWidth bug
        modal: true,
        fluid: true, //new option
        dialogClass: 'ui-dialog-custom-form',
        resizable: false
    });
    $("#open-form")
        .click(function() {
            $("#dialog-form").dialog("open");
        });
}
//end modal
//form validation
if ($("#dialog-form") && ($("#dialog-form").length > 0)) {
    var errorStyle = 'background-color: pink; border: 1px dashed red;';
    $('#form-1, #form-2, #form-3').submit(function() {
        var processForm = true;
        var requiredFields = $(this).find('input.required, select.required, textarea.required');
        requiredFields.each(function(i, e) {
            if ($(e).val() == "" || $(e).val() == "  ") {
                $(e).attr('style', errorStyle)
                processForm = false;
            } else {
                $(e).attr('style', '');
            }
            if ($(e).attr('name').indexOf('email') > -1 && !IsEmail($(e).val())) {
                processForm = false;
                $(e).attr('style', errorStyle)
            }
        });

        return processForm;
    });

    $('input[type=reset]').click(function() {
        var form = $(this).closest('form');
        var requiredFields = $(form).find('input.required, select.required, textarea.required');
        requiredFields.each(function(i, e) {
            $(e).attr('style', '');
        });
    });
}

function IsEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}
//end form validation
/*
 ===========================
 HOVER EFFECT
 ===========================
 */

$(document).ready(function() {
    $('.dropdown-menu li').bind('touchstart touchend', function(e) {
        $(this).toggleClass('hover_effect');
    });
});

/*
 ===========================
    resize event
 ===========================
 */
$(window).bind('resize', function() {
    screen_size = $(window).width();
});