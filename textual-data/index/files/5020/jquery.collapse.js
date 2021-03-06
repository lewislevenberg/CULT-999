/*
 * Collapse plugin for jQuery
 * --
 * source: http://github.com/danielstocks/jQuery-Collapse/
 * site: http://webcloud.se/jQuery-Collapse
 *
 * @author Daniel Stocks (http://webcloud.se)
 * Copyright 2013, Daniel Stocks
 * Released under the MIT, BSD, and GPL Licenses.
 */

$(function(){
  (function($, exports) {
  
    // Constructor
    function Collapse (el, options) {
      options = options || {};
      var _this = this,
        query = options.query || "> :even";
  
      $.extend(_this, {
        $el: el,
        options : options,
        sections: [],
        isAccordion : options.accordion || false,
        db : options.persist ? jQueryCollapseStorage(el.get(0).id) : false
      });
  
      // Figure out what sections are open if storage is used
      _this.states = _this.db ? _this.db.read() : [];
  
      // For every pair of elements in given
      // element, create a section
      _this.$el.find(query).each(function() {
        new jQueryCollapseSection($(this), _this);
      });
  
      // Capute ALL the clicks!
      (function(scope) {
        _this.$el.on("click", "[data-collapse-summary] " + (scope.options.clickQuery || ""),
          $.proxy(_this.handleClick, scope));
  
        _this.$el.bind("toggle close open",
          $.proxy(_this.handleEvent, scope));
  
      }(_this));
    }
  
    Collapse.prototype = {
      handleClick: function(e, state) {
        e.preventDefault();
        state = state || "toggle";
        var sections = this.sections,
          l = sections.length;
        while(l--) {
          if($.contains(sections[l].$summary[0], e.target)) {
            sections[l][state]();
            break;
          }
        }
      },
      handleEvent: function(e) {
        if(e.target == this.$el.get(0)) return this[e.type]();
        this.handleClick(e, e.type);
      },
      open: function(eq) {
        this._change("open", eq);
      },
      close: function(eq) {
        this._change("close", eq);
      },
      toggle: function(eq) {
        this._change("toggle", eq);
      },
      _change: function(action, eq) {
        if(isFinite(eq)) return this.sections[eq][action]();
        $.each(this.sections, function(i, section) {
          section[action]();
        });
      }
    };
  
    // Section constructor
    function Section($el, parent) {
  
      if(!parent.options.clickQuery) $el.wrapInner('<a href="#"/>');
  
      $.extend(this, {
        isOpen : false,
        $summary : $el.attr("data-collapse-summary",""),
        $details : $el.next(),
        options: parent.options,
        parent: parent
      });
      parent.sections.push(this);
  
      // Check current state of section
      var state = parent.states[this._index()];
  
      if(state === 0) {
        this.close(true);
      }
      else if(this.$summary.is(".open") || state === 1) {
        this.open(true);
      } else {
        this.close(true);
      }
    }
  
    Section.prototype = {
      toggle : function() {
        this.isOpen ? this.close() : this.open();
      },
      close: function(bypass) {
        this._changeState("close", bypass);
      },
      open: function(bypass) {
        var _this = this;
        if(_this.options.accordion && !bypass) {
          $.each(_this.parent.sections, function(i, section) {
            section.close();
          });
        }
        _this._changeState("open", bypass);
      },
      _index: function() {
        return $.inArray(this, this.parent.sections);
      },
      _changeState: function(state, bypass) {
  
        var _this = this;
        _this.isOpen = state == "open";
        if($.isFunction(_this.options[state]) && !bypass) {
          _this.options[state].apply(_this.$details);
        } else {
          _this.$details[_this.isOpen ? "show" : "hide"]();
        }
  
        _this.$summary.toggleClass("open", state !== "close");
        _this.$details.attr("aria-hidden", state === "close");
        _this.$summary.attr("aria-expanded", state === "open");
        _this.$summary.trigger(state === "open" ? "opened" : "closed", _this);
        if(_this.parent.db) {
          _this.parent.db.write(_this._index(), _this.isOpen);
        }
      }
    };
  
    // Expose in jQuery API
    $.fn.extend({
      collapse: function(options, scan) {
        var nodes = (scan) ? $("body").find("[data-collapse]") : $(this);
        return nodes.each(function() {
          var settings = (scan) ? {} : options,
            values = $(this).attr("data-collapse") || "";
          $.each(values.split(" "), function(i,v) {
            if(v) settings[v] = true;
          });
          new Collapse($(this), settings);
        });
      }
    });
  
    // Expose constructor to
    // global namespace
    exports.jQueryCollapse = Collapse;
    exports.jQueryCollapseSection = Section;
    
    //jQuery DOM Ready
    $(function() {
      $.fn.collapse(false, true);
    });
  
    var cookieStorage = {
      expires: function() {
        var now = new Date();
        return now.setDate(now.getDate() + 1);
      }(),
      setItem: function(key, value) {
        document.cookie = key + '=' + value + '; expires=' + this.expires +'; path=/';
      },
      getItem: function(key) {
        key+= "=";
        var item = "";
        $.each(document.cookie.split(';'), function(i, cookie) {
          while (cookie.charAt(0)==' ') cookie = cookie.substring(1,cookie.length);
          if(cookie.indexOf(key) === 0) {
            item = cookie.substring(key.length,cookie.length);
          }
        });
        return item;
      }
    };
  
    $.fn.collapse.cookieStorage = cookieStorage;
  
    var STORAGE_KEY = "jQuery-Collapse";
  
    function Storage(id) {
      var DB;
      try {
        DB = window.localStorage || $.fn.collapse.cookieStorage;
      } catch(e) {
        DB = false;
      }
      return DB ? new _Storage(id, DB) : false;
    }
    function _Storage(id, DB) {
      this.id = id;
      this.db = DB;
      this.data = [];
    }
    _Storage.prototype = {
      write: function(position, state) {
        var _this = this;
        _this.data[position] = state ? 1 : 0;
        // Pad out data array with zero values
        $.each(_this.data, function(i) {
          if(typeof _this.data[i] == 'undefined') {
            _this.data[i] = 0;
          }
        });
        var obj = this._getDataObject();
        obj[this.id] = this.data;
        this.db.setItem(STORAGE_KEY, JSON.stringify(obj));
      },
      read: function() {
        var obj = this._getDataObject();
        return obj[this.id] || [];
      },
      _getDataObject: function() {
        var string = this.db.getItem(STORAGE_KEY);
        return string ? JSON.parse(string) : {};
      }
    };
  
    jQueryCollapseStorage = Storage;
  
  })(window.jQuery, window);

$.fn.reverse = [].reverse;
var target = '.collapse-outer',
    invert = ':not(' + target + ')',
    wrap = '<div class="rsp-block-wrapper collapse-container">',
    breakpoints = $('.rsp-blocks-container > *'+invert);

breakpoints.each(function(){
  $(this).nextUntil(invert).wrapAll( wrap );
});

breakpoints.first().prevUntil(invert).reverse().wrapAll( wrap );

$('.collapse-container').each(function(){
  var className = $($(this).find(".collapse-outer")[0]).data("classname")
  $(this).addClass(className);
});

if($('.collapse-outer').length > 1){
    var first_collapse = $('.collapse-outer:first');
    var width = first_collapse.width();
    var button = "<div class='collapse-expander'><a>"+ collapseBtn +"</a></div>";
    $(first_collapse).before(button);
    $('.collapse-expander').css('width', width);
    if($('.collapse-block-wrapper').length === $('.collapse-block-wrapper .open').length){
      $( ".collapse-expander .collapse-btn" ).toggleClass( "expand" );
    }
  }

  $('.collapse-expander a').click(function(){
    if($(".collapse-expander a .collapse-btn").hasClass("expand")){
      $(".collapse-block-wrapper").trigger("open");
    }else{
      $(".collapse-block-wrapper").trigger("close");
    }
    $( ".collapse-expander a .collapse-btn" ).toggleClass( "expand" );
  });

  $( window ).resize(function() {
    var first_collapse = $('.collapse-outer:first');//.parent();
    var width = first_collapse.width();
    $('.collapse-expander').css('width', width);
  });

});