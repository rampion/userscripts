// ==UserScript==
// @name           google-viewer.user.js
// @description    This script ensures that all hyperlinks pointing to PDFs, PowerPoint docs and TIFF images are opened using Google Viewer.
// ==/UserScript==
 
for (var i = 0; i < document.links.length; i++ )
{
	const link = document.links[i];
	if (link.href.match(/^https?:\/\/[^?#]*\.(pdf|ppt|tiff)/i) && 
			!link.href.match(/^http:\/\/docs\.google\.com\/viewer\?url=/i))
	{
		GM_log( link.href );
		link.href = 'http://docs.google.com/viewer?url=' + link.href;
	}
}
