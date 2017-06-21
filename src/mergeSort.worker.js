const mergeSort = require('./mergeSort')

onmessage = ({ data }) => {
    mergeSort(data)
    postMessage(true)

    close()
}
