'use strict'


var fs = require('fs'); // load fs module

class LogParser {
  constructor()
  {
    this.logData = ''
    this.listData = []
    this.listUniqueDates = []
    this.countMsgPerDate = {}
    this.countlogLevelPerDate = {}
    this.inputFile = './data/production.log'

  }

  readLogFile(callback)
  {
    //let that = this
    fs.readFile(this.inputFile, function (err, data) {
      if (err)
      return err
      if (callback) {
        callback(null, data.toString())
      }
      ///that....
    })
  }

  parseLog()
  {
    this.listData = this.logData.toString().trim().split('\n').map((x)=>{return {date : x.substring(4, 14), logLevel : x.substring(39, 44)}})
  }

  listDates()
  {
    this.listData.forEach((x) => {
      if (!this.listUniqueDates.includes(x.date)) {
        this.listUniqueDates.push(x.date)
        console.log(x.date)
      }
    })
  }

  msgPerDate()
  {
    this.listData.forEach((x) => {
      if(!this.countMsgPerDate[x.date])
      this.countMsgPerDate[x.date] = 1
      else
      this.countMsgPerDate[x.date] += 1
    })

    for(let prop in this.countMsgPerDate){
      console.log(prop + ': ' + this.countMsgPerDate[prop])
    }
  }

  logLevelPerDate()
  {
    this.listData.forEach((x) => {
      let newKey = x.date + ' '+x.logLevel
      if(!this.countlogLevelPerDate[newKey])
      this.countlogLevelPerDate[newKey] = 1
      else
      this.countlogLevelPerDate[newKey] += 1
    })
    for(let prop in this.countlogLevelPerDate){
      console.log(prop + ': ' + this.countlogLevelPerDate[prop])
    }
  }
}



module.exports = LogParser
