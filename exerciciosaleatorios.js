

function calcularIMC(weight , height) {
    return peso / Math.pow(height, 2);
}

function classificarIMC(IMC) {
    if (IMC < 18.5 ) {
        return ("Abaixo do Peso");
    }   else if (IMC >= 18.5 && IMC < 25){
        return ("Peso Normal");
    }   else if (IMC >= 25 && IMC < 30){
        return ("Acima do Peso");
    }   else if (IMC >= 30 && IMC < 40){
        return ("Obeso");
    }   else {
        return ("Obesidade Grave");
    }
}

function main () {
    const height = 1.63;
    const weight = 53.00;
    
    const IMC = weight / Math.pow(height,2);
    console.log(classificarIMC(IMC)); 
}

main ();