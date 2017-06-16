const sort = require('./sort')

onmessage = ({data}) =>{
    sort(data)
    postMessage(true)

    close()
}