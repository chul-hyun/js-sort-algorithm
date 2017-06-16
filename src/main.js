require('c3/c3.css')
const c3 = require('c3')
const _ = require('lodash')

let lengths = _.range(0, 1001, 100)
const maxExecutTime = 1000 * 5
const repeat = 5
let graph = {
    x : lengths
}
let chart = initChart()
const increase = document.querySelector('#increase')
const excute5more = document.querySelector('#excute5more')

increase.setAttribute('disabled', true)
excute5more.setAttribute('disabled', true)

increase.addEventListener('click', async () => {
    increase.setAttribute('disabled', true)
    excute5more.setAttribute('disabled', true)

    //chart = initChart()
    lengths.push(10000, 50000, 100000, 300000, 500000)
    console.log('lengths', lengths)
    console.log('graph', graph)
    //graph = {
    //    x : lengths
    //}

    for(let i = 0 ; i < 10 ; i++){
        console.log(i)
        await main()
    }
    console.log('graph', graph)

    increase.removeAttribute('disabled')
    excute5more.removeAttribute('disabled')
})

excute5more.addEventListener('click', async () => {
    increase.setAttribute('disabled', true)
    excute5more.setAttribute('disabled', true)
    
    for(let i = 0 ; i < 5 ; i++){
        console.log(i)
        await main()
    }

    increase.removeAttribute('disabled')
    excute5more.removeAttribute('disabled')
})

function initChart(){
    return c3.generate({
        data: {
            x: 'x',
            columns: [ ]
        },
        axis: {
            x: {
                tick: {
                    rotate: 75
                }
            },
            y: {
                tick: {
                    format: (y) => `${y} ms`
                }
            }
        },
        subchart: {
            show: true
        },
        zoom: {
            enabled: true
        },
        "bindto": "#app"
    });
}

const MergeSortWorker = require('./mergeSort.worker.js')
const QuickSortWorker = require('./quickSort.worker.js')
const BubbleSortWorker = require('./bubbleSort.worker.js')
const InsertSortWorker = require('./insertSort.worker.js')
const SelectionSortWorker = require('./selectionSort.worker.js')
const SortWorker = require('./sort.worker.js')

function main(){
    return calculationSort('sort', SortWorker)
        .then(viewGraph)
        .then(syncGraph)
        .then(()=> calculationSort('quick sort', QuickSortWorker))
        .then(viewGraph)
        .then(syncGraph)
        .then(()=> calculationSort('merge sort', MergeSortWorker))
        .then(viewGraph)
        .then(syncGraph)
        .then(()=> calculationSort('insert sort', InsertSortWorker))
        .then(viewGraph)
        .then(syncGraph)
        .then(()=> calculationSort('selection sort', SelectionSortWorker))
        .then(viewGraph)
        .then(syncGraph)
        .then(()=> calculationSort('bubble sort', BubbleSortWorker))
        .then(viewGraph)
        .then(syncGraph)
}

(async ()=>{
    for(i = 0 ; i < repeat ; i++){
        console.log(i)
        await main()
    }

    increase.removeAttribute('disabled')
    excute5more.removeAttribute('disabled')
})()

function calculationSort(name, AlgorithmWorker){
    let pass = false

    return Promise.all(lengths.map(async (len) => {
        if(pass){
            return -1
        }

        let startTime = window.performance.now()
        /*const executTime = */
        let passCheck = await _calculationSort(AlgorithmWorker, len)
        let endTime = window.performance.now()
        let executTime = endTime - startTime

        console.log(executTime)

        if(passCheck < 0){
            pass = true
            return -1
        }
        return executTime
    })).then((executTimes) => {
        return { name, data: executTimes }
    })
}



function _calculationSort(AlgorithmWorker, len){
    return new Promise((resolve) => {
        const worker = new AlgorithmWorker()

        let timeout = setTimeout(()=>{
            worker.terminate()
            resolve(-1)
        }, maxExecutTime)

        worker.postMessage({ len })
        worker.addEventListener('message', ({ data }) => {
            const { executTime } = data
            clearTimeout(timeout)
            worker.terminate()
            resolve(executTime)
        })
    })
}

function viewGraph({ name, data }){
    let originData = graph[name]

    if( originData === undefined ){
        graph[name] = data.map(convertSafeFloat)
        return
    }

    data.map(convertSafeFloat).forEach((val, i) => {
        originData[i] = originData[i] === undefined ? val : parseFloat(((originData[i] + val) / 2).toFixed(5))
    })
}

function convertSafeFloat(val){
    return parseFloat(val.toFixed(5))
}

function divide(diviend, divisor){
    return parseFloat(diviend / divisor)
}

function syncGraph(){
    return new Promise((resolve) => {
        const columns = []

        for(let name in graph){
            const column = [name]
            graph[name].every((val, i) => {
                if(val === undefined || val < 0){
                    return false;
                }
                column[i + 1] = val
                return true;
            })

            columns.push(column)
        }

        chart.load({
            columns,
            done: resolve
        });
    })
}