
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
    getName: function() { console.log(this.name) },
    getName2: () => { console.log(this.name) },
    getShowName: function () {
        return function () { console.log(this.name)
        }
    }
}
staffA.getName()   //hunter
staffA.getName.call(name)   //hunter
staffA.getName2()   //hunter
staffA.getShowName()()
const sayName = new staffA.getName()
// sayName()
const sayShowName = new staffA.getShowName()
sayShowName()

/* setTimeout Promise

console.log(1)
setTimeout(() => {
    console.log(2)
    Promise.resolve().then(() => {console.log(3)})
    console.log("A")
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
// 1 4 9 7 8
// 2 A 3 5 6
*/
