// * @file s5_mp3_player.js
// * @license GNU/GPL, see LICENSE.php, swf and js files are commercial and non-gpl licensed.
// * Site: www.shape5.com
// * Email: contact@shape5.com
// * @copyright (C) 2009 Shape 5


var arMP3Players = new Array();
var bMP3PlayerStarted = false;

function registerMP3Player(playerID,autostart){
	arMP3Players.push(playerID);
	if(autostart == "1" && !bMP3PlayerStarted){
		bMP3PlayerStarted = true;
		setTimeout("document.getElementById('"+playerID+"').autostart()",100);
	}
}

function stopMP3Players(playerID){
	for(i=0;i<arMP3Players.length;i++){
		if(playerID != arMP3Players[i]){
			document.getElementById(arMP3Players[i]).stopPlayer();
		}
	}
}

function resizeMP3Player(playerID, nIncrement){
	var container = document.getElementById(playerID+'_container');
	var height = container.style.height;
	container.style.height = (Number(height.substr(0,(height.length-2))) + nIncrement) + "px";
}

function s5_mp3_player_fluid() {
var s5_mp3_player_fluid_width = document.getElementsByTagName("DIV");
	for (var s5_mp3_player_fluid_width_y=0; s5_mp3_player_fluid_width_y<s5_mp3_player_fluid_width.length; s5_mp3_player_fluid_width_y++) {
		if (s5_mp3_player_fluid_width[s5_mp3_player_fluid_width_y].className == "s5_mp3_player_wrap") {
			s5_mp3_player_fluid_width[s5_mp3_player_fluid_width_y].style.display = "none";
		}
	}
	setTimeout('s5_mp3_player_fluid_block()', 1);
}
function s5_mp3_player_fluid_block() {
var s5_mp3_player_fluid_width = document.getElementsByTagName("DIV");
	for (var s5_mp3_player_fluid_width_y=0; s5_mp3_player_fluid_width_y<s5_mp3_player_fluid_width.length; s5_mp3_player_fluid_width_y++) {
		if (s5_mp3_player_fluid_width[s5_mp3_player_fluid_width_y].className == "s5_mp3_player_wrap") {
			s5_mp3_player_fluid_width[s5_mp3_player_fluid_width_y].style.display = "block";
		}
	}
}