const crypto = require('node:crypto');

console.log('Hello World');

var a = 10898921;
var b = 12092;

const key1 = crypto.pbkdf2Sync('password', 'salt', 5000000, 50, 'sha512');

console.log('First Key is generated', key1.valueOf());

crypto.pbkdf2('password', 'salt', 5000000, 50, 'sha512', (err, key) => {
  console.log('Second Key is generated', key.values);
});

function multiplyFn(x, y) {
  console.log(`Multiplication of ${x}, ${y} is :  ${x * y}`);
  return x * y;
}

multiplyFn(a, b);
