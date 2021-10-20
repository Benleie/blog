## common
+ browser devTool
  + 元素审查器elements中的Event Listeners: 查看特定DOM节点上绑定的event listeners
  + Global Listeners 绑定在window上的
  + Event Listeners breakpoints 各种事件的分类


## 事件循环 Event loop
关键词：单线程 非堵塞 主线程 执行栈 任务队列staskqueue 异步任务 事件的回调函数 
  + setTimeout requestAnimationFrame MutationObserver
  + nextTick React-Scheduler
+ 事件循环： 主线程从任务队列中读取事件，这个过程持续进行。