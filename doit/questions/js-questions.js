const log = console.log
/**
 * https://github.com/lydiahallie/javascript-questions
 * 
 */

 /*
01 ************************************************************************

function sayHi() {
  console.log(name);       // undefined
  console.log(age);         // ReferenceError: Cannot access 'age' before initialization
  var name = 'Lydia';
  let age = 21;
}

sayHi();

02 ************************************************************************
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

 
**** 03 ********************************************************************
const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius,     //NaN
};

console.log(shape.diameter());
console.log(shape.perimeter());

************************************************************************


************************************************************************


************************************************************************



*/

var t1 = new Date().getTime()
for (let i = 0; i < 100; i++) {
  for (let j = 0; j < 1000; j++) {
    for (let k = 0; k < 10000; k++) {
    }
  }
}
var t2 = new Date().getTime()
console.log('first time', t2 - t1)

for (let i = 0; i < 10000; i++) {
  for (let j = 0; j < 1000; j++) {
    for (let k = 0; k < 100; k++) {

    }
  }
}
var t3 = new Date().getTime()
console.log('two time', t3 - t2) 