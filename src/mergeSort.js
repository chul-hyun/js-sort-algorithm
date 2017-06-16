function mergeSort(arr){
    divide(arr, 0, arr.length - 1)
}

function divide(arr, leftStart, rightEnd){
    if(leftStart < rightEnd){
        let leftEnd = Math.floor((leftStart + rightEnd)/2)
        let rightStart = leftEnd + 1

        divide(arr, leftStart, leftEnd)
        divide(arr, rightStart, rightEnd)
        _mergeSort(arr, leftStart, leftEnd, rightStart, rightEnd)
    }
}

function _mergeSort(arr, leftStart, leftEnd, rightStart, rightEnd){
    let leftIndex = leftStart
    let rightIndex = rightStart

    let NumOfItemsToSort = rightEnd - leftStart + 1
    let result = []

    for(let i = 0 ; i < NumOfItemsToSort ; i++){
        if(arr[leftIndex] < arr[rightIndex]){
            result.push(arr[leftIndex])
            leftIndex++
        }else{
            result.push(arr[rightIndex])
            rightIndex++
        }

        if(leftIndex > leftEnd){
            if(rightIndex <= rightEnd){
                Array.prototype.push.apply(result, arr.slice(rightIndex, rightEnd + 1))
            }
            break;
        }else if(rightIndex > rightEnd){
            if(leftIndex <= leftEnd){
                Array.prototype.push.apply(result, arr.slice(leftIndex, leftEnd + 1))
            }
            break;
        }
    }
    
    result.forEach((val, i) => {
        arr[leftStart + i] = val
    })
    
    //replace(arr, leftStart + 1, result)
}

function replace(target, start, newItems){
    let args = []
    args.push(start)
    args.push(newItems.length + 1)
    Array.prototype.push.apply(args, newItems)
    Array.prototype.splice.apply(target, args)
}


module.exports = mergeSort