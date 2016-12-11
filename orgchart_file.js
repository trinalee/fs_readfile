'use strict'

class OrgChart {
  constructor(){
    this.fileContents = ''
    this.parsedFile = []
    this.parsedObject = {}
  }

  // readFileContents () {}

  parseFile(){
    this.parsedFile = this.fileContents.trim().split('\n')
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
