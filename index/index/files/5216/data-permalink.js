$( '[data-permalink]' ).click( function() {
	
	var link = $( this ).data( 'permalink' );
	if ( link.length ) {
		window.location.href = link;
	}
	
} ).css( 'cursor', 'pointer' );