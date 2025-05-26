const fs = require('fs');

const a = 100;

setImmediate(() => console.log('setImediate'));

Promise.resolve('Promise').then(() => console.log('Promise'));

fs.readFile('./file.txt', 'utf-8', (data) => {
  console.log('File reading CB', data);
});

setTimeout(() => console.log('Timer expired'), 10);

process.nextTick(() => console.log('Process.nextTick'));

function printA() {
  console.log('a = ', a);
}
printA();
console.log('End of the file');
