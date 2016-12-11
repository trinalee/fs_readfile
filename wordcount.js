'use strict'


var fs = require('fs'); // load fs module

fs.readFile('./random.txt', function (err, data) {
  var wordCount = data.toString().replace(/\n/g, ' ').split(' ').filter(function (x) {return x !== ''}).length;
  console.log(data.toString().replace(/\n/g, ' ').split(' ').filter(function (x) {return x !== ''}))

  console.log("The number of words is: " + wordCount);
});
