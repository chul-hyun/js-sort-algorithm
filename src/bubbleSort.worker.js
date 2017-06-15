const bubbleSort = require('./bubbleSort')
const getAvgExecutTime = require('./getAvgExecutTime')

onmessage = ({ data }) =>{
    const { len, repeat } = data

    postMessage({ executTime: getAvgExecutTime(bubbleSort, len, repeat) })

    close()
}