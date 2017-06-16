const quickSort = require('./quickSort')

onmessage = ({data}) =>{
    quickSort(data)
    postMessage(true)

    close()
}