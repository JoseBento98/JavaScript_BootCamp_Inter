const conjunto_entradas = [5,50,10,98,23];
let i = 0;


function get() {
    const valor = conjunto_entradas[i];
    i = i + 1;
    return valor;
}


function print(texto) {
    console.log(texto);
}

module.exports = {get, print};

console.log(get, print);

