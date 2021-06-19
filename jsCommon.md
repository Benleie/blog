## Array
+ 产生新数组
	+ contat()
	+ join()
	+ slice() 截取数组的一部分产生新数组，shallow copy
+ 

## String

## Object
+ Object.keys(obj) 返回包含数组属性的字符串数组

## 正则表达式
分组捕获

### 方法
+ regexp.test(str)  `/^[a-zA-Z][a-zA-Z_0-9]{4,19}$/.test("a111111")`
+ regexp.exec(str)   `/\s(\S*)/g.exec("ABAR 200fff")`
+ str.match(regexp)  `"ABAR 200fff".match(/\s(\S*)/g`
	+ 如果使用g标志，则将返回与完整正则表达式匹配的所有结果`Array`，但不会返回捕获组，或者未匹配null
	+ 如果未使用g标志，则仅返回第一个完整匹配及其相关的捕获组`Array`  等同于`regexp.exec(str)`
+ str.replace(regexp) `'B123BabcB'.replace(/^B./g,'X')`

## ES6
+ const Object.freeze()
+ 函数的拓展
	+ 函数参数的默认值
	```js
	function log(x, y = 'World') {
		console.log(x, y);
	}
	log('Hello') // Hello World
	```
	+ 尾递归优化








## problems
+ 