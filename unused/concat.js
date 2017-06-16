const utill = require('./utill')
const view = require('./view')

let testNumber = 100000
let source = utill.getRandomNumbers(testNumber)

function concat(){
    let target = utill.getRandomNumbers(testNumber)
    target = target.concat(source)
    //return target
}

function push(){
    let target = utill.getRandomNumbers(testNumber)
    Array.prototype.push.apply(target, source)
    //return target
}

function concatForLoop(){
    let target = utill.getRandomNumbers(testNumber)
    source.forEach((i, val) => target.push(val))
    //return target
}

view.calulateExecTime(concat)
view.calulateExecTime(push)
view.calulateExecTime(concatForLoop)