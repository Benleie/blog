用performance工具，检测页面Event log的activity,like:Hit Test,Update Layer Tree, Composite Layers,Events(click,mousemove,selectionchange).

+ click event often triggers a DOMActivate.

页面的变化，主要体现在：Recalculate Style, layout, paint.而这种变化，并没有响应的DOM接口。不过，并没什么关系。毕竟，每次reflow必定是被某种EVENT触发的。

+ media query
  + @media 媒介类型 and|not|only (媒介特征) {  }
  + layout viewport: innerWidth innerHeight
  + 样式并不会有特殊的优先级，有时需要用important