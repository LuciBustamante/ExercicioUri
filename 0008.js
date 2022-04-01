var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split('\n');

number = parseInt(lines.shift());
workHours = parseInt(lines.shift());
priceHour = parseFloat(lines.shift());

salary = (workHours * priceHour).toFixed(2);

console.log('NUMBER = ' + number);
console.log('SALARY = U$ ' + salary);