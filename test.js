/*


*/
const pattern = /^(((13|18)[0-9]{9})|(14[05679][0-9]{8})|(15[012356789][0-9]{8})|(16[2567][0-9]{8})|(17[01235678][0-9]{8})|(19[189][0-9]{8}))$/
console.log(pattern.test('15071297655'))





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


