const quickSort = require('./quickSort')
const getAvgExecutTime = require('./getAvgExecutTime')

onmessage = ({ data }) =>{
    const { len, repeat } = data

    postMessage({ executTime: getAvgExecutTime(quickSort, len, repeat) })

    close()
}
