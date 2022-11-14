/*faça um programa para calcular o valor gasto de uma viagem
    
    
    voce terá 5 variaveis. sendo elas:
    1- preço do Etanol;
    2- preço da Gasolina;
    3- Tipo de combustivel do seu carro;
    2- Gasto mediode combstivel do carro por KM;
    3- Distância em KM da viagem;

imprima no console o valor que será gasto de combstivel para realizar a viagem.  */




console.log('Neste programa iremos calcular');
console.log('O valor do consumo de combustivel de uma viagem');
console.log('O valor será baseado no consumo de combutivel p/litro de um carro.');

/* declaração das variaveis necessarias */
const ethanol_value = 4.50;
const gasoline_value = 6.10;
const car_fuel_consumption_liter = 10;
const trip_distance_km = 350;
const type_of_fuel = 'Ethanol';

const liters_consumed = trip_distance_km / car_fuel_consumption_liter;

if (type_of_fuel === 'Ethanol'){
    const amount_spent = liters_consumed * ethanol_value; 
    console.log('O valor total de seu gasto com Combustivel será de: ');
/* tofixed converte a variavel em String colocando apenas 2 casas decimais */
console.log(amount_spent.toFixed(2));
} else {
    const amount_spent = liters_consumed * gasoline_value;
    console.log('O valor total de seu gasto com Combustivel será de: ');
/* tofixed converte a variavel em String colocando apenas 2 casas decimais */
console.log(amount_spent.toFixed(2));
}

