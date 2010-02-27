// ==UserScript==
// @name undecorate-links
// @namespace http://rampion.myopenid.com
// @description change javascript:method('url') links into normal links
// @include https://www.rci.com*
// @include http://www.rci.com*
// ==/UserScript==

const undecorate_link = function(a){
  if (!a.href.match(/^javascript:/)) return;
	var match;
 
  if (match = a.href.match(/javascript:openNewWindow\(\);?/)) {
    a.href = 'http://www.rciaffiliates.com';
  } else if (match = a.href.match(/^javascript:(?:newPopWindow|getLink)\((['"])((?:(?!\1)[^\\]|\\.)*)\1.*?\);?$/)) {
    a.href = match[2];
	}
}; 

//const as = document.getElementsByTagName('a');
//for (var i = 0; i < as.length; ++i) undecorate_link(as[i]);

document.addEventListener('mouseover', function(mouseover_event){
		if (mouseover_event.target.tagName == 'A') { undecorate_link(mouseover_event.target); }
}, false);
document.addEventListener('mouseout', function(mouseout_event){
		if (mouseout_event.target.tagName == 'A') { undecorate_link(mouseout_event.target); }
}, false);
document.addEventListener('click', function(click_event){
		if (click_event.target.tagName == 'A') { undecorate_link(click_event.target); }
}, false);
