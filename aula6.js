  /* listas Arrays e repetições */

const alunos = []

/* insere */
alunos.push("teste");

/* tira o ultimo */
alunos.pop();

/* tira o primeiro */
alunos.shift();

const notas = [];

notas.push(2);
notas.push(3);
notas.push(4);
notas.push(5);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas [i];
     soma = soma + nota;
}

/* mostra a quantiade de itens inseridos na lista */
const media = soma / notas.length;
console.log(media);