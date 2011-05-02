# Simple URL Expander

This is an extra small node.js lib that expands virtually all existing shorturl services.

This expansion is only one level deep, it does not expands chained shorturls.

## Examples

	var expand = require("./lib/expander.js");
	// Youtube shorturl
	expand.longurl("http://youtu.be/btmB-p_0QFg",function (result){
	    console.log(result.longurl);
	  });

	// BBC shorturl
	expand.longurl("http://bbc.in/lzCtYL",function (result){
	    console.log(result.longurl);
	  });

	// Bit.ly shorturl
	expand.longurl("http://bit.ly/gDjsaP",function (result){
	    console.log(result.longurl);
	  });

	// goo.gl shorturl
	expand.longurl("http://goo.gl/QLTa",function (result){
	    console.log(result.longurl);
	  });

	// This url will return the same
	expand.longurl("http://edition.cnn.com/US/",function (result){
	    console.log(result.longurl);
	  });

## How-to

Use the function longurl( shorturl-to-expand, callbackfunction)

The result will be in JSON with two properties:

* shorturl - The original shorturl sent 
* longurl - The expanded url


	{shorturl:"shorturl",longurl:"theExpandedURL"}


If error on request the longurl property will be the string "error"
