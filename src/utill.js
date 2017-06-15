function getRandomNumber(min = 0, max = 20) {
	return min + Math.floor(Math.random() * (max+1))
}

function getRandomNumberPromise(min = 0, max = 20) {
    return new Promise((resolve) => {
        resolve(getRandomNumber(min, max))
    })
}

function getRandomNumbers(len = 20, min = 0, max = 20) {
    let result = []
    for(let i = 0 ; i < len ; i++){
        result.push(getRandomNumber(min, max))
    }
    return result
    //return Array(len).fill(0).map(() => getRandomNumber(min, max)) // 더 느림.
}

function arrayEaual(source, target){
    return source.every((val, i) => val === target[i])
}

function copyArray(source){
    return source.map((val) => val)
}

module.exports = {
    getRandomNumber,
    getRandomNumbers,
    arrayEaual,
    copyArray
}