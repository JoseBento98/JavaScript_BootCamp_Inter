/* crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto medio de combustivel por Km/rodado
crie um metodo que dado a quantidade de quilometros e o preço do combustivel 
nos dê o valor gasto em reais para realizar este percurso */

class Car {
    collor;
    brand;
    consumption;

    constructor (collor, brand, consumption){
        this.collor = collor;
        this.brand = brand;
        this.consumption = consumption;
    }

    travel_expense(distance, fuel_price) {
        return distance * this.consumption * fuel_price;
    }
}


const uno = new Car ("Black", "Ford", 1/12);
console.log(uno.travel_expense(150,5));
const lambo = new Car ("Organge", "Blue", 1/2);
console.log(lambo.travel_expense(100,6));
