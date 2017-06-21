function insertSort(target) {
    for (let i = 1 ; i < target.length ; i++) {
        const toIns = target[i]
        let pos = i - 1
        while (pos >= 0 && target[pos] > toIns) {
            target[pos + 1] = target[pos]
            pos--
        }
        target[pos + 1] = toIns
    }
}

module.exports = insertSort
