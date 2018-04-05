// Helper function that generates an HTML <TABLE> element to display the list of news items 
function getrss(rsslink) { 
var newxml = document.createElement("XML"); 
newxml.async = false; 
newxml.load(rsslink); 
var sitetitle=newxml.selectNodes("//channel").item(0).selectSingleNode("title").text 
var strHTML = "<table><tr>"; 
var newsitems = newxml.selectNodes("//item"); 
// Walk the list of <items> nodes to generate the appropriate HTML 
for(var i = 0; i < newsitems.length; i++) { 

strHTML += "<td class='general_text'><b>"; 
strHTML += newsitems.item(i).selectSingleNode("title").text + "</b></td>" + "</tr>"; 

strHTML += "<tr> <td>" + "<a href='" + newsitems.item(i).selectSingleNode("link").text + "' class='fp_a' target='new'> ";
strHTML += newsitems.item(i).selectSingleNode("description").text + "</a><br><br></td></tr>";
 
} 

strHTML += "</table>"; 
return strHTML; 
} 