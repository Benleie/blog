# 2022.02
## OD一面
+ 翻转元音字母 栈
+ 栈与队列，DFS与BFS的实现
+ 回流
+ 操作DOM需要注意的点
+ 怎样修改选中区域的样式 动态style与动态class
+ react用得多不多
+ ES6新特性 
  + 数组扩展的方法 
  + Promise all与race
  + class类 面向对象  写得类多不多
  + module模块加载
+ 功能和样式哪个写得多
+ 项目亮点
  + 生成器数据流动是怎样
  + 公共组件需要什么  注意传参

## 有信科技
+ 笔试题 函数改变引用类型与普通变量
+ 25匹马
+ css 画三角形，画半圆弧
+ sass 变量 护肤

## 省信息安全测评中心
+ 前端工程化
+ webpack与vite
+ 能否自己搭一套 表单生成器

## 智汀科技
+ 怎样检测页面元素是否在当前视窗内
+ 图片懒加载
+ 后端返回大量数据，前端如何处理  前端分页、节点复用
+ 随机打乱52张牌


## 同城艺龙
+ css 清除浮动
+ 数组去重
+ 深拷贝
+ 箭头函数与普通函数区别
+ http缓存
+ vue双向绑定
+ react diff算法
+ react setState() 同步移步
+ promise all与race的区别
+ 自定义promise 实现红绿灯

## 明通科技
+ 浏览器显示12px字体 transform
+ js判断变量类型 typeof, instanceof, Object.prototype.toString.call
+ js继承

## 德赛西威 
+ 面试偏后端，websocket
+ TS中用哪个关键字定义类型
  + type interface
+ TS的基本类型

## 璟云
+ js哪些操作会造成内存泄漏
+ js实现继承的方式
+ js实现一个快排
+ js输入一个数组，每秒打印一个元素
+ 事件委托是啥，如何实现
+ css有哪些伪类


## 云链协作
+ 介绍下表单生成器项目，拖拽渲染是怎样实现的
+ v-for key为什么不能是index
+ vue混入，angular依赖注入
+ BFC
+ 介绍下flex
+ 怎样定位解决页面卡顿问题
+ 介绍下TS类型
+ rem与em的区别

# 2022.01
## 哈希网络
+ 电脑声音比较小，切换成手机
+ 反转字符串

## 01.25 电话面试
+ 印象深刻的问题
+ promise与setTimeout
+ 页面加载慢，优化方案
+ Egg.js的多进程
+ Webpack loader与plugin的区别
### 两个字符串求交集；包含重复元素求交集

## 数源智汇
+ 路由懒加载
+ 滚动加载 前端分页
+ flex第二行怎么正常显示
+ 怎样实现垂直方向自适应
+ css动画性能
+ vue路由守卫 权限
+ echarts复杂图表
+ 微信登录

## 网易游戏 质量保障中心
+ 项目聊得比较多
+ undefined 与 null的区别
+ 假值有哪些？
+ HTTP常用字段？
+ RxJS与promise的区别
### Git如何回退已提交的代码
### 用TypeScript的好处
### GET和POST的区别
### 前端跨域


## 企业微信
### 笔试题
1. 数组中出现次数最多的对象
2. 数组对象位置的等概率调换

## 中电金信 汇丰银行
+ 英语自我介绍
+ tcp三次握手
+ url到页面渲染发生了什么
+ angular数据绑定
+ angular依赖注入
+ 首屏加载经验？
+ 前端优化做过哪些
+ Git工作流程
+ jenkins

## 小鹏汇天
+ 介绍下HTTP
+ HTTP1.0与http2.0
+ https加密 对称还是非对称
+ vue nextTick用法与原理
+ 常用哪些ES6特性
+ 职业规划？周末怎么安排?怎么走上前端路的？
### http缓存 强缓存和弱缓存的区别 Etag和last-modified的区别
+ 强缓存
  + 200 from disk cache
  + cache-control: public, max-age=14400
  + expires etag last-modified
+ 协商缓存
  + 304
  + Cache-Control: max-age=0, private, must-revalidate
  + ETag

  
## 字节跳动 国际化电商一面
+ 介绍一下简历的第一个项目经历
+ tcp和udp区别
+ 说说https
+ http缓存
+ 浏览器缓存
+ 事件循环
+ 前端安全
+ vue源码读过没
+ 全部响应后去触发 promise.all 如果自己去实现呢
+ 笔试题
  + "1234567" => "1,234,567"
  + eventBus三个方法 on(type, func),off,trigger 原型链

## 药师帮 Web组10人的规模
+ 离职原因是什么？
+ ES5的继承方式？ prototype怎么用
+ HTTP缓存 说说强缓存与协商缓存？日常的js、css是怎么缓存的
+ 说说事件循环
+ 用过ES6的哪些新语法？箭头函数的特点是什么
+ vue-router hash模式原理
+ 为啥么vue2不支持IE8以下 
+ vue数据绑定是怎么做的
+ 用过vite吗
+ 个人的职业规划是啥？之前公司做过技术分享吗
+ 简历个人优势可以再丰富一点
### 怎样实现深拷贝？JSON.Parse()会有什么问题
### call,apply,bind有何区别
### 类数组转数组有什么办法 call,apply怎么用
  + Array.form() 拓展表达式
  + `[].slice.call(arguments)  Array.prototype.slice.call(arguments_)`

### for...in 遍历能不能遍历到原型链上
+ for...in 会遍历所有可枚举属性，包括继承来的属性
  + hasOwnProperty() 配合for..in来过滤
+ Object.getOwnPropertyNames() 获取自身所有属性，包括non-enumerable properties,但不包括symbol
  + Object.getOwnPropertySymbols
+ Object.keys() 自身可枚举
+ Reflect.ownKeys() 遍历自身所有



## 兴业数金
+ 数组的方法；数组去重的方法；
+ 原型链；js继承的方式
+ 判断类型的方式；防抖函数如何写；
+ vue3用过没
+ vue keep-alive缓存的是什么？组件通信方式？
+ vuex怎样持久化；vuex有哪些模块
+ vue-router路由守卫
+ vue怎样自定义指令
+ css动画

# 2021.06
## 华为OD一面
+ vue双向绑定原理
+ 为什么会有跨域问题？前端方案
+ echart用过的图表 遇到问题的解决方案
+ 后端做过什么 并发、集群、javaspring了解不 有全栈的想法没
+ 手撕代码
  + 返回字符串中出现最多的字符（可能有多个）
    + 哈希表赋值 然后在哈希表中查找 **而不是在原字符串中查找**
  + 'ab2d5f' 返回所有的大小写组合
    + 二叉树 回溯 DFS

### 欢聚
+ HTTPS为啥更安全
+ vue双向绑定原理 数据监听原理
+ vue-router hash与history模式的区别
+ Map的特点和作用 WeakMap
+ Promise实现原理
+ Math.random  [1, 1.5]
+ 排列问题 [60. 排列序列](https://leetcode-cn.com/problems/permutation-sequence/)


+ element表单切换后数据清空？
+ v-for key值不推荐用index的原因？

### 印象比较深的
+ 判断数组有哪些方式
  + `Object.prototype.toString.call()`通用的检测对象类型的方法 Array, Map, String, Number都可以检测
  + isArray
  + instanceof constructor

+ 基础数据类型 primitive data type
  + null, undefined, boolean, string, number， object, symbol
  + 一个symbol值能作为对象属性的标识符; 唯一标识符
  + ES6之后，对于基本数据类型，不能使用new
  + symbol属性不能被常规属性遍历获取到(for...in,keys(),getOwnPropertyNames()). 
    + 需要用getOwnPropertySymbols()
    + Reflect.ownKeys()

+ CSS可以被继承的属性
+ CSS 垂直居中
+ 多行文本垂直居中
+ 子DIV宽高不固定 如何做垂直居中
+ 盒子模型
+ CSS 重绘和回流
  + 

+ 不同浏览器标签页之间的通信方式
+ vue2 Object.defineProperty() 缺陷
+ v-for key的作用
+ 组件之间通信方式 兄弟组件？
+ DOM更新后触发 nextTick实现原理
+ Symbol的应用场景
+ 值类型与引用类型 堆与栈 const为啥可以改变对象属性
+ 父子组件的生命周期
  + 父组件beforeMount -> 子beforeCreate …… -> 子mounted  -> 父mounted
+ 箭头函数与普通函数的区别


### 珠江智联
+ 事件循环 Event Loop  微任务与宏任务
+ promise捕获异常
+ http原理
+ 怎样处理跨域
+ vuex怎样修改state
+ computed与watch
+ 怎样深拷贝数组 怎样判断一个数组
+ vue的响应式原理 能监听数组吗
+ 前端缓存 断网后返回之前的页面 怎么缓存
+ 聊聊TS
+ rpx 微信特有的尺寸单位,对rem的实现 以iphone6为标准，屏幕宽度为375px，共750物理像素
  + 750rpx 20rem  rem的基准是html元素的fontsize，默认为16px 常用62.5%来设置
  + px 像素

### 上海数慧
+ BFC 盒模型 are you sure?
+ 

### 精点数据
+ 浏览器存储和前端数据库有了解吗
+ ES6数组和对象怎么做拷贝
+ axios的请求拦截和处理
+ vue-router的钩子有哪些
+ 小程序调用相机 加一个弹窗层

### OGG 
+ 适配方案
+ IE兼容熟悉不
+ 表格大量数据 未分页怎么处理
+ vue-router 首屏懒加载？
+ 修改权限等操作在vue哪个生命周期


### 易
+ HTML5新增标签有了解吗
+ 盒模型有了解吗  怎么用CSS去设置
+ 清除浮动的几种方式 clear flex
+ 定位position有哪几种 有什么区别
+ 水平垂直居中的方式  flex居中的属性
+ localStorage SessionStorage
+ 数组方法
+ rem em vh px
+ vue 
  + computed与watch
  + 组件传值
  + router 模式
  + vuex常见属性
+ 闭包
+ 箭头函数 this
+ 怎样克服工作中遇到的问题
+ 谈谈less
+ 之后又问了十来分钟的外包工作方式、团队构成及沟通接口方式


### 药师帮
+ this与call,apply函数
+ 浏览器渲染 回流与重绘
+ Promise怎样获取异常
+ BFC
+ 说说对vue的理解
+ 后台管理系统中遇到 印象深刻的问题？？
+ 防抖函数


# 2020.11
## 11.27 
+ 动画的属性
+ css 
+ transform
+ css单位 px rem  
	+ 适配 pxtorem onsize 具体实现
+ vue
	+ 发请求 应该在哪个生命周期
	+ computed 和 methods 区别

## 11.17
+ 闭包
+ 变量提升 函数变量提升的先后
+ CSS布局方式 三列等高
+ 等于操作符
  ```js
  1 == '1'
  [1] == '1'
  false == new Boolean(false)
  ```
+ 给出一个数字，判断是否属于斐波那契数列，如果是，返回其序号
+ 将多维数组扁平化flat `[1,[2,[3,4],5,[1,6]]] ==> [1,2,3,4,5,6]`
