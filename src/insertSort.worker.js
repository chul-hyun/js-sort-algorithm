const insertSort = require('./insertSort')
const getAvgExecutTime = require('./getAvgExecutTime')

onmessage = ({ data }) =>{
    const { len, repeat } = data

    postMessage({ executTime: getAvgExecutTime(insertSort, len, repeat) })

    close()
}