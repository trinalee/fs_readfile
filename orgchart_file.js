'use strict'

const LogParser = require('./logparser')
class OrgChart extends LogParser {
  constructor(){
    super()
    this.parsedFile = []
    this.parsedObject = {}
  }

  // readFileContents () {}

  parseFile(){
    this.parsedFile = this.logData.trim().split('\n')
  }

  convertToObjects (){
    let currentM = ''
    let currentE = []

    this.parsedFile.forEach((x) => {
      if (x.substring(0,1) != ' ') {
        currentM = x
        currentE = []
      } else {
        currentE.push(x.trim())
        this.parsedObject[currentM] = currentE
      }
    })
  }

}

module.exports = OrgChart
