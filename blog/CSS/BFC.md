##基本背景
Formatting context(格式化上下文) 是 W3C CSS2.1 规范中的一个概念。它是页面中的一块渲染区域，并且有一套渲染规则，它决定了其子元素将如何定位，以及和其他元素的关系和相互作用。最常见的 Formatting context 有 Block fomatting context (块级格式化上下文)和 Inline formatting context (IFC)

具有BFC特性的元素可以看作是隔离了的独立容器，容器里面的元素不会在布局上影响到外面的元素，并且BFC 具有普通容器所没有的一些特性。

## 触发条件
+ html根元素
+ 浮动元素：float除了none以外的值 
+ 绝对定位元素：position(fixed,absolute)
+ display为inline-block,table-cell,flex
+ overflow除了visible以外的值(hidden、auto、scroll)

## 特性与应用
+ 同一个BFC内部，外（上下）间距会发生叠加
+ BFC可以包含浮动的元素（不影响外部布局），避免父元素高度塌陷
+ BFC可以阻止元素被浮动元素覆盖（不被外部元素影响），常用于两列自适应布局


