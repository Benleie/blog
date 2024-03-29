const log = console.log
/**
 * https://github.com/lydiahallie/javascript-questions
 * 
 */


 
 class Chameleon {
  static colorChange(newColor) {
    this.newColor = newColor;
    return this.newColor;
  }

  constructor({ newColor = 'green' } = {}) {
    this.newColor = newColor;
  }
}

const freddie = new Chameleon({ newColor: 'purple' });
console.log(freddie.colorChange('orange'));



 /*
 ****  ********************************************************************


****  ********************************************************************
****  ********************************************************************



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

**** 04 ********************************************************************
log(+true)          // 1
log('hh' + true)    // hhtrue
log(!'Lydia')      // false

**** 05 ********************************************************************
const bird = {
  size: 'small',
};

const mouse = {
  name: 'Mickey',
  small: true,
};
log(mouse[bird.size]) // true
log(mouse[bird['size']]) // true
// mouse.bird.size // Cannot read property 'size' of undefined

**** 06 ********************************************************************
let c = { greeting: 'Hey!' };
let d = c;
c.greeting = 'Hello';
console.log(d.greeting);

let e = Object.create(c)

log(Object.getPrototypeOf(e) === c)
log(e.__proto__ === c)      // true
// Object.create(null) 创建干净的对象

**** 07 ********************************************************************
let a = 3;
let b = new Number(3);
let c = 3;

console.log(a == b);
console.log(a === b);
console.log(b === c);


*/