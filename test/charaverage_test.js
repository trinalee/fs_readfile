'use strict'

const expect = require('chai').expect
const CharAverage  = require('../charaverage')

describe('Given an input file', () => {
  describe('When parsedFilePerLine is called then', () => {
    it('should return an array of lines', () => {
      let charAverage = new CharAverage()
      charAverage.fileContents = mockFile
      charAverage.parseFileLine()
      expect(charAverage.parsedFilePerLine).to.eql(['Hi World','Rock on'])
    })
  })

  describe('When getListOfCharPerLine is called then', () => {
    it('should return an arrays of lines, each line being an array of chars per line', () => {
      let charAverage = new CharAverage()
      charAverage.fileContents = mockFile
      charAverage.parseFileLine()
      charAverage.getListOfCharPerLine()
      expect(charAverage.listOfCharPerLine).to.eql([['H', 'i', 'W', 'o', 'r', 'l', 'd'],['R', 'o','c','k', 'o', 'n']])
    })
  })
  describe('When getCharCountPerLine is called then', () => {
    it('should return an arrays of char count per line', () => {
      let charAverage = new CharAverage()
      charAverage.fileContents = mockFile
      charAverage.parseFileLine()
      charAverage.getListOfCharPerLine()
      charAverage.getCharCountPerLine()
      expect(charAverage.listOfCharCountPerLine).to.eql([7, 6])
    })
  })
  describe('When getAverage is called then', () => {
    it('should return the average of characters per line in a file', () => {
      let charAverage = new CharAverage()
      charAverage.fileContents = mockFile
      charAverage.parseFileLine()
      charAverage.getListOfCharPerLine()
      charAverage.getCharCountPerLine()
      charAverage.getCharAverage()
      expect(charAverage.charAverage).to.equal(6.5)
    })
  })


})

let mockFile = 'Hi World\nRock on'
