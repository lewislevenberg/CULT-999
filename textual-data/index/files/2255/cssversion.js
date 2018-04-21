
var currentURL = document.location.href;
var isPrint = currentURL.indexOf("_print");
if (isPrint == -1)	// graphic version
{
	if (document.layers) {
		document.write('<link rel="stylesheet" type="text/css" href="/res/templates/wsis/css/wsis-ns.css">');
	} else if (document.getElementById) {
		
		if (navigator.appName == "Netscape") {
			document.write('<link rel="stylesheet" type="text/css" href="/res/templates/wsis/css/wsis-ns6.css">');
	 	} else {
			document.write('<link rel="stylesheet" type="text/css" href="/res/templates/wsis/css/wsis.css">');
		}
		
	} else {
		document.write('<link rel="stylesheet" type="text/css" href="/res/templates/wsis/css/wsis.css">');
	}
} else {	// text only version
	document.write('<link rel="stylesheet" type="text/css" href="/res/templates/wsis/css/wsis-text.css">');
}

//ICT Success Story Variable
var ict_ss = "7"

function footMenu(zLang)
{
	var ituExt = "";
	var wsisBasic = "";
	var wsisGeneva = "";
	var wsisTunis = "";
	var wsisObserver = "";
	var wsisDoc = "";
	var wsisNews = "";
	var wsisBackground = "";
	var wsisLinks = "";
	var wsisFunding = "";
	var wsisSites = "";

	if (zLang == "en") {
		wsisBasic = "basic information";
		wsisGeneva = "first phase: Geneva";
		wsisTunis = "second phase: Tunis";
		wsisObserver = "information for observers";
		wsisDoc = "documents";
		wsisNews = "newsroom";
		wsisBackground = "background material";
		wsisLinks = "links";
		wsisFunding = "funding of WSIS";
		wsisSites = "WSIS related websites";
	} else if (zLang == "fr") {
		ituExt = "-fr";
		wsisBasic = "information de base";
		wsisGeneva = "première phase: Genève";
		wsisTunis = "deuxième phase: Tunis";
		wsisObserver = "informations pour les observateurs";
		wsisDoc = "documents";
		wsisNews = "salle de presse";
		wsisBackground = "informations de référence";
		wsisLinks = "liens";
		wsisFunding = "financement du SMSI";
		wsisSites = "sites relatifs au SMSI";
	} else if (zLang == "es") {
		ituExt = "-es";
		wsisBasic = "información básica";
		wsisGeneva = "primera fase: Ginebra";
		wsisTunis = "segunda fase: Túnez";
		wsisObserver = "información para los observadores";
		wsisDoc = "documentos";
		wsisNews = "sala de prensa";
		wsisBackground = "material de referencia";
		wsisLinks = "enlaces";
		wsisFunding = "financiación de la CMSI";
		wsisSites = "sitios web relacionados";
	}

	document.write('<p style="margin:0px 5px 5px 5px;" align="center">');
	document.write('<a href="/wsis/basic/index'+ituExt+'.html" class="fp_a">'+wsisBasic+'</a> | ');
	document.write('<a href="/wsis/index-p1'+ituExt+'.html" class="fp_a"> '+wsisGeneva+'</a> | ');
	document.write('<a href="/wsis/index-p2'+ituExt+'.html" class="fp_a"> '+wsisTunis+'</a> |');
	document.write('<a href="/wsis/observers/index'+ituExt+'.html" class="fp_a">'+wsisTunis+'</a> | ');
	document.write('<a href="/wsis/documents/index.asp?lang='+zLang+'" class="fp_a">'+wsisDoc+'</a> | ');
	document.write('<a href="/wsis/newsroom/index'+ituExt+'.html" class="fp_a">'+wsisNews+'</a> | ');
	document.write('<a href="/wsis/background/index'+ituExt+'.html" class="fp_a">'+wsisBackground+'</a> | ');
	document.write('<a href="/wsis/links/index'+ituExt+'.html" class="fp_a">'+wsisLinks+'</a> | ');
	document.write('<a href="/wsis/funding/index'+ituExt+'.html" class="fp_a">'+wsisLinks+'</a> | ');
	document.write('<a href="/wsis/sites/index'+ituExt+'.html" class="fp_a">'+wsisSites+'</a></p>');
}

function checkSearchKeyword()
{
var msgIllegalChar, msgBlank, zLang;
zLang = QForm.pagelanguage.value;

if (zLang == "en"){
	msgIllegalChar = "Keyword cannot contain '(apostrophe).";
	msgBlank = "Please provide a keyword.";
} else if (zLang == "fr") {
	msgIllegalChar = "Keyword cannot contain '(apostrophe).";
	msgBlank = "Veuillez fournir un mot-clé.";
} else if (zLang == "es") {
	msgIllegalChar = "Keyword cannot contain '(apostrophe).";
	msgBlank = "Please provide a keyword.";
} else { }

if (document.QForm.SearchString.value == "")
	{ alert(msgBlank);
	document.QForm.SearchString.focus();
	document.QForm.SearchString.select();
	return false 
	}

if (document.QForm.SearchString.value.indexOf("'") >= 0)
	{ alert(msgIllegalChar);
	document.QForm.SearchString.focus();
	document.QForm.SearchString.select();
	return false 
	}

return true
}

//gets a random picture from the corresponding continent array

function getPicture(nameOfContinent){
var Arr_africa=new Array
var Arr_asia=new Array
var Arr_america=new Array
var Arr_europe=new Array
var Arr_oceania=new Array
var Arr_tech=new Array

Arr_africa[0]="bj"; Arr_africa[1]="eg"; Arr_africa[2]="gh"; Arr_africa[3]="gn"; Arr_africa[4]="ke"; Arr_africa[5]="ml";
Arr_asia[0]="israel"; Arr_asia[1]="japan"; Arr_asia[2]="laos"; Arr_asia[3]="oman"; Arr_asia[4]="philippines"; Arr_asia[5]="azerbaijan";
Arr_america[0]="cuba"; Arr_america[1]="argentina"; Arr_america[2]="usa"; Arr_america[3]="canada"; Arr_america[4]="chile";
Arr_europe[0]="finland"; Arr_europe[1]="italy"; Arr_europe[2]="malta"; Arr_europe[3]="romania"; Arr_europe[4]="thenetherlands";
Arr_oceania[0]="australia"; Arr_oceania[1]="frenchpolynesia";
Arr_tech[0]="technical0"; Arr_tech[1]="technical1"; Arr_tech[2]="technical2"; Arr_tech[3]="technical3"; Arr_tech[4]="technical4";Arr_tech[5]="technical5";Arr_tech[6]="technical6";Arr_tech[7]="technical7";Arr_tech[8]="technical8";Arr_tech[9]="technical9";

if(nameOfContinent!="tech"){
var x=Math.round(Math.random()*(parseInt(eval('Arr_' + nameOfContinent + '.length'))-1));	
var picturePath= "/wsis/images/countries/" + nameOfContinent + "/" + eval('Arr_' + nameOfContinent + '[' + x + ']') + ".jpg";
document.countries.src=picturePath;
}else{
var x=Math.round(Math.random()*(parseInt(eval('Arr_' + nameOfContinent + '.length'))-1));	
var picturePath= "/wsis/images/technical/" + eval('Arr_' + nameOfContinent + '[' + x + ']') + "_mini.jpg";
document.technical.src=picturePath;
}	
}

//gets a random picture from the corresponding continent array
function techPicture() {

var Arr_tech=new Array
Arr_tech[0]="technical0"; Arr_tech[1]="technical1"; Arr_tech[2]="technical2"; Arr_tech[3]="technical3"; Arr_tech[4]="technical4";Arr_tech[5]="technical5";Arr_tech[6]="technical6";Arr_tech[7]="technical7";Arr_tech[8]="technical8";Arr_tech[9]="technical9";
var x=Math.round(Math.random()*(parseInt(eval('Arr_tech.length'))-1));	
var picturePath= "/wsis/images/technical/" + eval('Arr_tech[' + x + ']') + "_mini.jpg";
window.onerror = handleError; // included to get around pages without technical image
document.technical.src=picturePath;
}

function CtryImage(lang) 
{
var thisLocation = location.href;
var nameOfContinent = "";
var ss_text = "WSIS Poster Competition";

if(lang=="es") {
	ss_text = "CMSI - Consurso de Carteles";
}else if (lang=="fr") {
	ss_text = "SMSI - concours d'affiches";
}

if(thisLocation.indexOf("/basic/") >= 0) {
	colorOfContinent = "#666666";
	newborder = "#999999";	
}
else if(thisLocation.indexOf("/preparatory/") >= 0) {
	colorOfContinent = "#FF9900";
	newborder = "#CC6600";	
}
else if(thisLocation.indexOf("/themes/") >= 0) {
	colorOfContinent = "#CCCC33";
	newborder = "#666600";	
}
else if(thisLocation.indexOf("/documents/") >= 0) {
	colorOfContinent = "#6699CC";
	newborder = "#006699";
}
else if(thisLocation.indexOf("/newsroom/") >= 0) {
	colorOfContinent = "#993399";
	newborder = "#660066";
}
else if(thisLocation.indexOf("/newsletter/") >= 0) {
	colorOfContinent = "#666666"
	newborder = "#999999";	
}
else if(thisLocation.indexOf("/events/") >= 0) {
	colorOfContinent = "#FF9900";
	newborder = "#CC6600";	
}
else if(thisLocation.indexOf("/links/") >= 0) {
	colorOfContinent = "#CCCC33";
	newborder = "#666600";	
}
else if(thisLocation.indexOf("/practical/") >= 0) {
	colorOfContinent = "#6699CC";
	newborder = "#006699";	
}
else if(thisLocation.indexOf("/map/") >= 0) {
	colorOfContinent = "#993399";
	newborder = "#660066";	
}
else if(thisLocation.indexOf("/contact/") >= 0) {
	colorOfContinent = "#666666";
	newborder = "#999999";	
}
else {
	if(nameOfContinent == "africa") {
		colorOfContinent = "#FF9900";
		newborder = "#CC6600";
	}		
	else if(nameOfContinent == "america") {
		colorOfContinent = "#6699CC";
		newborder = "#006699";
	}	
	else if(nameOfContinent == "asia") {
		colorOfContinent = "#6699CC";
		newborder = "#006699";
	}
	else if(nameOfContinent == "europe") {
		colorOfContinent = "#993399";
		newborder = "#660066";
	}
	else if(nameOfContinent == "oceania") {
		colorOfContinent = "#666666";
		newborder = "#999999";
	}
	else { 
		colorOfContinent = "#993399";
		newborder = "#660066";
	}
}

var strLen = ict_ss.length
var tempSS = ict_ss

if(strLen < 4) {
	for (var loop = strLen; loop < 4; loop++) {
		tempSS = "0" + tempSS;
	}
}	

var picturePath= "/wsis/ecard/images/" + tempSS + "_select.jpg";

document.writeln('<table border="0" cellpadding="2" cellspacing="2">');
document.writeln('<tr><td style="padding-left: 10px">');
document.writeln('<table border="0" cellpadding="0" cellspacing="0">');
document.writeln('<tr><td><a href="/wsis/ecard/index.asp?lang='+ lang +'">');
//document.writeln('<br><img src="'+picturePath+'" border="0" width="180" height="117"></a></td></tr>');
//document.writeln('<tr><td align="center" bgcolor="'+colorOfContinent+'" style="font-size:8pt; color: white; font-weight: bold;" height="20"><nobr>'+ss_text+'</nobr></td></tr>');
document.writeln('</table>');
document.writeln('</td></tr>');
document.writeln('</table>');

}	

function GetCtryName(code, lang) {
	
var xName = "Country Image";

if(code=="ar") {
	if(lang=="en") { xName = "Argentina";}
	if(lang=="fr") { xName = "Argentine";}
	if(lang=="es") { xName = "Argentina";}
}

else if(code=="an") {
	if(lang=="en") { xName = "Netherlands Antilles";}
	if(lang=="fr") { xName = "Antilles néerlandaises";}
	if(lang=="es") { xName = "Antillas neerlandesas";}
}

else if(code=="au") {
	if(lang=="en") { xName = "Australia";}
	if(lang=="fr") { xName = "Australie";}
	if(lang=="es") { xName = "Australia";}
}
else if(code=="az") {
	if(lang=="en") { xName = "Azerbaijan";}
	if(lang=="fr") { xName = "Azerbaïdjan";}
	if(lang=="es") { xName = "Azerbaiyán";}
}
else if(code=="bj") {
	if(lang=="en") { xName = "Benin";}
	if(lang=="fr") { xName = "Bénin";}
	if(lang=="es") { xName = "Benin";}
}

else if(code=="bn") {
	if(lang=="en") { xName = "Brunei Darussalam";}
	if(lang=="fr") { xName = "Brunéi Darussalam";}
	if(lang=="es") { xName = "Brunei Darussalam";}
}

else if(code=="br") {
	if(lang=="en") { xName = "Brazil";}
	if(lang=="fr") { xName = "Brésil";}
	if(lang=="es") { xName = "Brasil";}
}
else if(code=="ca") {
	if(lang=="en") { xName = "Canada";}
	if(lang=="fr") { xName = "Canada";}
	if(lang=="es") { xName = "Canadá";}
}

else if(code=="cl") {
	if(lang=="en") { xName = "Chile";}
	if(lang=="fr") { xName = "Chili";}
	if(lang=="es") { xName = "Chile";}
}

else if(code=="cn") {
	if(lang=="en") { xName = "China";}
	if(lang=="fr") { xName = "Chine";}
	if(lang=="es") { xName = "China";}
}

else if(code=="cu") {
	if(lang=="en") { xName = "Cuba";}
	if(lang=="fr") { xName = "Cuba";}
	if(lang=="es") { xName = "Cuba";}
}

else if(code=="de") {
	if(lang=="en") { xName = "Germany";}
	if(lang=="fr") { xName = "Allemagne";}
	if(lang=="es") { xName = "Alemania";}
}

else if(code=="eg") {
	if(lang=="en") { xName = "Egypt";}
	if(lang=="fr") { xName = "Egypte";}
	if(lang=="es") { xName = "Egipto";}
}

else if(code=="es") {
	if(lang=="en") { xName = "Spain";}
	if(lang=="fr") { xName = "Espagne";}
	if(lang=="es") { xName = "España";}
}

else if(code=="fi") {
	if(lang=="en") { xName = "Finland";}
	if(lang=="fr") { xName = "Finlande";}
	if(lang=="es") { xName = "Finlandia";}
}

else if(code=="gh") {
	if(lang=="en") { xName = "Ghana";}
	if(lang=="fr") { xName = "Ghana";}
	if(lang=="es") { xName = "Ghana";}
}

else if(code=="gn") {
	if(lang=="en") { xName = "Guinea-Bissau";}
	if(lang=="fr") { xName = "Guinée-Bissau";}
	if(lang=="es") { xName = "Guinea-Bissau";}
}

else if(code=="il") {
	if(lang=="en") { xName = "Israel";}
	if(lang=="fr") { xName = "Israël";}
	if(lang=="es") { xName = "Israel";}
}

else if(code=="it") {
	if(lang=="en") { xName = "Italy";}
	if(lang=="fr") { xName = "Italie";}
	if(lang=="es") { xName = "Italia";}
}

else if(code=="jo") {
	if(lang=="en") { xName = "Jordan";}
	if(lang=="fr") { xName = "Jordanie";}
	if(lang=="es") { xName = "Jordania";}
}

else if(code=="jp") {
	if(lang=="en") { xName = "Japan";}
	if(lang=="fr") { xName = "Japon";}
	if(lang=="es") { xName = "Japón";}
}

else if(code=="ke") {
	if(lang=="en") { xName = "Kenya";}
	if(lang=="fr") { xName = "Kenya";}
	if(lang=="es") { xName = "Kenya";}
}

else if(code=="la") {
	if(lang=="en") { xName = "Lao P.D.R.";}
	if(lang=="fr") { xName = "Lao R.D.P.";}
	if(lang=="es") { xName = "Lao R.D.P.";}
}

else if(code=="li") {
	if(lang=="en") { xName = "Liechtenstein";}
	if(lang=="fr") { xName = "Liechtenstein";}
	if(lang=="es") { xName = "Liechtenstein";}
}

else if(code=="lt") {
	if(lang=="en") { xName = "Lithuania";}
	if(lang=="fr") { xName = "Lituanie";}
	if(lang=="es") { xName = "Lituania";}
}

else if(code=="mc") {
	if(lang=="en") { xName = "Monaco";}
	if(lang=="fr") { xName = "Monaco";}
	if(lang=="es") { xName = "Mónaco";}
}

else if(code=="ml") {
	if(lang=="en") { xName = "Mali";}
	if(lang=="fr") { xName = "Mali";}
	if(lang=="es") { xName = "Malí";}
}

else if(code=="mt") {
	if(lang=="en") { xName = "Malta";}
	if(lang=="fr") { xName = "Malte";}
	if(lang=="es") { xName = "Malta";}
}

else if(code=="ni") {
	if(lang=="en") { xName = "Nicaragua";}
	if(lang=="fr") { xName = "Nicaragua";}
	if(lang=="es") { xName = "Nicaragua";}
}

else if(code=="nl") {
	if(lang=="en") { xName = "Netherlands";}
	if(lang=="fr") { xName = "Pays-Bas";}
	if(lang=="es") { xName = "Países Bajos";}
}

else if(code=="no") {
	if(lang=="en") { xName = "Norway";}
	if(lang=="fr") { xName = "Norvège";}
	if(lang=="es") { xName = "Noruega";}
}

else if(code=="om") {
	if(lang=="en") { xName = "Oman";}
	if(lang=="fr") { xName = "Oman";}
	if(lang=="es") { xName = "Omán";}
}

else if(code=="pl") {
	if(lang=="en") { xName = "Poland";}
	if(lang=="fr") { xName = "Pologne";}
	if(lang=="es") { xName = "Polonia";}
}

else if(code=="pt") {
	if(lang=="en") { xName = "Portugal";}
	if(lang=="fr") { xName = "Portugal";}
	if(lang=="es") { xName = "Portugal";}
}

else if(code=="py") {
	if(lang=="en") { xName = "Paraguay";}
	if(lang=="fr") { xName = "Paraguay";}
	if(lang=="es") { xName = "Paraguay";}
}

else if(code=="pf") {
	if(lang=="en") { xName = "French Polynesia";}
	if(lang=="fr") { xName = "Polynésie française";}
	if(lang=="es") { xName = "Polinesia francesa";}
}

else if(code=="ph") {
	if(lang=="en") { xName = "Philippines";}
	if(lang=="fr") { xName = "Philippines";}
	if(lang=="es") { xName = "Filipinas";}
}

else if(code=="ro") {
	if(lang=="en") { xName = "Romania";}
	if(lang=="fr") { xName = "Roumanie";}
	if(lang=="es") { xName = "Rumania";}
}

else if(code=="se") {
	if(lang=="en") { xName = "Sweden";}
	if(lang=="fr") { xName = "Suède";}
	if(lang=="es") { xName = "Suecia";}
}

else if(code=="sg") {
	if(lang=="en") { xName = "Singapore";}
	if(lang=="fr") { xName = "Singapour";}
	if(lang=="es") { xName = "Singapur";}
}

else if(code=="sl") {
	if(lang=="en") { xName = "Sierra Leone";}
	if(lang=="fr") { xName = "Sierra Leone";}
	if(lang=="es") { xName = "Sierra Leona";}
}

else if(code=="sy") {
	if(lang=="en") { xName = "Syria";}
	if(lang=="fr") { xName = "Syrie";}
	if(lang=="es") { xName = "Siria";}
}

else if(code=="tr") {
	if(lang=="en") { xName = "Turkey";}
	if(lang=="fr") { xName = "Turquie";}
	if(lang=="es") { xName = "Turquía";}
}

else if(code=="tt") {
	if(lang=="en") { xName = "Trinidad and Tobago";}
	if(lang=="fr") { xName = "Trinité-et-Tobago";}
	if(lang=="es") { xName = "Trinidad y Tobago";}
}

else if(code=="uk") {
	if(lang=="en") { xName = "United Kingdom";}
	if(lang=="fr") { xName = "Royaume-Uni";}
	if(lang=="es") { xName = "Reino Unido";}
}

else if(code=="vn") {
	if(lang=="en") { xName = "Viet Nam";}
	if(lang=="fr") { xName = "Viet Nam";}
	if(lang=="es") { xName = "Viet Nam";}
}

else if(code=="us") {
	if(lang=="en") { xName = "United States";}
	if(lang=="fr") { xName = "Etats-Unis";}
	if(lang=="es") { xName = "Estados Unidos";}
}
else {
	xName = "Not Found";
}
return xName;

}
		

function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}

var myimages=new Array()
function preloadimages(){
for (i=0;i<preloadimages.arguments.length;i++){
myimages[i]=new Image()
myimages[i].src=preloadimages.arguments[i]
}
}

preloadimages('/res/templates/wsis/images/666666.gif','/res/templates/wsis/images/6699CC.gif','/res/templates/wsis/images/FF9900.gif','/res/templates/wsis/images/CCCC33.gif','/res/templates/wsis/images/993399.gif');

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

function MM_showHideLayers() { //v3.0
  var i,p,v,obj,args=MM_showHideLayers.arguments;
  for (i=0; i<(args.length-2); i+=3) if ((obj=MM_findObj(args[i]))!=null) { v=args[i+2];
    if (obj.style) { obj=obj.style; v=(v=='show')?'visible':(v='hide')?'hidden':v; }
    obj.visibility=v; }
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function printpage()
{
var currentURL = document.location.href;
var lastpos= currentURL.length;
var startswhere = currentURL.lastIndexOf("/");

// check to make sure that there is a file at the end of the URL
if(startswhere+1 == lastpos) {
	currentURL = document.location.href + "index.html"
}
	lastpos= currentURL.length;
	startswhere = currentURL.lastIndexOf(".");

var ext_type, filename, tempFile;

// identify the file extension type
if(startswhere > 0) {
	ext_type = currentURL.substring((startswhere+1),lastpos);
} else {
	ext_type = "html"	
}

startswhere = currentURL.lastIndexOf("/")+1;

if(lastpos == startswhere) {
	filename = "index.html";	
} else {
	filename = currentURL.substring(startswhere,lastpos);
}	
lastpos = filename.lastIndexOf(".");

tempFile = filename.substring(0,lastpos);
	
var langVer = "";
var langpos;
if(tempFile.indexOf("-es") >= 0) { // Check language versions
	langVer = "-es";
	tempFile = filename.substring(0,(lastpos-3));	
} else if(tempFile.indexOf("-fr") >= 0) {
	langVer = "-fr";
	tempFile = filename.substring(0,(lastpos-3));	
}

tempFile = tempFile + langVer + "_print" +"." + ext_type;

location = tempFile;
}

function handleError() {
	return true;
}


