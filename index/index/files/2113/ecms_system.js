/*
	*	File:		ecms_system.js
	*	Name:		Expandable/Collapsible Menu System
	*	Date:		2001-10-06

	*	Author:		Ben Boyle
	*	Email:		bboyle@inspire.server101.com

	*	Platform:	all javascript browsers
	*	Namespace:	all variables and functions prefixed with "ECMS_"

	System functions (cross-platform) shared by menu system.
	Dynamically loads correct platform library (IE, Netscape, default) to handle menu.
	All configuration handled through ECMS_config.js and CSS classes.

*/

// LOADER - loads browser specific version
if (document.getElementById) {
	// standard - Netscape6, IE 4/5
	document.writeln('<script language="Javascript" type="text\/javascript" src="' + templatePathPrefix  + 'scripts/ecms_system_id.js"><\/script>');
} else if (document.layers) {

	// layers (Netscape 4, 3)
	document.writeln('<script language="Javascript" type="text\/javascript" src="' + templatePathPrefix  + 'scripts/ecms_system_layer.js"><\/script>');
} else {

	// default - uses UL/LI display
	document.writeln('<script language="Javascript" type="text\/javascript" src="' + templatePathPrefix  + 'scripts/ecms_system_default.js"><\/script>');
}


/*
 ECMS_config.js variables
 - The following variables can all be user-defined in ECMS_config.js
*/

// expand/collapse images
var ECMS_image_bullet = new Image();
var ECMS_image_collapsed = new Image();
var ECMS_image_expanded = new Image();

// CSS classes
var ECMS_class_bullet = 'bullet';
var ECMS_class_collapsed = 'collapsed';
var ECMS_class_expanded = 'expanded';

// menu indent level
var ECMS_menu_indent = 0;

// menu height level (used by netscape to ensure expandable space)
var ECMS_menu_height = 0;

// display title (or name) in status bar
var ECMS_status_display = false;

// repeat links with images/text
var ECMS_repeat_links = false;

// automatically expand (onfocus, onmouseover)
var ECMS_auto_expand = false;
var ECMS_auto_expand_delay = 0;

// collapse other menu trees when expanding
var ECMS_collapse_on_expand = '';

/*
 end ECMS_config.js variables
*/


// menu
var ECMS_menu_tree = new Array();
var ECMS_menu_tree_index = 0;
// caches
var ECMS_image_cache = new Array();
var ECMS_class_cache = new Array();
// auto expand timer
var	ECMS_auto_expand_timer;


//added by the sridhar polishetty.
var WB_images_cache = new Array();

// This function takes a string and removes the single quote and double quote from that and returns the resultant
function removeSpecialChars(val)
{
		var repSQ,repDQ,repASQ,repADQ;
		var singleQuote="\'";
		var doubleQuote="\"";

		var aSingleQuote="&#39;";
		var aDoubeQuote="&#148;";

		
		repSQ=replace(val,singleQuote,"");
		repDQ=replace(repSQ,doubleQuote,"");

		repASQ=replace(repDQ,aSingleQuote,"");
		repADQ=replace(repASQ,aDoubeQuote,"");
		return repADQ;
}
// This function takes a string and replaces one string with the another string
function replace(strValue,strReplace,replaceWith)
{
  ind=strValue.indexOf(strReplace);

	  while(ind!=-1)
		{	  	        		
strValue=strValue.substring(0,ind)+replaceWith+strValue.substring(ind+strReplace.length);
		ind=strValue.indexOf(strReplace,ind+replaceWith.length);
        }
 return strValue;
}
// new menu_tree object
function ECMS_menu_node(id, name, url, target, expanded, title, image, linerequired, itempk, highlighted, openInNew) {
	//alert(id);
	this.id			= id.toString();
	this.expanded	= (expanded ? true : false);
	this.name		= name;
	this.url		= (url ? url : null);
	// WID-272, Author:Selvi, fix for 'javascript error if name contains single quote'
	this.title		= (title ? title : name);
	this.target		= (target ? target : null);
	this.tree		= ECMS_menu_tree_index;

	this.expandedi	= (ECMS_image_expanded ? ECMS_find_image(ECMS_image_expanded) : null);
	this.collapsedi	= (ECMS_image_collapsed ? ECMS_find_image(ECMS_image_collapsed) : null);
	this.bulleti	= (ECMS_image_bullet ? ECMS_find_image(ECMS_image_bullet) : null);

	this.expandedc	= (ECMS_class_expanded ? ECMS_find_class(ECMS_class_expanded) : null);
	this.collapsedc	= (ECMS_class_collapsed ? ECMS_find_class(ECMS_class_collapsed) : null);
	this.bulletc	= (ECMS_class_bullet ? ECMS_find_class(ECMS_class_bullet) : null);

	//sridhar changed.
	this.level = nodeLevel(id);
	this.itempk = itempk;

	this.ishighlighted = false;
	if (highlighted) {
		this.ishighlighted = true;
	}

	this.openInNew = false;
	//specifies if a new window is to be opened when this node is clicked(defaulted to false)
	if(openInNew) {
		this.openInNew = true;
	}

	this.line = false;
	if (linerequired) {
		this.line = true;
	}

	wb_bgcolor_child = (wb_bgcolor_child ? wb_bgcolor_child : "#ECF1F8" );
	wb_bgcolor_topheader = (wb_bgcolor_topheader ? wb_bgcolor_topheader : "#4E84BF" );

	wb_class_topheader = (wb_class_topheader ? wb_class_topheader : "leftnavheader");
	wb_class_child = (wb_class_child ? wb_class_child : "leftnavnormal");

	if (level == 0) {
		this.wbBGColor = wb_bgcolor_topheader;
		this.wbStyle = wb_class_topheader;
	} else  {

		this.wbBGColor = wb_bgcolor_child;
		if (this.ishighlighted) {
			this.wbStyle = wb_class_highlight;
		} else {
			this.wbStyle = wb_class_child;
		}

	}
	//changes end..

}


/*
 *	It finds the level, based on given id.
 *  Level starts from the 0.
 *	Written by Sridhar Polishetty
**/
function nodeLevel(id)
{
	id += "";
	level = 0;
	index = -1;
	while ((index = id.indexOf("-", index+1)) != -1)
	{
		level++;
	}

	return level;
}

/*
 *	Returns the no.of td's, each td will contains the shim.gif.
 *  And finally it adds the <td> for bullet or another gif.
 *	written by Sridhar Polishetty
 */
function levelSpaces(level, node)
{
	txtSpaces = "";
	if (level == 0) {
		return txtSpaces;
	} else {
		endTD = '';
	}



	isFirst = true;
	blnkclass = wb_class_img_leaf;
	bulletcls = wb_class_img_childheader;
	if (level!=0 && node.ishighlighted)
	{
		blnkclass = wb_class_img_blank;
		bulletcls = wb_class_img_highlight;
	}

	txtTD = '<img src="'+templatePathPrefix+'images/shim.gif" class="' + blnkclass  +'" height="1"></td>';
	for (i=0; i<level ; i++ ) {
		if (!isFirst) {
			txtSpaces += '<td class="'+  blnkclass +'">';
			isFirst = false;
		}
		isFirst = (isFirst) ? false : isFirst;
		txtSpaces += txtTD;
	}

	return txtSpaces + '<td class="' + bulletcls + '">';
}

// adds a node to the end of the menu tree
function ECMS_add_item(level, name, url, target, expanded, title, node, linerequired, itempk, highlighted, openInNew) {
//alert(name);
	if (!node) {
		if (!ECMS_menu_tree[ECMS_menu_tree_index]) {
			// first item
			//ECMS_menu_tree[ECMS_menu_tree_index] = new ECMS_menu_node(0, name, url, target, expanded, title, '', linerequired, itempk, highlighted);
			ECMS_menu_tree[ECMS_menu_tree_index] = new ECMS_menu_node(0, name, url, target, expanded, title, '', linerequired, itempk, highlighted, openInNew);
			// menu settings
			ECMS_menu_tree[ECMS_menu_tree_index].menu_height = ECMS_menu_height;
			ECMS_menu_tree[ECMS_menu_tree_index].status_display = ECMS_status_display;
			ECMS_menu_tree[ECMS_menu_tree_index].repeat_links = ECMS_repeat_links;
			ECMS_menu_tree[ECMS_menu_tree_index].auto_expand = ECMS_auto_expand;
			ECMS_menu_tree[ECMS_menu_tree_index].auto_expand_delay = ECMS_auto_expand_delay;
			ECMS_menu_tree[ECMS_menu_tree_index].collapse_on_expand = ECMS_collapse_on_expand;
			return;
		} else {
			//alert( "i am inside");
	 		node = ECMS_menu_tree[ECMS_menu_tree_index];
		}
	}

	// end of level
	while (node.next) {
		node = node.next;
	}

	if (level == 0) {
		// add to this level
		var id = node.id.lastIndexOf('-');
		if (id != -1) {
			var inc = node.id.substring(id + 1);
			inc++;
			id = node.id.substring(0, id) + '-' + inc;
		} else {
			id = parseInt(node.id) + 1;
		}
		node.next = new ECMS_menu_node(id, name, url, target, expanded, title, '', linerequired, itempk, highlighted, openInNew);
	} else if (node.child) {
		// recurse on next level
		ECMS_add_item(level - 1, name, url, target, expanded, title, node.child, linerequired, itempk, highlighted, openInNew);
	} else {
		// new child
		node.child = new ECMS_menu_node(node.id + '-0', name, url, target, expanded, title, '', linerequired, itempk, highlighted, openInNew);
	}
}


/*
 * Returns the complete class attibute. ex:- class="abc"
 * If there is no class is assigned to perticular node, then it will return the class=""
 *
 */
function ECMS_include_class(node, i) {
	//var cl = ECMS_class_cache[i];
	var cl = node.wbStyle;
	return (cl ? ' class="' + cl + '"' : '');
}


/*
 * Returns the image tag. Depanding on the Node Level it uses the image.
 * Its not taking care about the expanded or collpsed.
 *
 */
function ECMS_include_image(node, i) {
	var image = ECMS_image_cache[i];
	if (image) {
		var alt = (node.child ? node.name + ' ' + image.alt : image.alt);

		//changed by Sridhar Polishetty
		imagepath = image.src;
		imgStyle = '';
		//width = 20;
		if (node.level == 0)
		{
			//width=21
			imgStyle = wb_class_img_topheader;
			//imagepath = wb_image_topheaderplus;
			//imagepath = (node.child)?wb_image_topheaderplus:wb_image_topheaderminus;
			imagepath = (node.child)?wb_image_topheaderplus:wb_image_nochild;
		} else if (node.child) {

			imgStyle = wb_class_img_childheader;
			//imagepath = wb_image_childplus;
			imagepath = (node.ishighlighted)?wb_image_highlightplus:wb_image_childplus;
		} else {
			imgStyle = (node.ishighlighted)? wb_class_img_highlight :wb_class_img_leaf;
			imagepath = (node.ishighlighted)?wb_image_highlightleaf:wb_image_leaf;

		}
		//changes end Sridhar Polishetty

		//alert("level =" + node.level + " width =  " + width);
		//alert('<img width="' + width +'" height="16" src="' + imagepath + '" border="0" alt="' + alt + '" ID="ECMS_' + node.tree + '|' + node.id + '_IMG" />');
		//return '<img width="' + width +'" height="16" src="' + imagepath + '" border="0" alt="' + alt + '" ID="ECMS_' + node.tree + '|' + node.id + '_IMG" />';
		return '<img src="' + imagepath + '" border="0" alt="' + alt + '" ID="ECMS_' + node.tree + '|' + node.id + '_IMG" />';
	}
	return '';
}


/*
 * It returns the image tag for plus, minus and dot.
 *
 */
function ECMS_include_bullet_image(node) {
	var image = ECMS_include_image(node, node.bulleti);
	if (node.url && ECMS_menu_tree[node.tree].repeat_links) {
		image = ECMS_include_node_link(node, image);
	}
	return image;
}



// include control image
function ECMS_include_control_image(node, image) {
	return ECMS_include_control_link(node, ECMS_include_image(node, image));
}


/*
 * Returns the anchor tag. If the node is not belongs first level, it will includes the preceding
 * shim.gif's depending on the node level.
 *
 */
function ECMS_include_control_link(node, text) {
	level = nodeLevel(node.id);
	//anchr = levelSpaces(0) +  '<a href="javascript:ECMS_control_click(' + node.tree + ', \'' + node.id + '\');" title="' + node.title + '" target="_self"' + ECMS_include_behaviours(node) + '>' + text + '</a>';
	anchr = levelSpaces(level, node) +  '<a href="javascript:ECMS_control_click(' + node.tree + ', \'' + node.id + '\');" title="' + node.title + '" target="_self"' + ECMS_include_behaviours(node) + '>' + text + '</a>';
	return anchr;
}



/*
 * Returns the attributes of anchor tag, along with values.
 * Attributes will contain the onFocus, onBlur, onMouseover, onMouseOut.
 */
function ECMS_include_behaviours(node, text) {
	var f = ''; // focus handler
	var b = ''; // blur handler
	var menu = ECMS_menu_tree[node.tree];

	// status
	if (menu.status_display) {
	// WID-272, Author:Selvi, fix for 'javascript error if name contains single quote'
		f = 'window.status = \'' + replace(node.name,"\'","\\\'") + '\';';
		b = 'window.status = \'\';';
	}

	// auto expand
	if (menu.auto_expand && node.child) {
		f += 'ECMS_set_auto_expand(' + node.tree + ', \'' + node.id + '\');';
		b += 'ECMS_set_auto_expand();';
	}
	var t = 'return true;';

	return (f ? ' onfocus="' + f + t +'" onblur="' + b + t +'" onmouseover="' + f + t +'" onmouseout="' + b + t +'"' : '');
}



// include a node link
function ECMS_include_node_link(node, display) {
	var text = (display ? display : node.name);

	if (node.url) {
		//changes start. By Sridhar Polishetty 10/jan/02
		spaces = "";
		if (text.indexOf("<img")!=-1) {
			level = nodeLevel(node.id);
			//spaces = levelSpaces(0);
			spaces = levelSpaces(level, node);
		}
		if (!node.child && text.indexOf("<img")!=-1) {
			//alert(node.name + "  =  " + text);
			return spaces + text;
		}

		// changed By raman to expand the menu onclick of text if there is no target
		if(node.url=="#") node.url = "javascript:ECMS_control_click('" + node.tree + "', '" + node.id + "');"

		//changes end. By Sridhar Polishetty
		//text = spaces + '<a class="'+ node.wbStyle +'" href="' + node.url + '" title="' + node.title + '"' + (node.target ? ' target="' + node.target + '"' : '') + ECMS_include_behaviours(node) + '>' + text + '</a>';

		// code added by eshwar
		// if the openInNew flag is set to true, then the link is opened in a new window. This is done by calling the 
		// popupWindow function
		if(node.openInNew)
		{
//			text = spaces + '<a class="'+ node.wbStyle +'" href="' + 'javascript:popupWindow(\'' + node.url + '\')' + '" title="' + node.title + '"' + ECMS_include_behaviours(node) + '>' + text + '</a>';
			//code added by Kishore for fxing an issue raised in Intranet Nepal site 
			// The issue is on clicking links which open in new window, the hour glass continues to display even when 
			// the new window is exited
		    text = spaces + '<a class="'+ node.wbStyle +'" href="javascript:;" onclick="MyNewWindow(\'' + node.url + '\', \'' + (node.target ? node.target : '') + '\', \'700\', \'500\', \'yes\');" title="' + node.title + '"' + ECMS_include_behaviours(node) + '>' + text + '</a>';

		}
		else
		{
			text = spaces + '<a class="'+ node.wbStyle +'" href="' + node.url + '" title="' + node.title + '"' + (node.target ? ' target="' + node.target + '"' : '') + ECMS_include_behaviours(node) + '>' + text + '</a>';
		}

	} else if (node.child && ECMS_menu_tree[node.tree].repeat_links) {

		text = ECMS_include_control_link(node, node.name);
	}

	return text;

}



// include node
function ECMS_include_node(node, cl, i) {
	//code changed by sridhar polishetty
	if (node.line)
	{
		text = '<table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#ffffff"><tr><td><img src="'+templatePathPrefix+'images/shim.gif" width="10" height="1"></td></tr></table>\n';
		return text;
	}
	txtTD = '<td class="LeftNavIconCol">';

	if (node.child || node.level!=0)
	{
		txtTD = (node.level==0) ? '<td class="LeftNavIconCol">' : '<td class="SubNavBlankCol">';

	}
	if (node.level != 0 && node.ishighlighted)
	{
		txtTD = '<td class="' + wb_class_img_blank + '">';
	}

	var	text = '\t<table border="0" width="100%" cellpadding="0" cellspacing="0" style="padding-top:1;padding-bottom:1" bgColor="' + node.wbBGColor + '" >\n\t<tr>';
	text += '\n\t'+ txtTD + i + '</td>';
	//changes ended
	text += '\n\t<td ' + ECMS_include_class(node, cl) + ' align="left" id="ECMS_' + node.tree + '|' + node.id + '_CL">' + ECMS_include_node_link(node) + '</td>';
	text += '\n\t</tr>\n\t</table>\n';

	//Added by Sridhar Polishetty. For adding the line after the link
	//alert(node.name + " is " + node.line);
	if (node.line)
	{
		text += '<table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#ABC6E3"><tr><td><img src="'+templatePathPrefix+'images/shim.gif" width="10" height="1"></td></tr></table>\n';
	}
	//Changes End Sridhar Polishetty.
	return text;
}



// find a node with a given id
function ECMS_find_node(tree, id) {
	var node = ECMS_menu_tree[tree];
	var level = id.toString().split('-');

	for (var i = 0; i < level.length; i++) {
		for (var j = level[i]; j > 0; j--) {
			node = node.next;
		}
		if (i + 1 < level.length) {
			node = node.child;
		}
	}

	return node;
}


// find a node with a given name
function ECMS_find_node_name(tree, name) {
	if (!tree) {
		tree = 0;
	}
	return ECMS_find_node_name_in_tree(ECMS_menu_tree[tree], name);
}
function ECMS_find_node_name_in_tree(node, name) {

	// found it (only if it is a parent node)
	if (node.child && node.name == name) {
		return node;
	}

	// recurse: check expanded children
	if (node.child && node.expanded) {
		var check = ECMS_find_node_name_in_tree(node.child, name);
		if (check) {
			return check;
		}
	}

	// recurse: check next nodes
	if (node.next) {
		var check = ECMS_find_node_name_in_tree(node.next, name);
		if (check) {
			return check;
		}
	}

	return null;
}


// control click to expand/collapse menu
function ECMS_control_click(tree, node, image) {
	node = ECMS_find_node(tree, node);
	//alert(node.itempk);
	ECMS_control_node(node, !node.expanded, image);
}


// expand a node based on name
function ECMS_expand(name, tree) {
	ECMS_control_node(ECMS_find_node_name(tree, name), 1);
}


// expand a node based on id
function ECMS_expand_id(tree, id) {
	ECMS_control_node(ECMS_find_node(tree, id), 1);
}


// collapse a node based on its name
function ECMS_collapse(name, tree) {
	ECMS_control_node(ECMS_find_node_name(tree, name), 0);
}


// expand all folders
function ECMS_expand_all(tree) {
	var collapse_on_expand = ECMS_menu_tree[tree].collapse_on_expand;
	// turn of auto collapsing
	ECMS_menu_tree[tree].collapse_on_expand = false;
	// expand all
	ECMS_expand_tree(ECMS_menu_tree[tree]);
	// restore auto collapsing setting
	ECMS_menu_tree[tree].collapse_on_expand = collapse_on_expand;
}


// expand a menu tree
function ECMS_expand_tree(node) {
	if (node.child) {
		ECMS_expand_tree(node.child);
		ECMS_control_node(node, 1);
	}

	// recurse
	if (node.next) {
		ECMS_expand_tree(node.next);
	}
}


// collapse all folders (exclude node path)
function ECMS_collapse_all(tree, path) {
	ECMS_collapse_tree(ECMS_menu_tree[tree], path);
}


// collapse a menu tree (exclude those in a given path)
function ECMS_collapse_tree(node, path) {
	if (node.child) {
		if (!path || path.id.indexOf(node.id) != 0) {
			ECMS_control_node(node, 0);
		}
		ECMS_collapse_tree(node.child, path);
	}
	// recurse
	if (node.next) {
		ECMS_collapse_tree(node.next, path);
	}
}


// control click to expand/collapse menu
function ECMS_control_node(node, expand) {
	if (expand) {
		if (!node.expanded) {
			// collapse other menus?
			var collapse = ECMS_menu_tree[node.tree].collapse_on_expand;
			if (collapse) {
				// collapse other trees
				if (collapse == 'all') {
					for (var i = 0; i < ECMS_menu_tree.length; i++) {
						if (i != node.tree) {
							ECMS_collapse_all(i);
						}
					}
				}

				// collapse other items within this tree
				ECMS_collapse_all(node.tree, node);
				//alert("Hi ");
			}
			node.expanded = true;
			ECMS_PF_expand(node);
		}
	} else {
		if (node.expanded) {
			node.expanded = false;
			ECMS_PF_collapse(node);
		}
	}
}


// auto expand
function ECMS_set_auto_expand(tree, node) {
	if (!node && ECMS_auto_expand_timer) {
		clearTimeout(ECMS_auto_expand_timer);
	} else if (ECMS_menu_tree[tree].auto_expand) {
		ECMS_auto_expand_timer = setTimeout('ECMS_expand_id(' + tree + ', \'' + node + '\');', ECMS_menu_tree[tree].auto_expand_delay);
	}
}


// find image - caches images
function ECMS_find_image(image) {
	var i = 0;
	while (i < ECMS_image_cache.length) {
		if (ECMS_image_cache[i].src == image.src) {
			return i;
		}
		i++;
	}
	// cache new image - create copy
	ECMS_image_cache[i] = new Image();
	ECMS_image_cache[i].src = image.src;
	ECMS_image_cache[i].alt = image.alt;
	return i;
}


// find class - caches classes
function ECMS_find_class(name) {
	var i = 0;
	while (i < ECMS_class_cache.length) {
		if (ECMS_class_cache[i] == name) {
			return i;
		}
		i++;
	}
	// cache new class name
	ECMS_class_cache[i] = name;
	return i;
}


// end menu - trigger to create menu on page
function ECMS_end_menu() {
	//alert(ECMS_menu_tree_index);
	if (ECMS_menu_tree[ECMS_menu_tree_index]) {
		// root node exists, continue
		ECMS_PF_create_menu(ECMS_menu_tree[ECMS_menu_tree_index]);
		ECMS_menu_tree_index++;
	}
}


/*
	created the images chache...
	Based on the globale variables..

	written by Sridhar Polishetty
*/
function WB_build_image_cache()
{


	WB_images_cache[0] = new Image();
	WB_images_cache[0].src = wb_image_topheaderplus;
	WB_images_cache[0].alt = '(show)';

	WB_images_cache[1] = new Image();
	WB_images_cache[1].src = wb_image_topheaderminus;
	WB_images_cache[1].alt = '(hide)';

	WB_images_cache[2] = new Image();
	WB_images_cache[2].src = wb_image_childplus;
	WB_images_cache[2].alt = '(show)';

	WB_images_cache[3] = new Image();
	WB_images_cache[3].src = wb_image_childminus;
	WB_images_cache[3].alt = '(hide)';

	WB_images_cache[4] = new Image();
	WB_images_cache[4].src = wb_image_leaf;
	WB_images_cache[4].alt = '(dot)';

	WB_images_cache[5] = new Image();
	WB_images_cache[5].src = wb_image_highlightplus;
	WB_images_cache[5].alt = '(show)';

	WB_images_cache[6] = new Image();
	WB_images_cache[6].src = wb_image_highlightminus;
	WB_images_cache[6].alt = '(hide)';

	WB_images_cache[7] = new Image();
	WB_images_cache[7].src = wb_image_highlightleaf;
	WB_images_cache[7].alt = '(dot)';
}

/*
function wb_expand_item(tree, pk)
{
	node = ECMS_menu_tree[tree];
	//alert(pk);

	pknode = wb_find_pk_node(node, pk);

	if (pknode.level == 0)
	{
		//alert(pknode.name);
		eval("ECMS_control_click(0,'" + level + "')");
		return;
	}

	if (pknode && pknode.level == 0 && !pknode.child)
	{
		return
	}

	pknodeid = pknode.id;
	level = pknodeid.toString().split("-");

	idString = "";
	if (level.length == 1)
		eval("ECMS_control_click(0,'" + level + "')");
	if(node.child)
	{
		intLooop = level.length;
		//alert("Inside If");
	}
	else
	{
		intLooop = level.length - 1;
	}
	for (i=0; i<intLooop; i++ )
	{
		if (idString == "")
			idString = level[i];
		else
			idString = idString + "-" + level[i];
		tempnode = ECMS_find_node(0, idString);
		if (tempnode.child)
		{
			eval("ECMS_control_click(0,'" + idString + "')");
		}
		//eval("ECMS_control_click(0,'" + idString + "')");
		//alert("idString"+idString);
	}
	return pknode;
}
*/


function wb_expand_item(tree, pk)
{
	node = ECMS_menu_tree[tree];
	pknode = wb_find_pk_node(node, pk);
	//alert("pknode.level"+pknode.level);
	//alert("pknode.id"+pknode.id);
	
	if (pknode == null)
	{
	  for (++tree; tree < ECMS_menu_tree.length; ++tree)
	  {
	    node = ECMS_menu_tree[tree];
	    pknode = wb_find_pk_node(node, pk);
	    if (pknode != null)
	      break;
	  }
	}

	if (pknode.level == 0) {
		//eval("ECMS_control_click(0,'" + level + "')");
		eval("ECMS_control_click(tree,'" + pknode.id + "')");
		return;
	}

	if (pknode && pknode.level == 0 && !pknode.child) {
		return
	}

	pknodeid = pknode.id;
	level = pknodeid.toString().split("-");
	idString = "";
	if (level.length == 1)
		eval("ECMS_control_click(tree,'" + level + "')");
	/*
		if (pknode.child)
		intLength = level.length;
	*/
	for (i=0; i<level.length; i++ )
	{
		if (idString == "")
			idString = level[i];
		else
			idString = idString + "-" + level[i];
		tempnode = ECMS_find_node(0, idString);
		if (tempnode.child)
		{
			eval("ECMS_control_click(tree,'" + idString + "')");
		}
	}
	return pknode;
}

function wb_find_pk_node(node, pk)
{
	var tempnode = null;
	//alert("node.itempk"+node.itempk);
	//alert(pk);
	while (node)
	{
		if (node.itempk == pk) {

			return node;
		}
		if (node.child) {
			tempnode = wb_find_pk_node(node.child, pk);
			if (tempnode != null) {
				return tempnode;
			}
		}
		node = node.next;
	}
	return tempnode;
}

function WB_get_image(node)
{
	index = 0;
	if (node.expanded && node.level == 0) {
		index = 1;

	} else if (node.expanded && node.level != 0) {
		index = (node.ishighlighted)? 6 :3;

	} else if (!node.expanded && node.level == 0) {
		index = 0;

	} else {
		index = index = (node.ishighlighted)?5:2;

	}
	return WB_images_cache[index];

}

/*
*	Opens a new window using the passed url
*/
function popupWindow(url)
{
	//alert('inside js');
	somewin = window.open(url,'myWindow','status=no,maximize=no,width=700,height=500,resizable=yes,scrollbars=yes');
	somewin.focus();
	somewin.setActive();
}

//Commented Code for EPUB-625 ****start*****
/*
function doInLink(inMDK, inMenuPK, inControllerURL)
{
  var pageURL = unescape(window.location);
  var isCURL = pageURL.indexOf(",,") != -1 ? true : false;

  if (pageURL.indexOf("contentMDK") == -1)
  {
    var menuPK = getArgFromURL(pageURL,"menuPK",isCURL);
    if (menuPK != "") inControllerURL += "&menuPK=" + menuPK;
      
    var theSitePK = getArgFromURL(pageURL,"theSitePK",isCURL);
    if (theSitePK != "") inControllerURL += "&theSitePK=" + theSitePK;

    window.location = inControllerURL;
  }
  else
    window.location = replaceArgInURL(pageURL,"contentMDK",inMDK,false,isCURL); //no menuPK for now

  return;
}*/
//******end*****

//Code added for EPUB-625 ****start****
function doInLink(inMDK, inMenuPK, inControllerURL,inAnchor)
{
  var pageURL = unescape(window.location);
  var isCURL = pageURL.indexOf(",,") != -1 ? true : false;
  var newHref = null;

  if (pageURL.indexOf("contentMDK") == -1)
  {
    var menuPK = getArgFromURL(pageURL,"menuPK",isCURL);
    if (menuPK != "") inControllerURL += "&menuPK=" + menuPK;
      
    var theSitePK = getArgFromURL(pageURL,"theSitePK",isCURL);
    if (theSitePK != "") inControllerURL += "&theSitePK=" + theSitePK;

    newHref = inControllerURL;
  }
  else
    newHref = replaceArgInURL(pageURL,"contentMDK",inMDK,false,isCURL); //no menuPK for now

  var uAnchor = newHref.indexOf("#")

  if (uAnchor != -1)
    newHref = newHref.substring(0,uAnchor);

  if (inAnchor != null)
    newHref += "#" + inAnchor;

  window.location.href = newHref;

  return;
}
//Code added for EPUB-625 ****end****

function getArgFromURL(inURL,inParm,isCURL)
{
    var startPK = inURL.indexOf(inParm);
    
    if (startPK != -1)
    {
      var endPK = 0;
      startPK += (inParm.length + 1);

      if (isCURL)
      {
        endPK = inURL.indexOf("~",startPK);
        endPK = endPK == -1 ? inURL.lastIndexOf(",") : endPK;
      }
      else
      {
        endPK = inURL.indexOf("&",startPK);
        endPK = endPK == -1 ? inURL.length : endPK;
      }
        
      return inURL.substring(startPK,endPK);
    }
    else
      return "";
}

function replaceArgInURL(inURL,inParm,inArg,forceAdd, isCURL)
{
  var argIndex = inURL.indexOf(inParm);
  
  if (argIndex == -1 && forceAdd == true && inArg != "null")
  {
    if (isCURL)
    {
      var firstArg = inURL.indexOf(",,") + 2;
      inURL = inURL.substring(0,firstArg) + "menuPK:" + inArg + "~" + inURL.substring(firstArg,inURL.length);
    }
    else
      inURL += "&" + inParm + "=" + inArg;

    return inURL;  
  }
  else if (argIndex == -1 || inArg == "null")
    return inURL;
    
  var startArg = argIndex + inParm.length + 1;
  var endArg = -1;
  
  if (isCURL)
  {
    endArg = inURL.indexOf("~",startArg);
    endArg = endArg == -1 ? inURL.lastIndexOf(",") : endArg;
  }
  else
  {
    endArg = inURL.indexOf("&",startArg);
    endArg = endArg == -1 ? inURL.length : endArg;
  }
  
  if (endArg == -1)
    return inURL;
    
  inURL = inURL.substring(0,startArg) + inArg + inURL.substring(endArg,inURL.length);    

  return inURL;    
} 

//code added by Kishore for fxing an issue raised in Intranet Nepal site 
// The issue is on clicking links which open in new window, the hour glass continues to display even when 
// the new window is exited
function MyNewWindow(mypage,myname,w,h,scroll) {
// MyNewWindow() - centering new window if user's screen resolution > 800x600
  if (screen && screen.width > 800) {
    var winl = (screen.width-w)/2; var wint = (screen.height-h)/2;
  } else {
    var winl = 0; var wint = 0;
  }
  var settings  ='height='+h+',';
      settings +='width='+w+',';
      settings +='top='+wint+',';
      settings +='left='+winl+',';
      settings +='scrollbars='+scroll+',';
      settings +='resizable=yes,';
      settings +='status=no';
  win=window.open(mypage,myname,settings);
  if (parseInt(navigator.appVersion) >= 4) {win.window.focus();}
}




/* ** Functions used for JIRA 173 : Start ** */

/* **********************************************************************
** This function opens download popup window.
*********************************************************************** */
function fnOpenDownloadPopup() {
	var newWin = window.open('download_popup.htm','myWindow','status=no,maximize=no,width=700,height=540,top=125,left=150,resizable=no,scrollbars=yes');
	newWin.focus();
}


/* **********************************************************************
** This function attaches onclick event to checkboxes with name='chkFields'.
*********************************************************************** */
function fnLoadEvent() {
	var arrChkFields = document.forms['frmDownloadPopup'].chkFields;
	cntFields=arrChkFields.length;	
	
	for (var i=0; i<cntFields; i++) {
		arrChkFields[i].onclick=function () {
			fnShowSelected(this);	
		};
	}
}


/* **********************************************************************
** This function toggles status of Submit button.
*********************************************************************** */
function fnSubmitStatus(strStatus) {
	if (strStatus=="enabled") {
		document.getElementById('submit-disabled').className="hide";
		document.getElementById('submit-enabled').className="inline";
	} else if (strStatus=="disabled") {
		document.getElementById('submit-disabled').className="inline"
		document.getElementById('submit-enabled').className="hide";
	}
}


/* **********************************************************************
** This function will display selected fields in the 'selected-list' DIV.
*********************************************************************** */
function fnWriteContent(strInnerHtml) {
	document.getElementById('selected-list').innerHTML = "<strong>You have selected:</strong> " + strInnerHtml;	
	if(strInnerHtml=="") {
		document.getElementById('selected-list').className="hide";
		fnSubmitStatus('disabled');
	} else {
		document.getElementById('selected-list').className="show";
		fnSubmitStatus('enabled');
	}	
}


/* **********************************************************************
** This function is called when user decides to delete selected field.
** It unchecks the respective checkbox and deletes the selected field.
** It displays the selected fields.
*********************************************************************** */
////commented by harihara(wb355479) the method is written in the jsp file directly in the script.
/*function fnDeleteValue(chkBoxId) {
	var strInnerHtml = "";	
	var arrChkFields = document.forms['frmDownloadPopup'].chkFields;
	cntFields=arrChkFields.length
	
	if (chkBoxId=="chkSelectAll") {
		document.getElementById('chkSelectAll').checked=false;
		for (var i=0; i<cntFields; i++) {
			arrChkFields[i].checked = false;
		}		
	} else {
		document.getElementById(chkBoxId).checked=false;
		document.getElementById('chkSelectAll').checked=false;
		for (var i=0; i<cntFields; i++) {
			if (arrChkFields[i].checked) {
				strInnerHtml += "<div id='div"+(i+1)+"' class='selectedItems'>"+ arrChkFields[i].value + "<a style='text-decoration:none;' href='javascript:fnDeleteValue(\""+arrChkFields[i].id+"\");'><sup>(x)</sup></a> </div>";
			}
		}			
	}	
	fnWriteContent(strInnerHtml)		
}
*/

/* **********************************************************************
** This function is called when user clicks on a checkbox.
** It displays the selected fields.
*********************************************************************** */
//commented by harihara(wb355479) the method is written in the jsp file directly in the script.
/*function fnShowSelected(objChk) {
	var strInnerHtml = "";
	var count = 0;	
	var arrChkFields = document.forms['frmDownloadPopup'].chkFields;
	cntFields=arrChkFields.length
	
	if (objChk.id=="chkSelectAll") {
		if (objChk.checked) {
			strInnerHtml += "<div id='divselectall' class='selectedItems'>"+ objChk.value + "<a style='text-decoration:none;' href='javascript:fnDeleteValue(\""+objChk.id+"\");'><sup>(x)</sup></a> </div>";
			for (var i=0; i<cntFields; i++) {
				arrChkFields[i].checked = true;
			}
		} else {
			for (var i=0; i<cntFields; i++) {
				arrChkFields[i].checked = false;
			}
		}		
	} else {
		for (var i=0; i<cntFields; i++) {
			if (arrChkFields[i].checked) {
				strInnerHtml += "<div id='div"+(i+1)+"' class='selectedItems'>"+ arrChkFields[i].value + "<a style='text-decoration:none;' href='javascript:fnDeleteValue(\""+arrChkFields[i].id+"\");'><sup>(x)</sup></a> </div>";
				count++;
			}
			if (count==cntFields) {
				document.getElementById('chkSelectAll').checked=true;
				strInnerHtml = "<div id='divselectall' class='selectedItems'>"+ document.getElementById('chkSelectAll').value + "<a style='text-decoration:none;' href='javascript:fnDeleteValue(\"chkSelectAll\");'><sup>(x)</sup></a> </div>";
			} else {
				document.getElementById('chkSelectAll').checked=false;
			}
		}		
	}
	fnWriteContent(strInnerHtml);
}
*/

/* **********************************************************************
** This function calcuates browser's innerheight and innerwidth.
*********************************************************************** */
function getBrowserSpecs() {
	var intH = 0;
	var intW = 0;
	
    if (window.innerHeight && window.scrollMaxY) {// Firefox         
		yWithScroll = window.innerHeight + window.scrollMaxY;         
		xWithScroll = window.innerWidth + window.scrollMaxX;     
	} else if (document.body.scrollHeight > document.body.offsetHeight) { // all but Explorer Mac         
		yWithScroll = document.body.scrollHeight;         
		xWithScroll = document.body.scrollWidth;     
	} else { // works in Explorer 6 Strict, Mozilla (not FF) and Safari         
		yWithScroll = document.body.offsetHeight;         
		xWithScroll = document.body.offsetWidth;
	}
	return { width: parseInt(xWithScroll), height: parseInt(yWithScroll) };
}  


/* **********************************************************************
** This function downloads excel sheet.
** This function enables 'Submit' button after the download.
*********************************************************************** */
function fnDownloadExcel() {
	hideLayer();
	var url='ResultData.xls';
	// var download_window = window.open(url,'downloadwindow');
	var download_window = window.open(url,'myWindow');
	parent.window.focus();
	fnSubmitStatus('enabled');	
}


/* **********************************************************************
** This function determines browser's compatibility mode.
*********************************************************************** */
function centerElement(){
	return (document.compatMode && document.compatMode!="BackCompat")? document.documentElement : document.body;
}


/* **********************************************************************
** This function positions loading animation DIV layer.
** After 1 second, it downloads the data in an excel sheet.
*********************************************************************** */
function fnPositionLoading(strDivId) {
	var objModal = document.getElementById(strDivId);
	var ie=(document.all);
	var ns=(document.layers);
	var ns6=(document.getElementById && !ie);
	var calculate=ns? "" : "px"	
	var pwidth = 100;
	var pheight = 100;	
	var pleft = 0;
	var ptop = 0;	
	
	if (ie){
		pleft = (centerElement().offsetWidth)/2+(centerElement().scrollLeft)-(pwidth/2);
		ptop = (centerElement().offsetHeight)/2+(centerElement().scrollTop)-(pheight/2);
	}
	else if (ns){
		pleft=window.innerWidth/2+window.pageXOffset-(pwidth/2);
		ptop=window.innerHeight/2+window.pageYOffset-(pheight/2);
	}
	else if (ns6){
		pleft=self.innerWidth/2+window.pageXOffset-(pwidth/2);
		ptop=self.innerHeight/2+window.pageYOffset-(pheight/2);
	}
	objModal.style.position = "absolute";
	objModal.style.display = "block";
	objModal.style.width = pwidth + calculate;
	objModal.style.height = pheight + calculate;
	objModal.style.left = pleft + calculate;
	objModal.style.top = ptop + calculate;
	fnSubmitStatus('disabled');	
	setTimeout("fnDownloadExcel()", 1000); 
}


/* **********************************************************************
** This function reverts popup back to it's original bright state.
*********************************************************************** */
function hideLayer() {
	var shadow = document.getElementById("divMask");
	shadow.style.display = "none"; 
}


/* **********************************************************************
** This function dims the popup.
*********************************************************************** */
function showLayer() {
	var shadow = document.getElementById("divMask");
	var bws = getBrowserSpecs();
	shadow.style.width = bws.width + 'px';
	shadow.style.height = bws.height + 'px';
	shadow.style.display = "block"; 
}


/* **********************************************************************
** This function dims the popup.
** This function positions loading animation DIV layer.
*********************************************************************** */
function fnShowLoading() {	
	showLayer();	
	fnPositionLoading('divLoading');
}
/* ** Functions used for JIRA 173 : End ** */