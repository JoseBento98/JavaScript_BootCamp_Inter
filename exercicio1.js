/*      faça um algoritmo que dado 3 notas tiradas por um aluno em um semetre da faculdade 
        calcule e imprima sua media e sua classificação conforme a tabela abaixo.

        Média = (Nota1 + Nota2 + nota3) / 3;

        Classificação
        - Média menor que 5, Reprovação;
        - Média entre 5 e 7, recuperação;
        - Média acima de 7, Passou de Semestre;
*/

const note_1 = 8;
const note_2 = 8;
const note_3 = 8;

const semester_average = (note_1 + note_2 + note_3) / 3;
console.log(semester_average)

if (semester_average < 5){
    console.log("Reprovado");
} else if (semester_average >=5 && semester_average<=7 ) {
    console.log("Recuperação")
} else {
    console.log("Aprovado!")
}