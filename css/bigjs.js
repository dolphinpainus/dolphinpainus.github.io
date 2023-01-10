/* Banner Stuffs */
function reloadImage()
{
img = document.getElementById('theimage');
img.src = 'http://www.insomniacgamers.net/signature.png/?' + Math.random();
}

/* Bookmark * /
function bookmarksite(title,url){
if (window.sidebar) // firefox
	window.sidebar.addPanel(title, url, "");
else if(window.opera && window.print){ // opera
	var elem = document.createElement('a');
	elem.setAttribute('href',url);
	elem.setAttribute('title',title);
	elem.setAttribute('rel','sidebar');
	elem.click();
} 
else if(document.all)// ie
	window.external.AddFavorite(url, title);
}

/* Switch */
function go(loc){
    document.getElementById('lswitch').src = loc;
}

/* Popup stuffs */

<!--
//
var win=null;
function NewWindow(mypage,myname,w,h,scroll,pos){
if(pos=="random"){LeftPosition=(screen.width)?Math.floor(Math.random()*(screen.width-w)):100;TopPosition=(screen.height)?Math.floor(Math.random()*((screen.height-h)-75)):100;}
if(pos=="center"){LeftPosition=(screen.width)?(screen.width-w)/2:100;TopPosition=(screen.height)?(screen.height-h)/2:100;}
else if((pos!="center" && pos!="random") || pos==null){LeftPosition=0;TopPosition=20}
settings='width='+w+',height='+h+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',location=no,directories=no,status=no,menubar=no,toolbar=no,resizable=yes';
win=window.open(mypage,myname,settings);}
// -->

<!--
// Popup window code
function newPopup(url) {
	popupWindow = window.open(
		url,'popUpWindow','height=450,width=720,left=10,top=10,resizable=yes,scrollbars=no,toolbar=no,menubar=no,location=no,directories=no,status=yes')
}
// -->

/* yay themes */
function changeTheme()
{

  var e = document.getElementById("themes");
  var theme = e.options[e.selectedIndex].value;
  console.log(theme);
  document.getElementById("bgs").style.backgroundImage = "url("+theme+")";
}  