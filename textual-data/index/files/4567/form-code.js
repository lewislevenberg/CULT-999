function receiveSize(e){  
	eOrigin = e.origin;
	var strRegExPattern = '\\b'+eOrigin+'\\b'; 
	if (originUrl.match(new RegExp(strRegExPattern,'g'))) {
		var frame = document.getElementById('adv_search_frame');
	   if (frame) {
		   var message = e.data.toString();	;
		   if (message.match(/offset/)) {
			   var parts = message.split('_');
			   var addToTop = frame.offsetParent.offsetTop + frame.offsetTop;
			   window.scrollTo(parts[1], parseInt(parts[2]) + addToTop);
		   } else {
			   frame.style.height = e.data + 'px';
		   }
		   
       }
	}
}  
  
if (window.addEventListener){  
	window.addEventListener("message", receiveSize,false);  
} else {  
	window.attachEvent("onmessage", receiveSize);
} 