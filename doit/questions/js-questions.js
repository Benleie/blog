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

function Timer() {
  this.s1 = 0;
  this.s2 = 0;
  // 箭头函数
  setInterval(() => this.s1++, 1000);
  // 普通函数
  setInterval(function () {
    // console.log(this)
    this.s2++;
  }, 1000);
}

var timer = new Timer();

setTimeout(() => console.log('s1: ', timer.s1), 3100);
setTimeout(() => console.log('s2: ', timer.s2), 3100);