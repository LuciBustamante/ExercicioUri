var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split('\n');

/* Solução Uri */

var A = parseInt(lines.shift());
var B = parseInt(lines.shift());

var X = A + B;

console.log('X = ' + X);







// https://www.ti-enxame.com/pt/javascript/como-receber-duas-entradas-consecutivas-com-o-modulo-readline-do-node.js/825380968/