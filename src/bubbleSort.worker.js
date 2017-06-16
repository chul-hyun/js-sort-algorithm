const bubbleSort = require('./bubbleSort')

onmessage = ({data}) =>{
    bubbleSort(data)
    postMessage(true)

    close()
}