## 超高频率的问题 
+ 谈谈闭包
  + 函数作用域的特点：函数内部可以使用函数外部的变量
  + 函数 + 该函数能访问到的外部变量
  + 如果一个函数调用了外部变量,那么就会形成闭包
  + 通过return这个函数 或者，添加到全局变量上，可以让外部访问这个闭包
  + 作用： 隐藏一些变量：在能被间接访问的情况下，防止被随意修改

+ call与apply
  + 都是改变this的指向  `Array.prototype.slice.call(arguments).sort();`
    + 普通函数 this指向函数运行时所在的对象 this可变
    + 箭头函数的this就是定义时上层作用域中的this 固定的
  + call方法接受的是若干个参数列表，而apply接收的是一个包含多个参数的数组。

+ 异步 Promise
  + Promise.all() 接收一组异步任务，然后并行地执行异步任务
    + 如果有一个rejected,则用catch捕获；其他任务仍会执行，但执行结果会被抛弃
    + 如果均为fulfilled，则将各Promise结果组成数组，按照all()接受的顺序（而非执行顺序），返回到then
  + Promise.race()
    + 如果有一个rejected,则用catch捕获；其他任务仍会执行，但执行结果会被抛弃
    + 可用于对超时异步的处理

+ BFC

## JS基础
+ 引擎
  + 构成：内存堆与调用栈
    + 内存堆：这是内存分配发生的地方。当V8引擎遇到变量声明和函数声明的时候，就把它们存储在堆里面。
    + 调用栈callstack：这是你的代码执行时的地方。当引擎遇到像函数调用之类的可执行单元，就会把它们推入调用栈，并维护其对应的stack frame。
    + JS单线程，指的是在JS引擎中，解析执行JS代码的调用栈是唯一的，所有的JS代码都在这一个调用栈里按照调用顺序执行，不能同时执行多个函数。
  + 代码的执行分为：语法检查与运行
    + 词法分析与语法分析   AST
    + 预编译 将生成AST复制到当前执行的上下文中 此处发生函数整体提升和变量声明提升

+ 继承和原型
  + ES6中的class关键字只是语法糖，JS依然是基于原型的 (MDN)(https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
    
## es6
+ let var
  + 作用域不同： var声明的变量在全局作用域内都有效，let只在对应块级作用域有效
  + var会变量提升，在声明之前即可访问undefined; 而let有暂时性死区，声明前使用会报错
  + let不允许重复声明
  + var声明的全局变量，作为顶层对象的属性，如浏览器的window,node的global；let则不然
+ Reflect和Proxy


## Object与Reflect
+ 不可枚举
  + 默认true 可以通过Object.defineProperty() 设置enumetable属性
  + for in 与Object.keys()不能捕获到不可枚举属性
  + Object.getOwnPropertyNames()  Reflect.ownKeys()

## primitive
+ String
  + 基本字符串值 与 字符串对象
    + 基本字符串值需要调用字符串对象的方法时，JS会自动转换
    + eval会产生不同结果
    + eval的参数不是字符串， eval会将参数原封不动地返回。
  ```js
  let str1 = String('0')
  let str2 = '0'
  let str3 = new String('0')
  log(str1 === str2)
  log(str3 === str1)    // false
  log(str3.valueOf() === str1)
  log(str3.toString() === str1)
  log(str3 == str1)
  ```

## 引用类型
```js
let stack = [1,2,3]
let arr3 = []
arr3.push(stack)
arr3.push(stack.slice(0))
stack.push(4)
console.log(arr3)         [[1,2,3,4], [1,2,3]]
```


















### HTML5 为什么只需要写 <!DOCTYPE HTML>
+ HTML 4.01 中的 doctype 需要对 DTD 进行引用，因为HTML4.01 基于 SGML。而 HTML5不基于SGML，因此不需要对 DTD 进行引用，但是需要 doctype来确定渲染模式。

+ HTML 4.01共有三种DTD:Strict,Transitional,Frameset

+ HTML5的声明和4.01的strict声明---按照标准模式渲染；没有文档声明或者4.01的TF,FF声明---按照quirk模式渲染。

+ 可以通过document.compatMode查看。BackCompat为混杂模式，CSS1Compat为标准或准标准模式。

+ 实现向后兼容，(方便UA检测)开启标准渲染模式或者怪异模式.

+ 浏览器UA  JS客户端检测 用户代理检测  document.compatMode  navigator.userAgent
