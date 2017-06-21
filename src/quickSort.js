function quickSort(target) {
    quickSortNested(target, 0, target.length - 1)
}
function quickSortNested(target, left, right) {
    if (left >= right) {
        return
    }

    const pivot = left
    const pivotData = target[pivot]

    let i = left + 1
    let j = right

    while (i !== j) {
        if (target[i] <= pivotData) {
            i++
        } else if (target[j] >= pivotData) {
            j--
        } else {
            swap(target, i, j)
        }
    }

    if (pivotData < target[i]) {
        swap(target, pivot, i - 1)
    } else {
        swap(target, pivot, i)
    }


    quickSortNested(target, left, i - 1)
    quickSortNested(target, i + 1, right)
}

function swap(arr, i, j) {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

module.exports = quickSort
