
+ return 
  + return语句终止函数的执行，并返回一个指定的值给函数调用栈 call stack
  ```js
  function counter() {
    for (var count = 1; ; count++) {  // 无限循环
      console.log(count + "A"); // 执行5次
        if (count === 5) {          
          return;
        }
        console.log(count + "B");  // 执行4次
      }
    console.log(count + "C");  // 永远不会执行
  }

  counter();
  ```

+ label语句 
  + 可以理解为js中的goto，但是只能配合continue或者break使用
  + 没有label时, continue break默认当前循环

+ for ... in
  + 任意顺序遍历一个对象的 除Symbol以外的可枚举属性
  + for ... in是为遍历对象属性而构建的，不建议与数组一起使用(数组关注顺序)，数组可以用Array.prototype.forEach()和for ... of
  + 它最常用的地方应该是用于调试，可以更方便的去检查对象属性，比如需要检查其中的任何键是否为某值的情况时