// DestructuringAssignment.js
let a, b, rest;
[a, b] = [10, 20]
console.log("a:" + a)
console.log("b:" + b)

[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(rest);