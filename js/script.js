let suma = 0;
let numero = 0;
while ( numero <= 1000){
    suma = suma + numero;
    
    numero = numero + 2;
    if (numero == 1000) {
        console.log (`la suma total es ${suma}`);
    }
}
