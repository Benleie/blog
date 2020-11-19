
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