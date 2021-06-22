/*


*/
// const pattern = /^(((13|18)[0-9]{9})|(14[05679][0-9]{8})|(15[012356789][0-9]{8})|(16[2567][0-9]{8})|(17[01235678][0-9]{8})|(19[189][0-9]{8}))$/
// console.log(pattern.test('15071297655'))

//https://www.showmebug.com/pads/IABDEU

/* let n = 55,
		index = -1,
		current = 1,
		i = 1,
		arr = []
for(i; current <= n; i++){
	arr.push(current)
	current += i
}
if(n == current) index = i
console.log(current)
console.log(index)
console.log(arr) */

// console.log([1] == '1')
// console.log(+0 === -0)
// console.log(new Boolean(false) == false)
// console.log(new Boolean(false) == new Boolean(false))

// const image = 'ba by.JPG'
// console.log(image.match(/(\S*)\./))
// console.log(new Date().getTime().toString().substring(7))


/* console.log('call stack')
async function sss(){
	
	await setTimeout(() => {
		console.log('setTimeout')
	});
	console.log('sss')
}
sss() */

/* 
async function async1() {
	console.log("async1 start");
	await  async2();
	console.log("async1 end");
}
async  function async2() {
	console.log( 'async2');
}
console.log("script start");
setTimeout(function () {
	console.log("settimeout");
},0);
async1();
new Promise(function (resolve) {
	console.log("promise1");
	resolve();
}).then(function () {
	console.log("promise2");
});
console.log('script end'); 
*/


/* var arr = [1,2,3,4,4,2,2,6,9,1,0];
var obj = {};
arr.forEach((e,i)=>{ //把arr的信息统计到obj里面
    if(obj[e]===undefined){ //其实是利用对象属性是否存在做了一层遍历
        obj[e] = 1
    }else{
        obj[e]++
    }
});
console.log(Object.keys(obj).map(key => +key))
const res = new Map()
console.log(arr.filter((a) => !res.has(a) && res.set(a, 1)))
 */
/*console.log("abcdefg")
let str = "abcdefg"
// console.log("abcdefg".indexOf('efgd'))
console.log(str.substr(str.indexOf('def'),3))

var reg = /^[a-zA-Z][a-zA-Z_0-9]{4,19}$/;
let arr = [
	"a1a__a1a__a1a__a1a__",
	"aaaaa",
	'a1',
	"a111111",
	"1a111111"
]
// console.log(arr.filter(str => reg.test(str)))

for (key of arr) {
	if(reg.test(key))
		console.log(key)
}*/


// console.log(reg.test("a1a__a1a__a1a__a1a__"))










// let str = 
// console.log("aBc3sc6".replace(/[^abc]/ig,'X'))
//  小数点表示换行符除外，在string中可以理解为始末端的字符
// console.log('B123BabcB'.replace(/B./g,'X'))  //X23XbcB
// console.log('B123BabcB'.replace(/.B/g,'X'))  //B123XabcX'

/*
console.log('B123BabcB'.replace(/^B/g,'X'))  //X123BabcB
console.log('B123BabcB'.replace(/^B./g,'X'))  //X23BabcB
console.log('B123BabcB'.replace(/^B../g,'X'))   //X3BabcB
console.log('')
console.log('B123BabcB'.replace(/B$/g,'X'))  //B123BabcX
console.log('B123BabcB'.replace(/.B$/g,'X'))  //B123BabX
console.log('B123BabcB'.replace(/..B$/g,'X'))  //B123BaX
*/


/*
 */
// https://juejin.cn/post/6844903496253177863#heading-0
/* 
var name = "windowsName";
var a = {
		name : 'Cherry',
		// name: "Cherry",
		fn : function () {
				console.log(this.name);
		}
}

a.fn()   // Cherry
var f = a.fn;
f();		// undefined

 */
/* 
var name = "windowsName";
function fn() {
		var name = 'Cherry';
		innerFunction();
		function innerFunction() {
				console.log(this.name);     
		}
}
fn()    // undefined
 */


var name = "windowsName";
var a = {
		name: "Cherry",
		func1() {
				console.log(this.name)     
		},
		func2: function () {
				// 定义生效是在func2函数生成时，但是真正执行是在100毫秒之后，执行时this指向全局对象window
				setTimeout(function () {
						this.func1()
				},100);
		},
		func3: function() {
			setTimeout(() => {
				this.func1()
			}, 100)
		},
		func4: function() {
			let _this = this
			setTimeout(function() {
				_this.func1()
			}, 100);
		},
		// Callback must be a function. Received undefined
		funcCall: function() {
			setTimeout(function() {
				this.func1()
			}.call(a), 100);
		},
		

};

// a.func2()     // this.func1 is not a function
a.func3()      // Cherry
a.func4();
// a.func7()



// 判断是不是一个数组
// 判断对象类型
let num = new Number(123)
let num2 = 123
console.log(Object.prototype.toString.call(num))
console.log(num instanceof Number)
// console.log(num.constructor)   // [Function: Number]