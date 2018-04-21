/**
 * Helper File
 *
 * @package    CustoMenu
 * @version    2.2.3
 * @since      File available since Release 2.1.0
 *
 * @author     Peter van Westen <peter@nonumber.nl>
 * @link       http://www.nonumber.nl/customenu
 * @copyright  Copyright (C) 2008 NoNumber! All Rights Reserved
 * @license    http://www.gnu.org/licenses/gpl-2.0.html GNU/GPL
 */
 
function changeClassName( el, oldClass, newClass )
{
	if ( el.className.match( new RegExp( '(\\s|^)'+oldClass+'(\\s|$)' ) ) ) {
		// remove oldClass
		var reg = new RegExp( '(\\s|^)'+oldClass+'(\\s|$)' );
		el.className = el.className.replace( reg, ' ' );
	}
	if ( !el.className.match( new RegExp( '(\\s|^)'+newClass+'(\\s|$)' ) ) ) {
		// add newClass
		el.className += ' '+newClass;
	}
}