function selectionSort(arr){
    const len = arr.length
    const end = len - 1
    for(let i = 0 ; i < end ; i++){
        let minIndex = min(arr, i, end)
        swap(arr, i, minIndex)
    }
    
}

function min(arr, start, end){
    let index = start

    for(let i = end + 1 ; i > start ; i--){
        if(arr[i] < arr[index]){
            index = i
        }
    }

    return index
}

function swap(arr, i, j){
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp 
}

// require('./getAvgExecutTime')(selectionSort, 10, 3, true)

module.exports = selectionSort