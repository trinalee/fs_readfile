'use strict'

const LogParser = require('./logparser')

let logParser = new LogParser()

logParser.readLogFile((err, data)=>{
  logParser.logData = data
  logParser.parseLog()
  logParser.listDates()
  logParser.msgPerDate()
  logParser.logLevelPerDate()
})
