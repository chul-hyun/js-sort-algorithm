function getRandomNumber(min = 0, max = 20) {
    return min + Math.floor(Math.random() * (max + 1))
}

function getRandomNumbers(len = 20, min = 0, max = 20) {
    const result = []
    for (let i = 0 ; i < len ; i++) {
        result.push(getRandomNumber(min, max))
    }
    return result
}

function arrayEaual(source, target) {
    return source.every((val, i) => val === target[i])
}

function copyArray(source) {
    return source.map(val => val)
}

module.exports = {
    getRandomNumber,
    getRandomNumbers,
    arrayEaual,
    copyArray,
}
