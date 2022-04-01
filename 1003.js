var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split('\n');

A = parseInt(lines.shift());
B = parseInt(lines.shift());

SOMA = A + B;

console.log('SOMA = ' + SOMA);