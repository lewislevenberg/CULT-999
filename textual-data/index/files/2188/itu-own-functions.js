function setCopyRightYear(){
	var currentTime = new Date()
	var year = currentTime.getFullYear()

    var elm = document.getElementById('copyright_year');
	if (elm != null){
        elm.innerHTML = year;
	}
}
