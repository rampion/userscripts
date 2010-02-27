// ==UserScript==
// @name undecorate-links
// @namespace http://rampion.myopenid.com
// @description change javascript:method('url') links into normal links
// @include https://www.rci.com*
// @include http://www.rci.com*
// ==/UserScript==
const as = document.getElementsByTagName('a');
for (var i = 0; i < as.length; ++i) (function(a){
  if (!a.href.match(/^javascript:/)) return;
	var match;
 
  if (match = a.href.match(/javascript:openNewWindow\(\);?/)) {
    a.href = 'http://www.rciaffiliates.com';
  } else if (match = a.href.match(/^javascript:(?:newPopWindow|getLink)\((['"])((?:(?!\1)[^\\]|\\.)*)\1.*?\);?$/)) {
    a.href = match[2];
  } 
})(as[i]);
