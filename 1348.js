/** Eu Posso Adivinhar a Estrutura de Dados! */

var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split('\n');


var n = lines.shift();


let data = lines.forEach((item) => {
  let it = item.split(' ');
  console.log(it);
})




if(n < 1 || n > 1000) {
  console.log("Número inválido")
} else {
  console.log(n)
}
