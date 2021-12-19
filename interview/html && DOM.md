
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
