var monthAbbreviations = new Array("Jan. ", "Feb. ", "March ", "April ", "May ", "June ", "July ", "Aug. ", "Sept. ", "Oct. ", "Nov. ", "Dec. ");
var daysOfTheWeek = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");

// In milliseconds:
ONEDAYAGO = -86400000;
ONEDAYFROMNOW = 86400000;
TWODAYSAGO = -172800000;
SEVENDAYSAGO = -604800000;
SIXDAYSFROMNOW = 518400000;

function dateReference(dateString) {
  var relative = relativeDate(dateString);
  var explicit = explicitDate(dateString, true);
  if (relative != explicit) {
    document.write("<acronym title=\"" + explicit + "\">" + relative + "</acronym>");
  } else {
    document.write(explicit);
  }
}

function relativeDate(dateString) {
  var now = new Date();
  var reference = new Date(dateString);
  if (isNaN(reference)) return dateString;
  // Calculate time offset between the two dates
  var offset = reference.getTime() - now.getTime();

  // Today, tomorrow, yesterday
  if ((offset > ONEDAYAGO) && (offset <= 0)) return "today";
  if ((offset > 0) && (offset < ONEDAYFROMNOW )) return "tomorrow";
  if ((offset > TWODAYSAGO) && (offset <= ONEDAYAGO)) return "yesterday";

  // Past week or coming week
  if ((offset > SEVENDAYSAGO) && (offset <= TWODAYSAGO)) return "last " + daysOfTheWeek[reference.getDay()];
  if ((offset >= ONEDAYFROMNOW) && (offset < SIXDAYSFROMNOW)) return "this " + daysOfTheWeek[reference.getDay()];

  // None of the above
  return explicitDate(dateString, false);
}

function explicitDate(dateString, includeYearRegardless) {
  var now = new Date();
  var reference = new Date(dateString);
  if (isNaN(reference)) return dateString;
  var date = reference.getDate();
  var month = monthAbbreviations[reference.getMonth()];
  // Unless specified, only include the year if it is different from the current year
  if ((reference.getFullYear() != now.getFullYear()) || includeYearRegardless) {
    var year = ", " + reference.getFullYear();
  } else {
    var year = "";
  }
  return(month + date + year);
}

var hex=new Array('0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f');

function htmlEscape(input)
{
	var preescape=input;
	var escaped="";
	
	var i=0;
	for(i=0;i<preescape.length;i++)
	{
		escaped=escaped+escapeChar(preescape.charAt(i));
	}
	
	return escaped;
}
	
function escapeChar(original)
{
	var found=true;
	var thechar=original.charCodeAt(0);
	switch(thechar) {
		case '\n': return "<br/>"; break; 
		case '\r': break;
		case 60:return "&lt;"; break; 
		case 62:return "&gt;"; break; 
		case 38:return "&amp;"; break; 
		case 34:return "&quot;"; break; 
		case 198:return "&AElig;"; break; 
		case 193:return "&Aacute;"; break; 
		case 194:return "&Acirc;"; break; 
		case 192:return "&Agrave;"; break; 
		case 197:return "&Aring;"; break; 
		case 195:return "&Atilde;"; break; 
		case 196:return "&Auml;"; break; 
		case 199:return "&Ccedil;"; break; 
		case 208:return "&ETH;"; break; 
		case 201:return "&Eacute;"; break; 
		case 202:return "&Ecirc;"; break; 
		case 200:return "&Egrave;"; break; 
		case 203:return "&Euml;"; break; 
		case 205:return "&Iacute;"; break; 
		case 206:return "&Icirc;"; break; 
		case 204:return "&Igrave;"; break; 
		case 207:return "&Iuml;"; break; 
		case 209:return "&Ntilde;"; break; 
		case 211:return "&Oacute;"; break; 
		case 212:return "&Ocirc;"; break; 
		case 210:return "&Ograve;"; break; 
		case 216:return "&Oslash;"; break; 
		case 213:return "&Otilde;"; break; 
		case 214:return "&Ouml;"; break; 
		case 222:return "&THORN;"; break; 
		case 218:return "&Uacute;"; break; 
		case 219:return "&Ucirc;"; break; 
		case 217:return "&Ugrave;"; break; 
		case 220:return "&Uuml;"; break; 
		case 221:return "&Yacute;"; break; 
		case 225:return "&aacute;"; break; 
		case 226:return "&acirc;"; break; 
		case 230:return "&aelig;"; break; 
		case 224:return "&agrave;"; break; 
		case 229:return "&aring;"; break; 
		case 227:return "&atilde;"; break; 
		case 228:return "&auml;"; break; 
		case 231:return "&ccedil;"; break; 
		case 233:return "&eacute;"; break; 
		case 234:return "&ecirc;"; break; 
		case 232:return "&egrave;"; break; 
		case 240:return "&eth;"; break; 
		case 235:return "&euml;"; break; 
		case 237:return "&iacute;"; break; 
		case 238:return "&icirc;"; break; 
		case 236:return "&igrave;"; break; 
		case 239:return "&iuml;"; break; 
		case 241:return "&ntilde;"; break; 
		case 243:return "&oacute;"; break; 
		case 244:return "&ocirc;"; break; 
		case 242:return "&ograve;"; break; 
		case 248:return "&oslash;"; break; 
		case 245:return "&otilde;"; break; 
		case 246:return "&ouml;"; break; 
		case 223:return "&szlig;"; break; 
		case 254:return "&thorn;"; break; 
		case 250:return "&uacute;"; break; 
		case 251:return "&ucirc;"; break; 
		case 249:return "&ugrave;"; break; 
		case 252:return "&uuml;"; break; 
		case 253:return "&yacute;"; break; 
		case 255:return "&yuml;"; break; 
		case 162:return "&cent;"; break; 
		default:
			found=false;
			break;
	}
	if(!found)
	{
		if(thechar>127) {
			var c=thechar;
			var a4=c%16;
			c=Math.floor(c/16); 
			var a3=c%16;
			c=Math.floor(c/16);
			var a2=c%16;
			c=Math.floor(c/16);
			var a1=c%16;
			return "&#x"+hex[a1]+hex[a2]+hex[a3]+hex[a4]+";";		
		}
		else
		{
			return original;
		}
	}
}

function ValueFromTagName(item, tagname) {
	var val = item.getElementsByTagName(tagname);
	if (val.length == 0) return null;
	return val[0].firstChild.nodeValue;
}

function strip(html)
{
   var tmp = document.createElement("DIV");
   tmp.innerHTML = html;
   return tmp.textContent||tmp.innerText;
}

function ParseData(data) {
	var items = data.getElementsByTagName('item');
	var output = '<ul>';

	for (var i = 0; i < items.length; ++i) {
		var title = ValueFromTagName(items[i], 'title');
		var link = ValueFromTagName(items[i], 'link');
		var description = ValueFromTagName(items[i], 'description');
		var dt = ValueFromTagName(items[i], 'pubDate');

		output += '<li><a href ="' + link + '"><h6><span class="title">' + htmlEscape(title) + '</span>';
		if (dt) {
			output += ' <span class="date">' + htmlEscape(relativeDate(dt)) + '</span>';
		}
		output += '</h6>' + htmlEscape(strip(description).substring(0, 300)) + '</a></li>';
	}

	output += '</ul>';

	document.getElementById('posts').innerHTML = output;
}

function LoadFeed() {
	if (window.XMLHttpRequest) {
		var request = new XMLHttpRequest();
	} else {
		var request = new ActiveXObject("Microsoft.XMLHTTP");
	}

	request.open("GET", "/feed/", true);
	request.setRequestHeader("Cache-Control", "no-cache");
	request.setRequestHeader("Pragma", "no-cache");

	request.onreadystatechange = function() {
		if (request.readyState == 4 && request.status == 200) {
			if (request.responseXML) {
				ParseData(request.responseXML);
			}
		}
	}
	
	request.send(null);
}

LoadFeed();
