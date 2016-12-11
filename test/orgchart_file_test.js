'use strict'

const expect = require('chai').expect
const OrgChart = require('../orgchart_file')

describe('Given an orgchart file', ()=> {
  describe('When the parse file method is invoked', ()=> {
    it('should return a list of names', ()=> {
      let orgChart = new OrgChart()
      orgChart.fileContents = mockFile
      orgChart.parseFile()
      expect(orgChart.parsedFile).to.eql(['Trina',' Anthony', ' Gabe', ' Sophia', 'Leles', ' Dodie'])
    })
  })

  describe('When the parse file method is invoked', ()=> {
    it('should return an object of names', ()=> {
      let orgChart = new OrgChart()
      orgChart.fileContents = mockFile
      orgChart.parseFile()
      orgChart.convertToObjects()
      expect(orgChart.parsedObject).to.eql({'Trina': ['Anthony', 'Gabe', 'Sophia'], 'Leles': ['Dodie']})
    })
  })

})

let mockFile = 'Trina\n Anthony\n Gabe\n Sophia\nLeles\n Dodie'
