const crypto = require('node:crypto');

console.log('Hello World');

var a = 10898921;
var b = 12092;

setTimeout(() => {
  console.log('Call me ASAP');
}, 0); // Trust Issues with setTimeout

setTimeout(() => {
  console.log('Call me ASAP');
}, 3000);

function multiplyFn(x, y) {
  console.log(`Multiplication of ${x}, ${y} is :  ${x * y}`);
  return x * y;
}

multiplyFn(a, b);
