
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

