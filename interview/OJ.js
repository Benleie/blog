
// OD 二面
let filterArr = (arr) => {
    const map = new Map()
    const res = []
    for (let value of arr) {
        map.set(value, map.has(value) ? map.get(value) + 1 : 1)
    }
    for (let [value, index] of map) {
        if (index > 1) {
            res.push(value)
        }
    }
    return res
}
// console.log(filterArr([1, 2, 3, 3, 4, 5, 5, 6]))

let filterArrBySort = (arr) => {
    arr.sort((a, b) => a - b)

    let res = []
    let temp = arr[0] - 1;
    let isUsed = false;
    for (let value of arr) {
        // 如果和前一项重复，加入返回数组，并更新temp,并上锁
        if (value === temp && !isUsed) {
            res.push(value)
            isUsed = true
        } else {
            temp = value
            isUsed = false
        }
    }
    return res
}
// console.log(filterArrBySort([4,2.1,5,2.1,1.5,1.5,3,5]))

