/* Crie uma classe para representar pessoas. 
para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor de seu IMC (IMC = peso / (altura * altura));
Instacia uma pesoa chamada José que tenha 70Kg de peso e 1,75 de altura e peça a jose para dizer
o valor de seu IMC */

class People {
    name;
    weight;
    height;

    constructor (name, weight, height){
        this.name = name;
        this.weight = weight;
        this.height = height;
    }

    calculate_IMC (){
        return this.weight /(Math.pow(this.height,2))
    }

    to_rank_IMC (){
        const IMC = this.calculate_IMC(); 
        if (IMC < 18.5 ) {
            return("Abaixo do Peso");
        }   else if (IMC >= 18.5 && IMC < 25){
            return("Peso Normal");
        }   else if (IMC >= 25 && IMC < 30){
            return("Acima do Peso");
        }   else if (IMC >= 30 && IMC < 40){
            return("Obeso");
        }   else {
            return("Obesidade Grave");
        }
    }
}

const jose = new People("José", 70, 1.75);
console.log(jose.to_rank_IMC());