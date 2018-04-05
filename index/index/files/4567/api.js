(function() {
    var apiConfig = $.extend({
        jsPath:      '/www/ecm/js/',
        rpcEndpoint: '/api/<client-prefix>/'
    }, window.apiConfig);
    
    function loadJSONRPC() {
        $.getScript(apiConfig.jsPath + 'jquery.zend.jsonrpc.js', function() {
            $(function() {
                window.API = $.extend(
                    $.Zend.jsonrpc({
                        url:   apiConfig.rpcEndpoint = apiConfig.rpcEndpoint.replace('<client-prefix>', $('#ewlSiteId').data('client')),
                        async: true
                    }), {
                        showEvent: function(id, callback) {
                            return this.event(id, function(html) {
                                $html = $(html);
                                $html.dialog({
                                    title:     'Event: ' + $html.find('.top h2').text(),
                                    modal:     true,
                                    draggable: false,
                                    resizable: false,
                                    width:     $html.find('span.forSingle').text(),
                                    close:     function() { 
                                        $(this).remove();
                                    }
                                });
                                if($('#menu-holder + .ui-dialog').length){
                                    $('#menu-holder + .ui-dialog').scrollLeft($('#menu-holder + .ui-dialog').position().left);
                                }
                                if (callback) return callback.apply(this, arguments);
                            });
                        }
                    }
                );
            });
        });
    }
    
    'JSON' in window ? loadJSONRPC() : $.getScript(apiConfig.jsPath + 'json2.js', loadJSONRPC);
})();