function mergeSort(target) {
    divide(target, 0, target.length - 1)
}

function divide(target, leftStart, rightEnd) {
    if (leftStart < rightEnd) {
        const leftEnd = Math.floor((leftStart + rightEnd) / 2)
        const rightStart = leftEnd + 1

        divide(target, leftStart, leftEnd)
        divide(target, rightStart, rightEnd)
        mergeSortedArray(target, leftStart, leftEnd, rightStart, rightEnd)
    }
}

function mergeSortedArray(target, leftStart, leftEnd, rightStart, rightEnd) {
    let leftIndex = leftStart
    let rightIndex = rightStart

    const resultLength = rightEnd - leftStart + 1
    const result = []

    for (let i = 0 ; i < resultLength ; i++) {
        if (target[leftIndex] < target[rightIndex]) {
            result.push(target[leftIndex])
            leftIndex++
        } else {
            result.push(target[rightIndex])
            rightIndex++
        }

        if (leftIndex > leftEnd) {
            if (rightIndex <= rightEnd) {
                Array.prototype.push.apply(result, target.slice(rightIndex, rightEnd + 1))
            }
            break;
        } else if (rightIndex > rightEnd) {
            if (leftIndex <= leftEnd) {
                Array.prototype.push.apply(result, target.slice(leftIndex, leftEnd + 1))
            }
            break;
        }
    }

    result.forEach((val, i) => {
        target[leftStart + i] = val
    })
}

module.exports = mergeSort
