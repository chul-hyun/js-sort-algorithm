function bubbleSort(arr){
    for(let i = arr.length ; i >= 0 ; i--){
        for(let j = 1 ; j < i ; j++){
            if(arr[j - 1] > arr[j]){
                swap(arr, j - 1, j)
            }
        }
    }
}

function swap(arr, i, j){
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

// require('./getAvgExecutTime')(bubbleSort, 10, 3, true)

module.exports = bubbleSort