var readline = require("readline");

var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

var A = rl.question('');
var B = rl.question('');

var X = parseInt(A) + parseInt(B)

console.log("X = ", X)









// https://www.ti-enxame.com/pt/javascript/como-receber-duas-entradas-consecutivas-com-o-modulo-readline-do-node.js/825380968/