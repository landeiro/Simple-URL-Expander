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


