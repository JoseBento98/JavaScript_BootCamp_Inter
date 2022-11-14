/*      
        2- O IMC indice de massa corporal é um criterio da OMS para dar indicação sobre a condição
        de peso de uma pessoa adulta.
        
        Formula do IMC
        IMC = peso / (altura * altura)

        Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo
        com a tabela abaixo:

        IMC em Adultos Condição:

        - Abaixo de 18.5 (Abaixo do Peso);
        - Entre 18.5 e 25 (Peso Normal);
        - Entre 25 e 30 (Acima do Peso);
        - Entre 30 e 40 (Obeso);
        - Acima de 40 (Obesidade Grave);

*/

const height = 1.75;
const weight = 92.80;

const IMC = weight / Math.pow(height,2);
console.log(IMC.toFixed(2));

if (IMC < 18.5 ) {
    console.log("Abaixo do Peso");
}   else if (IMC >= 18.5 && IMC < 25){
    console.log("Peso Normal");
}   else if (IMC >= 25 && IMC < 30){
    console.log("Acima do Peso");
}   else if (IMC >= 30 && IMC < 40){
    console.log("Obeso");
}   else {
    console.log("Obesidade Grave");
}