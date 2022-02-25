
/*
var name = 'chris'
var staffA = {
    name: 'hunter',
    getName: function() { console.log(this.name) },
    getName2: () => { console.log(this) },
    getArrowName: function () {
        return function() { console.log(this.name)
        }
    },
    getArrowName2: function () {
        return () => { console.log(this.name) }
    },
    getArrowName3: () => {
        return () => { console.log(this.name) }
    }
}
staffA.getName()   //hunter
// staffA.getName.call(name)   //hunter
staffA.getName2()   //hunter
staffA.getArrowName()()
staffA.getArrowName2()()
staffA.getArrowName3()()
// const sayName = new staffA.getName()
// sayName()
*/

/*
// 阮一峰 箭头函数例子
function foo() {
    let that = this;
    // let id = 22;
    setTimeout(() => {
        console.log('id:', this.id);
    }, 100);
    setTimeout(function () {
        console.log('id:', that);
        console.log('id:', this.id); //node与浏览器表现不同
    }, 100)
}

var id = 21;
// foo()
foo.call({ id: 42 });
*/
let objFunc = {
    id: 22,
    func: function () { console.log(this.id) },
    arrow: () => { console.log(this.id) },
    funcReturnFunc: function () {
        return function () {
            console.log(this.id)
        }
    },
    funcReturnArrow: function () {
        return () => console.log(this.id)
    },
    arrowReturnArrow: () => () => console.log(this.id),
    arrowReturnFunc: () => { return function () {console.log(this.id)}}
}
var id = 21
objFunc.func()  // 22
objFunc.arrow()
objFunc.funcReturnFunc()()
objFunc.funcReturnArrow()() // 22
objFunc.arrowReturnArrow()()
objFunc.arrowReturnFunc()()
