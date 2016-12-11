'use strict'

const fs = require('fs'); // load fs module

class CharAverage {

  constructor () {
    this.fileContents = ''
    this.parsedFilePerLine = []
    this.listOfCharPerLine = []
    this.listOfCharCountPerLine = []
    this.charAverage = 0
  }

  readFileContents (inputFileName) {
    let that = this
    fs.readFile(inputFileName, function (err, data) {
      if (err)
      return err

      that.fileContents = data.toString()
      that.parseFileLine()
      that.getListOfCharPerLine()
      that.getCharCountPerLine()
      that.getCharAverage()
      console.log('This file has an average char per line of: ' + that.charAverage)
    })
  }

  parseFileLine () {
    this.parsedFilePerLine = this.fileContents.trim().split('\n')
  }

  getListOfCharPerLine () {
    //this.listOfCharPerLine = this.parsedFilePerLine.map((x) => (x.split('')/*.filter((y)=>(y != ' '))*/))
    this.listOfCharPerLine = this.parsedFilePerLine.map((x) => (x.split('').filter((y)=>(y != ' '))))

  }

  getCharCountPerLine () {
    this.listOfCharCountPerLine = this.listOfCharPerLine.map((x) => (x.length))
  }

  getCharAverage () {
    this.charAverage = this.listOfCharCountPerLine.reduce((sum,x,index,array) => {
      if (index != array.length-1) {
        return sum + x
      } else {
        return (sum + x)/array.length
      }
    })
  }
}
module.exports = CharAverage
