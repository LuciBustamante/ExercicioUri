var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split('\n');


var name = lines.shift().toString;
var salary = parseFloat(lines.shift());
var sale = parseFloat(lines.shift());


var total = (salary + (sale * 0.15));

console.log('TOTAL = R$ ' + total.toFixed(2));


/*

const newArray = lines.slice(1);

var salary = parseFloat(newArray.shift());
var sale = parseFloat(newArray.shift());


var total = (salary + (sale * 0.15));

console.log('TOTAL = R$ ' + total.toFixed(2));

*/