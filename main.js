/* Uma sala contem 5 alunos e para cada aluno foi sorteado um número de 1 - 100.
faça um programa que receba os 5 numeros sorteados para os alunos e mostre o maior número sorteado. 

dados de entrada:
5
50
10
98
23

saída:
98
*/




const {get, print} = require('./funcoes_auxiliares')

const quantidadeDeAlunos = get();
let maiorValorEncontrado = 0;

for (let i = 0; i < quantidadeDeAlunos; i++) {
    const numeroSorteado = get();
    if (numeroSorteado > maiorValorEncontrado) {
        maiorValorEncontrado = numeroSorteado;
    }
    }    

    print(maiorValorEncontrado);