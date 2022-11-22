/* praticando funções, metodos, dinamismo e classes */

/* classe como o objeto deve ser deve ser */

class Pessoa {
    nome;
    idade;
    data_nascimento;

    /* prepara atributos funções ou objetos que antes não estariam aqui(Deduções) */ 
    constructor (nome, idade) {
        this.nome = nome
        this.idade = idade
        this.data_nascimento = 2022 - idade
    }
    
    descrever () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

function compararPessoas(p1,p2) {
    if (p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    } else if (p2.idade > p1.idade){
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} é ${p2.nome} tem a mesma idade.`);
    }
}

const Jose = new Pessoa("Jose Luiz", 24);
const Lucas = new Pessoa("Lucas", 23);

compararPessoas(Jose, Lucas);