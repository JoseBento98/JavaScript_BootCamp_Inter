const number = 0;

/*atribuição = 
comparação ==
igualdade ===
resposta booleana true and false 
inicio de declaração de variavel é ou não (IS)
ex: IsNumeroPar*/
const divisible_by_5 = (number % 5) === 0;
console.log(divisible_by_5);


/* estrutura condicional 
operador se / se não se (posso por quantos eu quiser)/ se não */
if (number === 0) {
    console.log('Número Invalido');
} else if (divisible_by_5){
    console.log('Sim');
} else {
    console.log('Não')
}

/* ! converte o valor booleano para o oposto dele
true = false
false = true
if (!even_number) {
    console.log('Executei')
} */

