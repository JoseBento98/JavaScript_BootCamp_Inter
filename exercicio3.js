/*      
        3 Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço
        normal de etiqueta e a escolha da condição de pagamento.
        Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e 
        efetuar o calculo adequado.

        Código condição de Pagamento
        - Á vista Débito, Recebe 10% de desconto;
        - Á vista no Dinheiro ou PIX, recebe 15% de desconto;
        - Em duas vezes, preço normal da etiqueta sem Juros;
        - Acima de duas vezes, preço normal de etiqueta mais juros de 10%
*/

const product = 100;
console.log("O Valor do produto é: ");
console.log(product);

const Form_of_payment = 4;

if (Form_of_payment === 1 ){
    console.log("Valor Final: " , product - (product * 0.10));
} else if (Form_of_payment === 2 ){
    console.log("Valor Final: " , product - (product * 0.15));
} else if (Form_of_payment === 3 ){
    console.log("Valor Final: " , product);
} else {
    console.log("Valor Final: " , product + (product * 0.10));
}