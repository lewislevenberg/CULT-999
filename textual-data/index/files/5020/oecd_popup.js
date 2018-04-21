jQuery.fn.extend({
    showOecdPopup: function(options) {

        var plugin = this;

        // Establish our default settings
        var defaults = {
            "container": plugin, //container for adding popup
            "popupID": "popup-" + Math.floor(Math.random() * 89999 + 10000), //id for popup
            "cookie": "OecdSurvey", //cookie name
            "testUrl": "/terminalfour/SiteManager", //root of we site
            "liveMode": "Yes", //If yes show on Prod
            "allPages": "Yes", //If yes all pages
            "pagesList": "", //list of page that popup will be shown
            "includeLatestDocuments": "Yes",
            "includeByDate": "Yes",
            "includeByCountry": "Yes",
            "includePublicationsDocuments": "Yes",
            "title": "title",
            "text": "text",
            "logo": "",
            "surveyUrl": "",
            "hideInternal": "No",
            "internalExternalImg": "http://t4-site-mgr.oecd.org/internalExternal.gif",
            "hideFooter": "No",
            "primarybgcolor": "#11629a",
            "secondrybgcolor": "#ffffff",
            "primarytextcolor": "#ffffff",
            "secondrytextcolor": "#333333"
        };

        plugin.settings = $.extend({}, defaults, options);

        //init
        plugin.init = function() {

            //split page list
            plugin.settings.pagesList = plugin.settings.pagesList.split(',');

            //set boolean values
            plugin.settings.liveMode = (plugin.settings.liveMode == "Yes") ? true : false;
            plugin.settings.allPages = (plugin.settings.allPages == "Yes") ? true : false;
            plugin.settings.includeLatestDocuments = (plugin.settings.includeLatestDocuments == "Yes") ? true : false;
            plugin.settings.includeByDate = (plugin.settings.includeByDate == "Yes") ? true : false;
            plugin.settings.includeByCountry = (plugin.settings.includeByCountry == "Yes") ? true : false;
            plugin.settings.includePublicationsDocuments = (plugin.settings.includePublicationsDocuments == "Yes") ? true : false;
            plugin.settings.hideInternal = (plugin.settings.hideInternal == "Yes") ? true : false;
            plugin.settings.hideFooter = (plugin.settings.hideFooter == "Yes") ? true : false;
            plugin.settings.booleanOnExit = (plugin.settings.showOnExit == "Yes") ? true : false;
            plugin.settings.booleanOnClick = (plugin.settings.showOnClick > 0) ? true : false;
            plugin.settings.booleanOnMinutes = (plugin.settings.showOnMinutes > 0) ? true : false;

            //variables
            plugin.settings.currentUrl = document.location.href;
            plugin.settings.currentPath = document.location.pathname;
            plugin.settings.isPROD = plugin.settings.currentUrl.indexOf(plugin.settings.testUrl) < 0;
            plugin.settings.session = "session-" + plugin.settings.contentID;

            //template
            plugin.settings.templateFooter = "";
            if (!plugin.settings.hideFooter) {
                plugin.settings.templateFooter = '<div class="modal-footer">' +
                    '<a class="primarybgcolor primarytextcolor btn btn-primary thanksClose" href="' + plugin.settings.surveyUrl + '" target="_blank">Take Survey</a>' +
                    '<button type="button" class="btn btn-default maybeLater secondrytextcolor">Maybe Later</button> ' +
                    '<button type="button" class="btn btn-default thanksClose secondrytextcolor">No Thanks</button>' +
                    '</div>';
            };

            plugin.settings.templateLogo = "";
            if (plugin.settings.logo.length > 0) {
                plugin.settings.templateLogo = '<span class="popup-logo">' + plugin.settings.logo + '</span>';
            };

            plugin.settings.template = '<div  class="modal fade oecd-popup" id="' + plugin.settings.popupID + '" tabindex="-1" role="dialog" aria-labelledby="popup-modal" aria-hidden="true">' +
                '<div class="modal-dialog">' +
                '<div class="modal-content secondrybgcolor secondrytextcolor primarybordercolor ">' +
                '<div class="modal-header  primarybgcolor primarytextcolor"><button type="button" class="close primarybgcolor"  data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button><h3 class="primarytextcolor modal-title">' +
                plugin.settings.templateLogo + plugin.settings.title + '</h3></div>' +
                '<div class="modal-body">' + plugin.settings.text + '</div>' + plugin.settings.templateFooter +
                '</div></div></div>';

            //check for liveMode
            if ((!plugin.settings.liveMode) && plugin.settings.isPROD) {
                return;
            }

            //check for page list
            if (!plugin.settings.allPages) {
                if (indexOf(plugin.settings.pagesList, plugin.settings.currentUrl) < 0 && (!plugin.settings.booleanOnExit || !plugin.settings.booleanOnClick || !plugin.settings.booleanOnMinutes))
                    return;
            } else
            if ((!plugin.settings.includeLatestDocuments) && (plugin.settings.currentPath.indexOf('/latestdocuments/') > 0))
                return;
            if ((!plugin.settings.includeByDate) && (plugin.settings.currentPath.indexOf('/bydate/') > 0))
                return;
            if ((!plugin.settings.includeByCountry) && (plugin.settings.currentPath.indexOf('/bycountry/') > 0))
                return;
            if ((!plugin.settings.includePublicationsDocuments) && (plugin.settings.currentPath.indexOf('/publicationsdocuments/') > 0))
                return;

            //check for Cookie -- No thanks
            if (getCookie(plugin.settings.cookie) != "")
                return;

            //check for Session -- Maybe Later
            if (getCookie(plugin.settings.session) != "")
                return;

            //check for internal
            if (plugin.settings.hideInternal) {

                $('body').append('<img id="internalExternal" class="hide" src="' + plugin.settings.internalExternalImg + '">');

                $('#internalExternal')
                    .each(function() {
                        //Cache fix for browsers that don't trigger .load()
                        if (this.complete) $(this).trigger('load');
                    })
                    .on('load', function() {
                        //console.log("internal");
                        return;
                    })
                    .on('error', function() {
                        //console.log("external");
                        plugin.show();
                    });

            } else {
                //Check exit, onclick, and minutes //show popup after
                if (plugin.settings.booleanOnExit || plugin.settings.booleanOnClick || plugin.settings.booleanOnMinutes) {
                    
                    //Set page visit
                    if (localStorage) {
                        // LocalStorage is supported!
                        if (indexOf(plugin.settings.pagesList, plugin.settings.currentUrl) > 0) {
                            localStorage.setItem('popup' + plugin.settings.contentID + '_pagevisited', '0');
                        } 
                    }

                    //showOnExit
                    if (plugin.settings.booleanOnExit) {
                        /*
                        window.onbeforeunload = function(event) {
                            //check if person going outside of oecd.org
                            if (plugin.settings.booleanExitDomain) {
                                //console.log("outside of oecd domain");
                                deleteCookie(plugin.settings.session);
                                if (!getCookie(plugin.settings.session) != "") {
                                    var s = "Do you want to take our survey before leaving?";
                                    event = event || window.event;
                                    if (event) {
                                        // This is for IE
                                        event.returnValue = s;
                                    }
                                    // This is for all other browsers
                                    plugin.show();
                                    return s;
                                }
                            }
                        }
                        */
                        $(document).on("click", "a", function(event) {
                            var target = getLocation($(this).attr("href"));
                            if (target.hostname !== window.location.hostname) {
                                //console.log("inside of oecd domain");
                                plugin.settings.booleanExitDomain = true;
                                if (!getCookie(plugin.settings.session) != "") {
                                    if (localStorage) {
                                        if(localStorage.getItem('popup' + plugin.settings.contentID + '_pagevisited') !== null){
                                            event.preventDefault();
                                            plugin.show();
                                        }
                                    }
                                }
                            } else {
                                plugin.settings.booleanExitDomain = false;
                            }
                        });
                    }
                    //showOnClick
                    if (plugin.settings.booleanOnClick) {
                        if (localStorage) {
                            // LocalStorage is supported!
                            if (indexOf(plugin.settings.pagesList, plugin.settings.currentUrl) > 0 &&
                                localStorage.getItem('popup' + plugin.settings.contentID + '_clickCount') === null) {
                                localStorage.setItem('popup' + plugin.settings.contentID + '_clickCount', '0');
                            } else if (localStorage.getItem('popup' + plugin.settings.contentID + '_clickCount') !== null) {
                                var clickCount = parseInt(localStorage.getItem('popup' + plugin.settings.contentID + '_clickCount'));
                                localStorage.setItem('popup' + plugin.settings.contentID + '_clickCount', clickCount + 1);
                            }
                            if (localStorage.getItem('popup' + plugin.settings.contentID + '_clickCount') > parseInt(plugin.settings.showOnClick)) {
                                plugin.show();
                            }
                        }
                    }
                    //showOnMinutes
                    if (plugin.settings.booleanOnMinutes) {
                        if (localStorage) {
                            // LocalStorage is supported!
                            var d = new Date();
                            if (indexOf(plugin.settings.pagesList, plugin.settings.currentUrl) > 0 &&
                                localStorage.getItem('popup' + plugin.settings.contentID + '_minuteCount') === null) {
                                localStorage.setItem('popup' + plugin.settings.contentID + '_minuteCount', d);
                            }
                            var dd = new Date(localStorage.getItem('popup' + plugin.settings.contentID + '_minuteCount'));
                            if (localStorage.getItem('popup' + plugin.settings.contentID + '_minuteCount') !== null &&
                                ((d - dd) / 1000 / 60) > parseInt(plugin.settings.showOnMinutes)) {
                                plugin.show();
                            }
                        }
                    }
                } else {
                    //show popup in the opening
                    plugin.show();
                }
            }

        }

        plugin.show = function() {
            //console.log('Show OECD popup');
            plugin.settings.container.append($(plugin.settings.template));

            //Change color 
            if (plugin.settings.primarybgcolor.length > 0) {
                $('.primarybgcolor').css('background-color', plugin.settings.primarybgcolor);
                $('.primarybordercolor').css('border-color', plugin.settings.primarybgcolor);
            }
            if (plugin.settings.secondrybgcolor.length > 0) {
                $('.secondrybgcolor').css('background-color', plugin.settings.secondrybgcolor);
            }
            if (plugin.settings.primarytextcolor.length > 0) {
                $('.primarytextcolor').css('color', plugin.settings.primarytextcolor);
            }
            if (plugin.settings.secondrytextcolor.length > 0) {
                $('.secondrytextcolor').css('color', plugin.settings.secondrytextcolor);
            }

            //Show Popup 
            $('#' + plugin.settings.popupID).modal('show');

            $('#' + plugin.settings.popupID).find('.maybeLater').click(function() {
                $('#' + plugin.settings.popupID).modal('hide');
            });

            $('#' + plugin.settings.popupID).on('hide.bs.modal', function() {
                setCookie(plugin.settings.session, plugin.settings.session, 1);
            });

            $('#' + plugin.settings.popupID).find('.thanksClose').click(function() {
                setCookie(plugin.settings.cookie, plugin.settings.cookie, 30);
                $('#' + plugin.settings.popupID).modal('hide');
            });
        }

        //find element
        function indexOf(theArray, value) {
            if (theArray.length < 1)
                return -1;
            for (var i = 0; i < theArray.length; i++) {
                if (value == theArray[i])
                    return i;
            }
            return -1;
        }

        //setCookie
        function setCookie(cname, cvalue, exdays) {
            var d = new Date();
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            var expires = "expires=" + d.toUTCString();
            document.cookie = cname + "=" + escape(cvalue) + ((expires == null) ? "" : "; " + expires) + (";path=/");
        }

        //getCookie
        function getCookie(cname) {
            var name = cname + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') c = c.substring(1);
                if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
            }
            return "";
        }

        //checkCookie
        function checkCookie(c_name) {
            cookie_value = getCookie(c_name);
            if (cookie_value == "") {
                $('#popup-modal').modal('show');
            }
        }

        //deleteCookie
        function deleteCookie(c_name) {
            document.cookie = c_name + '=; expires=Thu, 01-Jan-70 00:00:01 GMT;';
        }

        //get link
        var getLocation = function(href) {
            var l = document.createElement("a");
            l.href = href;
            return l;
        };

        plugin.init();
        return this;
    }
});

//config of data//
