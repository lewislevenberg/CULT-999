/*google scripts*/
var cx = '012432601748511391518:xzeadub0b0a';
var gcse = document.createElement('script');
gcse.type = 'text/javascript';
gcse.async = true;
gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') +
            '//www.google.com/cse/cse.js?cx=' + cx;
var s = document.getElementsByTagName('script')[0];
s.parentNode.insertBefore(gcse, s);
/*google scripts*/

var googleSearch = true;
var rootsearchURL =  '/general/searchresults/';

function doSearch(form) {
	if ( googleSearch ) 
		doGoogleSearch(form);
	else 
		doExaleadSearch(level2ID, level3ID, level3N, form);
        
    return false;
}

function doGoogleSearch(form) {
  	if ( !form )
          return false;
         
  	var term = $(form).find('#search-input').val();
	
	if ( !term || term=='' )
          return false;
  	
  	var searchSection = rootsearchURL;
  	
  	var sep = ( searchSection.indexOf('?') != -1 )?'&':'?';
  	searchSection = searchSection + sep + 'q=' + term + '&cx=012432601748511391518:xzeadub0b0a&cof=FORID:11&ie=UTF-8';
    window.location.href = searchSection;
    
    // return false;
}

function doExaleadSearch(level2ID, level3ID, level3N, form) {
	//console.log('Exalead!');
}

function getTerm() {
  var url = document.location.href;
  var idx1 = url.indexOf('q=');
  if ( idx1 > 0 ) {
  	var idx2 = url.indexOf('&', idx1);
  	var term = url.substring(idx1+2, idx2);
    	return decodeURIComponent(term);
  }
  return '';
}


/* Autocomplete*/
var showResults = function(data) {
    var arr = $.map(data[1], function(item) {
        return {
            value: item[0]
        };
    });
    console.log(arr);
    return arr;
};

var results = new Bloodhound({
    datumTokenizer: function(data) {
        return Bloodhound.tokenizers.whitespace(data.value);
    },
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    remote: {
        url: "http://clients1.google.com/complete/search?client=partner&hl=en&sugexp=gsnos%2Cn%3D13&gs_rn=25&gs_ri=partner&partnerid=012432601748511391518:xzeadub0b0a&types=t&ds=cse&cp=3&gs_id=15&q=%QUERY",
        ajax: {
            type: 'GET',
            dataType: 'jsonp'
        },
        filter: showResults
    }
});

results.initialize();

$('#search-form-lg #search-input').typeahead(null, {
    name: 'results',
    displayKey: function(results) {
        return results.value;
    },
    source: results.ttAdapter()
});

$('#search-form-xs #search-input').typeahead(null, {
    name: 'results',
    displayKey: function(results) {
        return results.value;
    },
    source: results.ttAdapter()
});