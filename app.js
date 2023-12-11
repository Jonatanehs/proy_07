// se importa el modulo de colores de node js 
require('colors');

// la constante functions obtiene lo exportado por functions 
const functions = require('./proy_modules/functions.js')

// se crea una funcion flecha asincrona 
const main = async () => {

// se limpia la consola 
    console.clear();


// la constante numero obtendra un valor numeric
    const numero = 8;
// functions contendra la interfaz con sus parametros 
    functions.interfazSigno(numero);

// la constante caracter obtendra un valor string
    const caracter = 'a';
// functions contendra la interfaz con sus parametros 
    functions.interfazEncontroCaracter(caracter);

// la constante bebida obtendra un valor string
   const bebida = 'agua';
//   functions contendra la interfaz con sus parametros 
    functions.interfazBusquedaBebida(bebida);

// la constante medio obtendra un valor string
    const medio = 'carro'
// functions contendra la interfaz con sus parametros 
    functions.interfazMedioTransporte(medio);


// la constante cantidad, precio y descuento obtendra un valor atring
    const cantidad = '3';
    const precio = '15000';
    const descuento = '20'
// functions contendra la interfaz con sus parametros 
    functions.interfazFacturaProducto(cantidad, precio, descuento);

// la constante menu obtendra un valor string
    const menu = 'verdura'
// functions contendra la interfaz con sus parametros 
    functions.interfazBebidaComida(menu);

// la constante juegos obtendra un valor numeric
    const juegos = 5000
// functions contendra la interfaz con sus parametros 
    functions.interfazSalaJuegos(juegos);

// la constante entero obtendra un valor numeric
    const entero = 10
// functions contendra la interfaz con sus parametros 
    functions.interfazContarNumero(entero);
    
// la constante par obtendra un valor numeric
    const par = 14;
// functions contendra la interfaz con sus parametros 
    functions.interfazNumerosPares(par);

// la constante number obtendra un valor numeric
    const number = 2;
// functions contendra la interfaz con sus parametros 
    functions.interfazTablaMultiplicar(number);

// la constante caracte obtendra un valor string
    const caracte = 'J';

// la constante numer contiene un valor numeric
    const numer = 4;
// functions contendra la interfaz con sus parametros 
    functions.interfazRepetirCaracter(caracte, numer);

// la constante base obtendra un valor numeric
    const base = 2;
// functions contendra la interfaz con sus parametros 
    functions.interfazContadorBase(base);

// la constante clave obtiene un arreglo 
    const clave = ['clave','clave', 'cla3'];
// functions contendra la interfaz con sus parametros 
    functions.interfazIncioSesion(clave);

// la constante numeros tiene un arreglo como valor
    const numeros = [28,19,30,26,150];
// functions contendra la interfaz con sus parametros 
    functions.interfazMinimoMaximo(numeros);

// la constante numeros1 contiene un arreglo
    const numeros1 = [0, 9, 4, 2, 3, 6];
// functions contendra la interfaz con sus parametros 
    functions.interfazNumerosPares2(numeros1)

};


main ( );