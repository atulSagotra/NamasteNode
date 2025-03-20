require('./xyz.js')

const { calculateSum, calculateMultiply  } = require('./calculate');

const data = require('./data.json')

var name = 'Namaste NodeJS'

var a = 10;

var b = 20;

console.log(name);

console.log(data);

calculateSum(a, b);
calculateMultiply(a, b);

