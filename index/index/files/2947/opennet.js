jQuery(document).ready(function(){
	if(document.location.href.match(/\/blog\//i)){
		jQuery('#nav li.last').addClass('active');
	}
	if(document.location.href.match(/\/news\/.+/i)){
		var news_source_link = jQuery('.field-field-news-source a:first').attr('href');
		var title_node = jQuery('#content h1:first');
		var title = jQuery(title_node).html();
		jQuery(title_node).replaceWith('<h1><a href="' + news_source_link + '" target="_blank">' + title + '</a></h1>');
		jQuery('.field-field-teaser .field-label-inline-first').html('&nbsp;');
	}
});
