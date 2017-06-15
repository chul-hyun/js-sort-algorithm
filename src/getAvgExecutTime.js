const view = require('./view')
const utill = require('./utill')

function getAvgExecutTime(sortAlgorithm, len, num = 1, check = false){
    let avgExecutTime = view.calulateExecTimeMulti(sortAlgorithm, (callback)=>{
        let randoms = utill.getRandomNumbers(len, 0, 100000)
        
        if(check){
            var sorted = utill.copyArray(randoms)
            sorted.sort((a, b) => a - b)
        }
        
        callback(randoms)
        
        if(check && !utill.arrayEaual(randoms, sorted)){
            console.log(randoms, sorted)
            throw new Error('sorted fail')
        }
        
    }, num)

    return avgExecutTime
}

module.exports = getAvgExecutTime