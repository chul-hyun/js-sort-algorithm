const selectionSort = require('./selectionSort')
const getAvgExecutTime = require('./getAvgExecutTime')

onmessage = ({ data }) =>{
    const { len, repeat } = data

    postMessage({ executTime: getAvgExecutTime(selectionSort, len, repeat) })

    close()
}
