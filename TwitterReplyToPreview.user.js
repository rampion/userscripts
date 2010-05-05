// ==UserScript==
// @name           TwitterReplyToPreview
// @namespace      http://rampion.myopenid.com
// @description    Add title text to "in reply to" links displaying the tweet replied to
// @include        http://twitter.com/
// ==/UserScript==

const set_titles = function(){
	const spans = document.getElementsByTagName('span');
	for (var i = 0; i < spans.length; i++) (function(span){
		if (span.className == 'meta entry-meta') {
			const as = spans[i].getElementsByTagName('a');
			for (var j = 0; j < as.length; j++) (function(a){
				const m = a.href.match(/http:\/\/twitter.com\/[^\/]+\/status\/(\d+)/);
				if (a.innerHTML.match(/in reply to/) && m && a.title == "") {
					a.title = "...";
					GM_xmlhttpRequest({
						method: 'GET',
						url: 'http://api.twitter.com/1/statuses/show/' + m[1] + '.json',
						onload: function(response){
							if (response.status == 200 && response.readyState == 4){
								try { a.title = JSON.parse(response.responseText).text; } 
								catch (e) { GM_log( "caught: "+e ); }
							}
						}
					});
				}
			})(as[j]);
		}
	})(spans[i]);
};
// todo: watch for page updates and set titles on new tweets
set_titles();
