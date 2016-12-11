'use strict'

const OrgChart = require('./orgchart_file')

let orgChart = new OrgChart()
orgChart.inputFile = './data/orgchart_file.txt'
orgChart.readLogFile((err, data)=>{
  orgChart.logData = data
  orgChart.parseFile()
  orgChart.convertToObjects()
})
