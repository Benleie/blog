let {moduleA} = require('./closure.js')

// let { flag, sum } = require('./commonJs')
// console.log(flag)
// console.log(sum(1,2))
let minus = moduleA.minus
minus()
minus()
console.log(moduleA.minus())
console.log(moduleA)