require('colors');

const functions = require('./proy_modules/functions.js')

const main = async () => {

    console.clear();

    const numero = 8;
    functions.interfazSigno(numero);

    const caracter = 'a';
    functions.interfazEncontroCaracter(caracter);

   const bebida = 'agua';
    functions.interfazBusquedaBebida(bebida);

    const medio = 'carro'
    functions.interfazMedioTransporte(medio);


    const cantidad = '3';
    const precio = '15000';
    const descuento = '20'
    functions.interfazFacturaProducto(cantidad, precio, descuento);

    const menu = 'verdura'
    functions.interfazBebidaComida(menu);

    const juegos = 5000
    functions.interfazSalaJuegos(juegos);

    const entero = 10
    functions.interfazContarNumero(entero);
    
    const par = 14;
    functions.interfazNumerosPares(par);

    const number = 2;
    functions.interfazTablaMultiplicar(number);

    const caracte = 'J';
    const numer = 4;
    functions.interfazRepetirCaracter(caracte, numer);

    const base = 2;
    functions.interfazContadorBase(base);

    const clave = ['clave','clave', 'cla3'];
    functions.interfazIncioSesion(clave);

    const numeros = [8,9,3,56,350];
    functions.interfazMinimoMaximo(numeros);

    const numeros1 = [0, 5, 4, 2, 1, 6];
    functions.interfazNumerosPares2(numeros1)

};


main ( );