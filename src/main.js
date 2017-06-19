require('c3/c3.css')
const c3 = require('c3')
const _ = require('lodash')
const utill = require('./utill')

const MergeSortWorker = require('./mergeSort.worker.js')
const QuickSortWorker = require('./quickSort.worker.js')
const BubbleSortWorker = require('./bubbleSort.worker.js')
const InsertSortWorker = require('./insertSort.worker.js')
const SelectionSortWorker = require('./selectionSort.worker.js')
const SortWorker = require('./sort.worker.js')

const runOneMore = document.querySelector('#runOneMore')

let lengths = []
const MAX_EXECUTE_TIME = 1000 * 5
let graph = {
    x : lengths
}

let chart

(async ()=>{
    await loadedWorker()
    init(100, 10000, 1)
    registEvent()
})()

async function loadedWorker(){
    document.querySelector('body').style.visibility = 'hidden'
    await init(3, 4, 1)
    await main()
    document.querySelector('body').style.visibility = null
}

function registEvent(){
    [1000, 10000, 1000000, 100000000].forEach((num) => {
        document.querySelector(`#range${num}`)
            .addEventListener('click', () => init(10, num, 1))
    })

    const runOneMoreDOM = document.querySelector('#runOneMore')

    runOneMoreDOM.addEventListener('click', async () => {
        toogleUI(async() => {
            await main()
        })
    })
}

async function toogleUI(callback){
    const controllers = document.querySelectorAll('.controller')

    controllers.forEach((ele) => ele.setAttribute('disabled', true))
    
    await callback()

    controllers.forEach((ele) => ele.removeAttribute('disabled'))
}


async function init(start, end, repeat){
    toogleUI(async() => {
        _.range()
        chart = initChart()
        lengths = _.range(start, end + 1, Math.floor((end - start) / 10))
        graph = {
            x : lengths
        }

        for(let i = 0 ; i < repeat ; i++){
            console.log(i)
            await main()
        }
    })
}

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

function main(){
    const numbersByLen = lengths.map((len) => utill.getRandomNumbers(len, 0, 100000000))
    
    return calculationSort('sort', SortWorker, numbersByLen)
        .then(viewGraph)
        .then(syncGraph)
        .then(()=> calculationSort('quick sort', QuickSortWorker, numbersByLen))
        .then(viewGraph)
        .then(syncGraph)
        .then(()=> calculationSort('merge sort', MergeSortWorker, numbersByLen))
        .then(viewGraph)
        .then(syncGraph)
        .then(()=> calculationSort('insert sort', InsertSortWorker, numbersByLen))
        .then(viewGraph)
        .then(syncGraph)
        .then(()=> calculationSort('selection sort', SelectionSortWorker, numbersByLen))
        .then(viewGraph)
        .then(syncGraph)
        .then(()=> calculationSort('bubble sort', BubbleSortWorker, numbersByLen))
        .then(viewGraph)
        .then(syncGraph)
}

async function calculationSort(name, AlgorithmWorker, numbersByLen){
    let pass = false
    let len = numbersByLen.length
    let executTimes = []

    for(let i = 0 ; i < len ; i++){
        let numbers = numbersByLen[i]

        const executTime = await _calculationSort(AlgorithmWorker, numbers)

        if(executTime < 0){
            break
        }
        
        executTimes.push(executTime)
    }

    return { name, data: executTimes }
}

function _calculationSort(AlgorithmWorker, numbers){
    return new Promise((resolve) => {
        const worker = new AlgorithmWorker()

        let timeout = setTimeout(()=>{
            worker.terminate()
            resolve(-1)
        }, MAX_EXECUTE_TIME)

        let startTime = window.performance.now()

        worker.postMessage(numbers)
        worker.addEventListener('message', () => {
            let endTime = window.performance.now()
            let executTime = endTime - startTime

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
        originData[i] = originData[i] === undefined ? val : parseFloat(convertSafeFloat((originData[i] + val) / 2))
    })
}

function convertSafeFloat(val){
    return parseFloat(val.toFixed(5))
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