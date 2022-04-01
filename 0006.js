var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split('\n');

A = (parseFloat(lines.shift())) * 2;
B = (parseFloat(lines.shift())) * 3;
C = (parseFloat(lines.shift())) * 5;

MEDIA = ((A + B + C)/10).toFixed(1);

console.log('MEDIA = ' + MEDIA);
