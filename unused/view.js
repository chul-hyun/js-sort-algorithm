function calulateExecTime(callback, ...args){
    let startTime = +(new Date())
    let result = callback.apply(undefined, args)
    let endTime = +(new Date())
    let execTime = endTime - startTime

    return [result, execTime]
}

function printExecTime(callback, ...args){
    let [result, execTime] = calulateExecTime(callback, ...args)
    
    console.log('걸린시간', `${execTime}ms`)
    
    return [result, execTime]
}

function printDetailExecTime(callback, ...args){
    console.log('입력', args)
    
    let [result, execTime] = calulateExecTime(callback, ...args)
    
    console.log('출력', result)
    console.log('걸린시간', `${execTime}ms`)
    
    return [result, execTime]
}

function calulateExecTimeMulti(callback, exewrapCallback, executNum){
    let execTimes = []
    for(let i = 0 ; i < executNum ; i++){
        exewrapCallback((...args) => {
            let [result, execTime] = calulateExecTime(callback, ...args)
            execTimes.push(execTime)
            return result;
        })
    }
    let sum = execTimes.reduce((sum, execTime) => sum + execTime, 0)
    return sum / executNum
}

module.exports = {
    calulateExecTime,
    printExecTime,
    printDetailExecTime,
    calulateExecTimeMulti
}