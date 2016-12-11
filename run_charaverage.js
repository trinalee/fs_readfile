'use strict'

var readline = require('readline');
const CharAverage = require('./charaverage')

var inputFileName = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let charAverage = new CharAverage()

inputFileName.question(">>What file do you want to read?  ", function(fileName) {
   console.log("Filename is: " + fileName);
   charAverage.readFileContents(fileName)
   inputFileName.close();
});
