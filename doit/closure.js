let a = 10;
// 实现变量a自增 
// 难点在于你不知道全局作用域是不是还有一个同名变量a


function Add3(){
  let a = 10;
  return function(){
      a++;
    //   console.log(a)
      return a;
  };
};
var cc =  Add3();
cc()
cc()
// console.log(cc())
// console.log(a);


/* function Add2(){
    var a = 10;
    a++;
    console.log(a);
}
Add2();
Add2();
Add2();
console.log(a); */

/* function Add(){
    a++;
    console.log(a);
}
Add();
Add();
Add(); */

/* let moduleA = (function(){
	var flag = true
	let count = 22
	function sum(a, b) {
		return a + b
	}
	function minus() {count--}
	return {
		flagggg: flag,
		sum,
		add: function() {count++},
		minus,
		count
	}
})();
console.log(moduleA.flag = false)
moduleA.minus()
moduleA.minus()
console.log(moduleA) */


// https://zhuanlan.zhihu.com/p/25855075
/* for (var i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(new Date, i);
    }, 1000);
}
console.log(new Date, i);
 */
/* for(var i = 0; i < 5; i++) {
    (function(j) { // j=i
        setTimeout(function(){console.log(new Date, j)}, 1000)
    })(i)
}
console.log(new Date, i) */


// https://zhuanlan.zhihu.com/p/158430253
// 静态的词法作用域
var name = "A"
function showName() {
    console.log(name)
}
function changeName() {
    var name = 'B'
    showName()
}
changeName()

/* for (let i = 0; i < 5; i++) { // not var
    setTimeout(function() {
        console.log(new Date, i);
    }, 1000);
}

var arr = [];
for (var i = 0; i < 10; i++) {
    arr[i] = function () {
        console.log(i);
    };
}
arr[6]();  // 10
 */


/* // 变量提升
var tmp = new Date();
function f() {
  console.log(tmp);
  if(true) {
    var tmp = 'hello world';
  }
}
f(); 


if(!('c' in window)) {
   var c = 100
   };
console.log(c)  // undefined

*/

console.log(globalThis)