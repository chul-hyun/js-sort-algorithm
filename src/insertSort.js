function insertSort(arr){
    for(var i = 1 ; i < arr.length ; i++){
        var val = arr[i]
        var j = i - 1
        while(j >= 0 && arr[j] > val){
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = val
    }
}

//require('./getAvgExecutTime')(insertSort, 10, 3, true)

module.exports = insertSort