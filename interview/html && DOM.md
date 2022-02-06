
## Property与Attribute的区别
+ property是DOM中的属性，是JavaScript里的对象；attribute是HTML标签上的特性，它的值只能够是字符串；
+ 从打印结果来看，attributes是属于property的一个子集
+ 赋值与取值
  + getAttribute() setAttribute() hasAttribute() removeAttribute()
  + property `div.id = xxx`
+ attribute和property之间的数据绑定是单向的，attribute->property；
+ https://javascript.info/dom-attributes-and-properties

# HTML Element
+ input 
  + type=search 自带close-icon
  + type=button 没有默认事件的button


#### Web标准
+ ECMA规范一直能多到415。。而ECMAScript语言由TC39(Technical Committees)负责的ECMA-262规范制定，并在应用上与402,404,414等其他规范存在联系。
+ WHATWG---浏览器商为了巩固HTML而成立的标准组织。定义了HTML,DOM,Fetch等标准。
+ 主流浏览器每6周一次更新，所以ES6(2015)之后用年份命名。

## 前端优化方案
+ 前端预加载方案
    + dns-prefetch 提前完成DNS解析
    + preconnect 提前建立TCP连接和TSL握手
+ gzip压缩 	http请求优化方式 Content-Encoding: gzip
+ icon-font
+ webpack相关优化
    1. 使用uglifyjs-webpack-plugin插件代替webpack自带UglifyJsPlugin插件来压缩JS文件；生产环境关闭源码映射，一方面能减少代码包的大小，另一方面也有利于系统代码安全；清除打印日志和debugger信息；配置SplitChunks 抽取公有代码，提升你的应用的性能
    2. 使用mini-xss-extract-plugin提取CSS 到单独的文件, 并使用optimize-css-assets-webpack-plugin来压缩CSS文件 。
    3. tree shaking 移除未引用代码，减少bundle体积大小
    4. 路由懒加载 webpack的代码分离与懒加载 code-splitting lazy-loading

