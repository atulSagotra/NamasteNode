const fs = require('fs');

const a = 100;

setImmediate(() => console.log('setImediate'));

fs.readFile('./file.txt', 'utf-8', (data) => {
  console.log('File reading CB', data);
});

setTimeout(() => console.log('Timer expired'), 0);

function printA() {
  console.log('a = ', a);
}
printA();
console.log('End of the file');
