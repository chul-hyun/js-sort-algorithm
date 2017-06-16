const selectionSort = require('./selectionSort')

onmessage = ({data}) =>{
    selectionSort(data)
    postMessage(true)

    close()
}