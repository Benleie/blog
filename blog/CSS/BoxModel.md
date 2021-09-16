### 图解CSS
几种盒模型：inline,inline-block,block,table,absolute position,float， list-item
影响盒模型的属性:display,postion,float,  width,height,margin,padding,border
+ box-sizing:border-box也包含了padding;
+ 自由缩放属性 resize 针对具有overflow属性的容器元素，textarea自带
+ outline 不影响盒模型  获得焦点时

## common cases
+ line-height 
  + 继承属性，继承body(1.5)，或者html(1.15),无设置时为normal(1.2-1.3)
  + On block-level elements, it specifies the minimum height of line boxes within the element. On non-replaced inline elements, it specifies the height that is used to calculate line box height.对于替换内联元素来说，line-height对它没有影响。
+ opacity
  + 默认为1.0，不透明 非继承元素
  + opacity会把一个元素（包括它的内容和子元素）作为一个整体处理，哪怕这个元素和它的子元素有不同的opacity属性值。
    + 所以在背景透明的场景中，一般用rgba来设置背景色
  + 当属性值不为1时，会把元素放置在一个新的**层叠上下文stacking context**中
+ 多个class选择器同时使用 multiple class selectors
  + `section.fixed.selected` 表示同时具备'fixed''selected'类的section元素,这种用法应该和加空格的情况区分开`section .fixed .selected`







	



