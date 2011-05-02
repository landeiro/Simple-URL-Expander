//
// Copyright (c) Pedro Landeiro <landeiro@gmail.com>, All rights reserved.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
// FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
// IN THE SOFTWARE.

var http = require("http");
var urlObj = require("url");
exports.longurl = function (url,callbackfunction) {
    var parsedURL = urlObj.parse(url);
    var options = {host:parsedURL.hostname, path:((parsedURL.pathname) ? (parsedURL.pathname) : "") + ((parsedURL.search) ? parsedURL.search : "") ,method:"HEAD"};
    var req = http.request(options, function(res) {
	res.on('end', function (chunk) {
	  var result = (res.headers && res.headers.location && (res.headers.location.indexOf("http") > -1)) ? res.headers.location : url;
	  callbackfunction({shorturl:url,longurl:result});	
	});
      }).on('error', function (e) {callbackfunction({shorturl:url,longurl:"error"})});
    req.end();
}
