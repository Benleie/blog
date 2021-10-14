
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