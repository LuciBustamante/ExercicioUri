var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split('\n');

raio = parseFloat(lines);
n = 3.14159;

//area = (n * raio**2).toFixed(4);

area = (n * Math.pow(raio, 2)).toFixed(4);

console.log('A=' + area);

