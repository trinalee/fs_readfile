const expect = require('chai').expect
var fs = require('fs')
const LogParser = require('../logparser')

describe('readFile test', () => {
  it('read test', () => {

    let logparser = new LogParser()
    logparser.logData = mockLog //helper method
    logparser.parseLog()
    expect(logparser.listData).to.eql([{date:'2014-05-10', logLevel:' WARN'}, {date:'2014-05-11', logLevel:' INFO'},{date:'2014-05-10', logLevel:' WARN'}, {date:'2014-05-11', logLevel:' INFO'}, {date:'2014-05-10', logLevel:'DEBUG'}])
  })
})
describe('listDate function', () => {
  it('returns a list of unique dates', () => {

    let logparser = new LogParser()
    logparser.logData = mockLog //helper method
    logparser.parseLog()
    logparser.listDates()
    expect(logparser.listUniqueDates).to.eql(['2014-05-10', '2014-05-11'])
  })
})

describe('msgPerDate function', () => {
  it('returns a count of messages per date', () => {

    let logparser = new LogParser()
    logparser.logData = mockLog //helper method
    logparser.parseLog()
    logparser.msgPerDate()
    expect(logparser.countMsgPerDate).to.eql({'2014-05-10':3, '2014-05-11':2})
  })
})

describe('msgPerDatePerLogLevel function', () => {
  it('returns a count of logLevels per date', () => {

    let logparser = new LogParser()
    logparser.logData = mockLog //helper method
    logparser.parseLog()
    logparser.logLevelPerDate()
    expect(logparser.countlogLevelPerDate).to.eql({'2014-05-10  WARN':2, '2014-05-11  INFO':2,'2014-05-10 DEBUG':1})
  })
})

let mockLog = "W, [2014-05-10T13:49:19.049260 #83516]  WARN -- : deliver B2C systems\nW, [2014-05-11T13:49:19.049408 #83516]  INFO -- : transition sticky bandwidth\nW, [2014-05-10T13:49:19.049260 #83516]  WARN -- : deliver B2C systems\nW, [2014-05-11T13:49:19.049408 #83516]  INFO -- : transition sticky bandwidth\nD, [2014-05-10T14:48:19.093626 #85971] DEBUG -- : maximize proactive e-business"
