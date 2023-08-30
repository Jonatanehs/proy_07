require('colors');

const functions = require('./proy_modules/functions.js')

const main = async ( ) => {

    console.clear( );

    
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
    functions.interfazFacturaProducto(cantidad, precio);

    const menu = 'verdura'
    functions.interfazBebidaComida(menu);

    const juegos = '3000'
    functions.interfazSalaJuegos(juegos);

    const entero = 10
    functions.interfazContarNumero(entero);
    
    const par = 14;
    functions.interfaznumerosPares(par);

    const number = 5;
    functions.interfazTablaMultiplicar(number)

    const caracte = 'J';
    const numer = 4;
    functions.interfazRepetirCaracter(caracte, numer);

};


main ( );