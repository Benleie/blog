
/*




// 百辰源
let someOne = ['1', '2', '3'].map(parseInt)
console.log(someOne)    // [ 1, NaN, NaN ]
*/

/*console.log(a) // A

console.log(b) // B

console.log(c) // C

function a( ) { }

var b = 1

const c = 2


console.log(1)
setTimeout(() => {
    console.log(2)
}, 0)
new Promise((resolve) => {
    console.log(3)
    resolve()
}).then(() => {
    console.log(4)
})
console.log(5)



const Staff = (name) => {
    this.name = name
}
prototype  constructor  proto



<div style="position: relative;height: 200px;width: 500px;">
    <div style="height: 20px; width: 50px;">
       <div id="target" style="position: absolute;padding-top: 10%;"></div>
    </div>
</div>


function do1 (n) {

   let i = 0

   while (i < n) {

       i++

   }

}

function do2 (n) {

   let i = 1

   while (i <= n) {

       i = i * 2

      do1(n)

   }
}
*/


/*function Staff (name) {

    this.name = name

}



const hunter = new Staff('hunter')
console.log()
console.log()*/


var name = 'chris'
var staffA = {
    name: 'hunter',
    getShowName: function () {
        return function () { console.log(this.name)
        }
    }
}
staffA.getShowName()()


console.log(1)
setTimeout(() => {
    console.log(2)
    Promise.resolve().then(() => {console.log(3)})
}, 0)
new Promise((resolve) => {
    console.log(4)
    setTimeout(() => {
        console.log(5)
    }, 0)
    resolve(6)
}).then((value) => {
    console.log(7)
    setTimeout(() => {
        console.log(value)
    }, 0)
    console.log(8)
})
console.log(9)
// 1 4 9 7 8 2 3 5 6
