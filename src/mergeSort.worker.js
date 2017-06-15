const mergeSort = require('./mergeSort')
const getAvgExecutTime = require('./getAvgExecutTime')

onmessage = ({ data }) =>{
    const { len, repeat } = data

    postMessage({ executTime: getAvgExecutTime(mergeSort, len, repeat) })

    close()
}