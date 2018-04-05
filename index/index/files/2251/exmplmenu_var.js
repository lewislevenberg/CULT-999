/***********************************************************************************
*	(c) Ger Versluis 2000 version 5.411 24 December 2001 (updated Jan 31st, 2003 by Dynamic Drive for Opera7)
*	For info write to menus@burmees.nl		          *
*	You may remove all comments for faster loading	          *		
***********************************************************************************/

	var NoOffFirstLineMenus=9;		// Number of first level items
	var LowBgColor='#EEEEEE';		// Background color when mouse is not over
	var LowSubBgColor='#EEEEEE';		// Background color when mouse is not over on subs
	var HighBgColor='#FFFFFF';		// Background color when mouse is over
	var HighSubBgColor='#FFFFFF';		// Background color when mouse is over on subs
	var FontLowColor='#000000';		// Font color when mouse is not over
	var FontSubLowColor='#000000';		// Font color subs when mouse is not over
	var FontHighColor='#6699FF';		// Font color when mouse is over
	var FontSubHighColor='#6699FF';		// Font color subs when mouse is over
	var BorderColor='#39B54A';		// Border color
	var BorderSubColor='#39B54A';		// Border color for subs
	var BorderWidth=0;			// Border width
	var BorderSubWidth=1;			// Border width for subs
	var BorderBtwnElmnts=0;			// Border between elements 1 or 0
	var FontFamily="Verdana, Arial, Helvetica, sans-serif";		// Font family menu items
	var FontSize=7;				// Font size menu items
	var FontBold=1;				// Bold menu items 1 or 0
	var FontItalic=0;			// Italic menu items 1 or 0
	var MenuTextCentered='left';		// Item text position 'left', 'center' or 'right'
	var MenuCentered='left';		// Menu horizontal position 'left', 'center' or 'right'
	var MenuVerticalCentered='top';		// Menu vertical position 'top', 'middle','bottom' or static
	var ChildOverlap=0;			// horizontal overlap child/ parent .2
	var ChildVerticalOverlap=0;		// vertical overlap child/ parent .2
	var StartTop=1;				// Menu offset x coordinate
	var StartLeft=0;			// Menu offset y coordinate
	var VerCorrect=0;			// Multiple frames y correction
	var HorCorrect=0;			// Multiple frames x correction
	var LeftPaddng=5;			// Left padding
	var TopPaddng=2;			// Top padding
	var FirstLineHorizontal=0;		// SET TO 1 FOR HORIZONTAL MENU, 0 FOR VERTICAL
	var MenuFramesVertical=1;		// Frames in cols or rows 1 or 0
	var DissapearDelay=1000;		// delay before menu folds in
	var TakeOverBgColor=1;			// Menu frame takes over background color subitem frame
	var FirstLineFrame='';			// Frame where first level appears
	var SecLineFrame='';			// Frame where sub levels appear
	var DocTargetFrame='';			// Frame where target documents appear
	var TargetLoc='ictmenu';		// span id for relative positioning
	var HideTop=0;				// Hide first level when loading new document 1 or 0
	var MenuWrap=1;				// enables/ disables menu wrap 1 or 0
	var RightToLeft=0;			// enables/ disables right to left unfold 1 or 0
	var UnfoldsOnClick=0;			// Level 1 unfolds onclick/ onmouseover
	var WebMasterCheck=0;			// menu tree checking on or off 1 or 0
	var ShowArrow=1;			// Uses arrow gifs when 1
	var KeepHilite=1;			// Keep selected path highligthed
	var Arrws=['/scripts/tri.gif',5,10,'/scripts/tridown.gif',10,5,'/scripts/trileft.gif',5,10];	// Arrow source, width and height

function BeforeStart(){return}
function AfterBuild(){return}
function BeforeFirstOpen(){return}
function AfterCloseAll(){return}


// Menu tree
//	MenuX=new Array(Text to show, Link, background image (optional), number of sub elements, height, width);
//	For rollover images set "Text to show" to:  "rollover:Image1.jpg:Image2.jpg"

Menu1=new Array("\<img src=\"\/images\/bolinhaazul.gif\"\> Welcome","/welcome/","",0,30,120);

Menu2=new Array("\<img src=\"\/images\/bolinhaazul.gif\"\> About","/about/","",4);
	Menu2_1=new Array("Panel of Advisors","/advisors/","",0,20,150);	
	Menu2_2=new Array("Plan of Action","/about/planofaction.html","",0);
	Menu2_3=new Array("List of Members","/panel/","",0);
	Menu2_4=new Array("Documents","/stakeholders/documents.html","",0);

Menu3=new Array("\<img src=\"\/images\/bolinhaazul.gif\"\> Collaborative Links","/stakeholders/","",6);
	Menu3_1=new Array("Partner Organizations","/stakeholders/partnerships.html","",0,30,150);
	Menu3_2=new Array("Internet Governance","/perl/showdoc.pl?area=igov","",0);
        Menu3_3=new Array("Digital Diaspora Networks","/stakeholders/ddn.html","",3);
		Menu3_3_1=new Array("Africa","http://www.ddn-africa.org/","",0,20,80);
		Menu3_3_2=new Array("Caribbean","/ddnc/","",0);
		Menu3_3_3=new Array("Latin America","/ddnla/","",0);
	Menu3_4=new Array("Links","/stakeholders/links.html","",0);
	Menu3_5=new Array("Matchmaking","/stakeholders/matchmaking.html","",0);
	Menu3_6=new Array("Events","/stakeholders/events.html","",0);

Menu4=new Array("\<img src=\"\/images\/bolinhaazul.gif\"\> Global Database","/globaldatabase/","",0);

Menu5=new Array("\<img src=\"\/images\/bolinhaazul.gif\"\> Working Groups","/groups/","",4);
	Menu5_1=new Array("ICT Policy and Governance","/perl/showdoc.pl?area=wg1","",0,30,210);
	Menu5_2=new Array("Enabling Environment","/perl/showdoc.pl?area=enab","",0);
	Menu5_3=new Array("Human Resource Development and Capacity Building","/perl/showdoc.pl?area=wg3","",0);
	Menu5_4=new Array("ICT Indicators and MDG Mapping","/perl/showdoc.pl?area=mdgm","",0);

Menu6=new Array("\<img src=\"\/images\/bolinhaazul.gif\"\> Regional Networks","/regional/","",5);
	Menu6_1=new Array("Africa","/perl/showdoc.pl?area=rn1","",0,30,140);
	Menu6_2=new Array("Latin America and the Caribbean","/perl/showdoc.pl?area=rn2","",0);
	Menu6_3=new Array("Asia","/perl/showdoc.pl?area=rn3","",0);
	Menu6_4=new Array("Arab States","/perl/showdoc.pl?area=rn4","",0);
	Menu6_5=new Array("Europe and Central Asia","/perl/showdoc.pl?area=rn5","",0);

Menu7=new Array("\<img src=\"\/images\/bolinhaazul.gif\"\> Search","/search.html","",0);

Menu8=new Array("\<img src=\"\/images\/bolinhaazul.gif\"\> Press Center","/perl/documents.pl?type_id=4","",0);

Menu9=new Array("\<img src=\"\/images\/bolinhaazul.gif\"\> Members Only","/perl/showdoc.pl?area=mo","",0);
