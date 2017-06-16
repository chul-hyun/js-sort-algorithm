const insertSort = require('./insertSort')

onmessage = ({data}) =>{
    insertSort(data)
    postMessage(true)

    close()
}