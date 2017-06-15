
function quickSort(arr){
    _quickSort(arr, 0, arr.length - 1)
}
function _quickSort(arr, left, right){
    if(left >= right){
        return
    }

    let pivot = getPivot(arr, left, right)

    let i = left
    let j = right

    while(i !== j){
        if(i === pivot || arr[i] <= arr[pivot]){
            i++
            continue
        }

        if(j === pivot || arr[j] >= arr[pivot]){
            j--
            continue
        }

        swap(arr, i, j)
    }

    if(arr[pivot] < arr[i]){
        swap(arr, pivot, i - 1)
    }else{
        swap(arr, pivot, i)
    }
    

    _quickSort(arr, left, i - 1)
    _quickSort(arr, i + 1, right)
}

function swap(arr, i, j){
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp 
}

function getPivot(arr, left, right){
    return left
}

module.exports = quickSort