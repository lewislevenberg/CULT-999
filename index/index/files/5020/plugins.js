// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

// jquery.columnlist.js
// @weblinc, @jsantell (c) 2012

(function($){$.fn.columnlist=function(options){function returnColumn(inc){return $('<li class="'+options.incrementClass+inc+" "+options["class"]+'"></li>')}return options=$.extend({},$.fn.columnlist.defaults,options),this.each(function(){var $list=$(this),size=options.size||$list.data("columnList")||1,$children=$list.children("li"),perColumn=Math.ceil($children.length/size),$column;for(var i=0;i<size;i++){$column=$("<ul />").appendTo(returnColumn(i));for(var j=0;j<perColumn;j++)$children.length>i*perColumn+j&&$column.append($children[i*perColumn+j]);$list.append($column.parent())}})},$.fn.columnlist.defaults={"class":"column-list",incrementClass:"column-list-"}})(jQuery)