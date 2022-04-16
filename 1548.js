/** Fila do Recreio */

var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split('\n');

let N = lines.shift();   // qtd de casos

let i = 0;

while (i < N) {

  let M = lines.shift();   // qtd de alunos
  let P = (lines.shift()).split(" ");   // notas
  
  let x = 0;
  let h = 0;

  // recebe notas transf em numero
  let notes = [];
  P.forEach((note) => {
    notes.push(parseInt(note))
  })

  // verifica se: qtd de aluno == notas digitadas 
  if(M != notes.length) {
    break;
  }
  else {
    let listOrd = [];

    notes.forEach((item) => {
      listOrd.push(item);
    })

    listOrd.sort((a, b) => b - a);  // organiza em forma decresc
    
    listOrd.forEach((nt) => {
      if( nt == notes[x]) {
        h++;
      }
      x++;
    })
  
    console.log(h);
  }
  i++;
}

