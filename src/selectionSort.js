function selectionSort(target) {
    const len = target.length
    const end = len - 1
    for (let i = 0 ; i < end ; i++) {
        const minIndex = min(target, i, end)
        swap(target, i, minIndex)
    }
}

function min(target, start, end) {
    let index = start

    for (let i = end + 1 ; i > start ; i--) {
        if (target[i] < target[index]) {
            index = i
        }
    }

    return index
}

function swap(target, i, j) {
    const temp = target[i]
    target[i] = target[j]
    target[j] = temp
}

module.exports = selectionSort
