function unloadPopupBox() {	// TO Unload the Popupbox
	$("#container").css('display', 'none');
	$('#popup_box').fadeOut("slow");
}	

function loadPopupBox(id) {	// To Load the Popupbox
	if ($('#ecl_email') && $('#newsLetterInput')) {
		$('#ecl_email').val($('#newsLetterInput').val());
	}	
	
	$("#loginPopupforbutton").css('display', 'none');
	$("#eclFormcode").css('display', 'none');
	
	if (id) {
		$('#' + id).css('display', '');
	}
	
	setPopupBoxPosition();
}

function setPopupBoxPosition() {	// To Load the Popupbox
	if( typeof( window.pageYOffset ) == 'number' ) {
		y = window.pageYOffset;
	} else if( document.body && ( document.body.scrollLeft || document.body.scrollTop ) ) {
		y = document.body.scrollTop;
	} else if( document.documentElement && ( document.documentElement.scrollLeft || document.documentElement.scrollTop ) ) {
		y = document.documentElement.scrollTop;
	}	
	$("#popup_box").css({
		left: ($(window).width() - $('#popup_box').width()) / 2,
		top: y
	});
	
	$("#container").css('display', 'block');
	$('#popup_box').fadeIn("slow");
	
}