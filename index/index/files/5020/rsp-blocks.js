function calculateLIsInRow() {
    var setHeight;
    $('.rsp-block-wrapper').each(function() {
        //not the first one
        if ($(this).prev().length > 0) {
            //in the same column
            if ($(this).position().top == $(this).prev().position().top) {
                getBlockHeight($(this).prev(), $(this));
                if ($(this).prev().prev().position() != undefined) {
                    if (setHeight < $(this).height() && $(this).position().top == $(this).prev().prev().position().top) {
                        getBlockHeight($(this).prev().prev(), $(this));
                    }
                }
            }
            //if not in the same column
            else {
                $(this).find('.rsp-block-outer[equal-block="Yes"]').height('auto');
                setHeight = $(this).height();
            };
        }
        else {
                $(this).find('.rsp-block-outer[equal-block="Yes"]').height('auto');
                setHeight = $(this).height();
            };
    });
};

function getBlockHeight(elm1, elm2) {

    //if there is image or iframe wait for load
    if ($(elm1).find('img').length > 0 || $(elm1).find('iframe').length > 0 || $(elm1).find('frame').length > 0 | $(elm2).find('img').length > 0 || $(elm2).find('iframe').length > 0 || $(elm2).find('frame').length > 0) {

        var dynmamicelements = 0;
        var loadedelements = 0;
        dynmamicelements = ($(elm1).find('img').length > 0) ? dynmamicelements + 1 : dynmamicelements;
        dynmamicelements = ($(elm1).find('iframe').length > 0) ? dynmamicelements + 1 : dynmamicelements;
        dynmamicelements = ($(elm1).find('frame').length > 0) ? dynmamicelements + 1 : dynmamicelements;
        dynmamicelements = ($(elm2).find('img').length > 0) ? dynmamicelements + 1 : dynmamicelements;
        dynmamicelements = ($(elm2).find('iframe').length > 0) ? dynmamicelements + 1 : dynmamicelements;
        dynmamicelements = ($(elm2).find('frame').length > 0) ? dynmamicelements + 1 : dynmamicelements;
        //console.log(dynmamicelements);

        $(elm1).find('img').load(function() {
            // Handler for .load() called.
            // console.log('image loaded');
            loadedelements = loadedelements + 1;
            if (loadedelements === dynmamicelements) {
                //console.log('all loaded');
                setBlockHeight(elm1, elm2);
            }
        }).each(function() {
            if (this.complete) {
                $(this).trigger('load');
            }
        });

        $(elm1).find('iframe').load(function() {
            // Handler for .load() called.
            //console.log('iframe loaded');
            loadedelements = loadedelements + 1;
            if (loadedelements === dynmamicelements) {
                //console.log('all loaded');
                setBlockHeight(elm1, elm2);
            }
        }).each(function() {
            if (this.complete) {
                $(this).trigger('load');
            }
        });

        $(elm1).find('frame').load(function() {
            // Handler for .load() called.
            //console.log('frame loaded');
            loadedelements = loadedelements + 1;
            if (loadedelements === dynmamicelements) {
                //console.log('all loaded');
                setBlockHeight(elm1, elm2);
            }
        }).each(function() {
            if (this.complete) {
                $(this).trigger('load');
            }
        });

        $(elm2).find('img').load(function() {
            // Handler for .load() called.
            //console.log('image loaded');
            loadedelements = loadedelements + 1;
            if (loadedelements === dynmamicelements) {
                //console.log('all loaded');
                setBlockHeight(elm1, elm2);
            }
        }).each(function() {
            if (this.complete) {
                $(this).trigger('load');
            }
        });

        $(elm2).find('iframe').load(function() {
            // Handler for .load() called.
            //console.log('iframe loaded');
            loadedelements = loadedelements + 1;
            if (loadedelements === dynmamicelements) {
                //console.log('all loaded');
                setBlockHeight(elm1, elm2);
            }
        }).each(function() {
            if (this.complete) {
                $(this).trigger('load');
            }
        });

        $(elm2).find('frame').load(function() {
            // Handler for .load() called.
            //console.log('frame loaded');
            loadedelements = loadedelements + 1;
            if (loadedelements === dynmamicelements) {
                //console.log('all loaded');
                setBlockHeight(elm1, elm2);
            }
        }).each(function() {
            if (this.complete) {
                $(this).trigger('load');
            }
        });

    } else {
        setBlockHeight(elm1, elm2);
    }
}


function setBlockHeight(elm1init, elm2init) {
    var elm1 = elm1init; //elm before
    var elm2 = elm2init; //elm

    if ($(elm1.className + ':has(iframe#twitter-widget-0)') || $(elm2.className + ':has(iframe#twitter-widget-0)')) {
        if ($(elm2).height() < $(elm1).height()) {
            var elm1 = elm2init; //elm
            var elm2 = elm1init; //elm before
        }
    } else {

        //if column is more smaller than before
        var blockHeight1 = 0;
        var blockmargin1 = 0;

        $(elm1).closest('.rsp-block-wrapper').find('.rsp-block').each(function(index) {
            if ($(this).height() > 0) {
                blockHeight1 = blockHeight1 + $(this).height() + blockmargin1;
            }
            blockmargin1 = blockmargin1 + parseInt($('.rsp-block-outer').css('margin-bottom'));
        });


        var blockHeight2 = 0;
        var blockmargin2 = 0;

        $(elm2).closest('.rsp-block-wrapper').find('.rsp-block').each(function(index) {
            if ($(this).height() > 0) {
                blockHeight2 = blockHeight2 + $(this).height() + blockmargin2;
            }
            blockmargin2 = blockmargin2 + parseInt($('.rsp-block-outer').css('margin-bottom'));
        });

        //console.log("height1: " + blockHeight1 + " height2: " + blockHeight2)

        if (blockHeight2 < blockHeight1) {
            var elm1 = elm2init; //elm
            var elm2 = elm1init; //elm before
        }
    }

    var blockHeight = 0;
    var blockmargin = 0;

    $(elm2).closest('.rsp-block-wrapper').find('.rsp-block-outer').each(function(index) {
        if ($(this).height() > 0) {
            blockHeight = blockHeight + $(this).height() + blockmargin;
        }
        blockmargin = blockmargin + parseInt($('.rsp-block-outer').css('margin-bottom'));
    });

    //slider exists
    if ($(elm1).find('.slider-pro').length > 0) {
        sliderheight = blockHeight;
        if (typeof res_blocks_slider_config !== 'undefined') {
            // the variable is defined 
            if (sliderposition == 'left' || sliderposition == 'right') {
                sliderheight = sliderheight - $('.sp-buttons').outerHeight();
                thumbnailHeight = (sliderheight - ((itemcount - 1) * 4)) / itemcount;
            } else if (sliderposition == 'bottom') {
                sliderheight = sliderheight - $('.sp-buttons').outerHeight() - $('.sp-thumbnails-container').height() - parseInt($('.sp-thumbnails-container').css('margin-top'));
            } else {
                sliderheight = sliderheight;
            }
            var res_blocks_slider_config_new = {
                thumbnailHeight: thumbnailHeight,
                height: sliderheight
            };
            res_blocks_slider_config = $.extend({}, res_blocks_slider_config, res_blocks_slider_config_new);
            $(elm1).find('.rsp-block-outer[equal-block="Yes"] .slider-pro').sliderPro(res_blocks_slider_config);
        }
    }
    //slider doesnt exist
    else {
        //if it has not multiple sub item
        if ($(elm1).find('.rsp-block-outer .rsp-block-content').length < 2) {
            $(elm1).find('.rsp-block-outer[equal-block="Yes"] .rsp-block-content').closest('.rsp-block-outer').outerHeight(blockHeight);
        } else if ($(elm2).height() != $(elm1).height()) {
            $($(elm1).find('.rsp-block-outer[equal-block="Yes"] .rsp-block-content')[1]).outerHeight(elm2.height() - elm1.height());
            var newHeight = elm2.height() - elm1.height() + 15;
            if ($($(elm1).find('.rsp-block-outer[equal-block="Yes"] .rsp-block-content')[1]).parent().attr('data-padding-bottom') === undefined) {
                $($(elm1).find('.rsp-block-outer[equal-block="Yes"] .rsp-block-content')[1]).parent().css('padding-bottom', newHeight);
                $($(elm1).find('.rsp-block-outer[equal-block="Yes"] .rsp-block-content')[1]).parent().attr('data-padding-bottom', newHeight);
            } else {
                var newPadding = parseInt($($(elm1).find('.rsp-block-outer[equal-block="Yes"] .rsp-block-content')[1]).parent().attr('data-padding-bottom'));
                $($(elm1).find('.rsp-block-outer[equal-block="Yes"] .rsp-block-content')[1]).parent().css('padding-bottom', elm2.height() - elm1.height() + newPadding);
            }
        }
    }
};

function addClearFix() {
    $('.rsp-block-wrapper').parent().find('.clearfix.rsp-blocks-clearfix').remove();
    $('.rsp-block-wrapper').each(function() {
        if ($(this).prev().length > 0) { //&& !$(this).hasClass('collapse-outer') && !$(this).parent().hasClass('collapse-body')) {
            //if ($(this).prev().length > 0) {
            if (!$(this).hasClass('collapse-container')) {
                if ($(this).position().top != $(this).prev().position().top && !$(this).prev().parent().hasClass('collapse-body') && ($(this).prev().parent().hasClass('rsp-block-wrapper') || $(this).prev().hasClass('rsp-block-wrapper'))) {
                    $(this).before('<div class="clearfix rsp-blocks-clearfix"></div>')
                }
            }

        };
    });

    $('.collapse-body .rsp-block-wrapper').each(function() {
        if ($(this).prev().length > 0) {
            if ($(this).position().top != $(this).prev().position().top) {
                $(this).before('<div class="clearfix rsp-blocks-clearfix"></div>');
            }
            if ($(this).next().length === 0) {
                $(this).after('<div class="clearfix rsp-blocks-clearfix"></div>');
            }
        } else if ($(this).siblings().length === 0) {
            $(this).after('<div class="clearfix rsp-blocks-clearfix"></div>');
        }
    });
}

$(document).ready(function() {
    addClearFix();
    calculateLIsInRow();
});

addClearFix();
calculateLIsInRow();

var resizeTimer;

$(window).on('resize', function(e) {

    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {

        // Run code here, resizing has "stopped"
        //console.log('Done resizing');
        addClearFix();
        calculateLIsInRow();

    }, 500);

});

$(".collapse-block-wrapper").bind("opened", function(e) {
    var setHeight;
    $(e.target).parent().find('.collapse-body').children().each(function() {
        if($(this).hasClass('rsp-block-wrapper')) {
            //not the first one
            if ($(this).prev().length > 0) {
            //in the same column
                if ($(this).position().top == $(this).prev().position().top) {
                    getBlockHeight($(this).prev(), $(this));
                    if ($(this).prev().prev().position() != undefined) {
                        if (setHeight < $(this).height() && $(this).position().top == $(this).prev().prev().position().top) {
                            getBlockHeight($(this).prev().prev(), $(this));
                        }
                    }
                }
                //if not in the same column
                else {
                    $(this).find('.rsp-block-outer[equal-block="Yes"]').height('auto');
                    setHeight = $(this).height();
                };
            }   else {
                $(this).find('.rsp-block-outer[equal-block="Yes"]').height('auto');
                setHeight = $(this).height();
            };
        }
    });
});

$(document).ready(function() {
    addClearFix();
    calculateLIsInRow();
});