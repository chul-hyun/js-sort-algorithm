function bubbleSort(target) {
    for (let i = target.length ; i >= 0 ; i--) {
        for (let j = 1 ; j < i ; j++) {
            if (target[j - 1] > target[j]) {
                swap(target, j - 1, j)
            }
        }
    }
}

function swap(target, i, j) {
    const temp = target[i]
    target[i] = target[j]
    target[j] = temp
}

module.exports = bubbleSort
