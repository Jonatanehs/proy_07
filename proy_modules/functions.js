const { blue } = require("colors");

const functions = { };

const signo = (numero) => {
    if (numero >= 0) {
        return 'Positivo'
    } else {
        return 'negativo'
    }
}

const interfazSigno = (numero) => {
    console.log(`******************************************`.yellow);
    console.log(`*                ` .yellow    +    `FUNCIÓN SIGNO` .bgBlue        
                 +  `           *`.yellow);
    console.log(`******************************************`.yellow);
    console.log(`*         `.blue   +  `El número ${numero} es ` + " " + functions.signo(numero)    
     +  `       *`.blue);
    console.log(`******************************************\n`.red);
}

const encontroCaracter = (caracter) => {
    const datos = ['A', 'B', 'C', 'D', 'E'];
    if (datos.includes(caracter)) {
        return 'Se encuentra';
    }else {
        return 'No se encuentra';
    }
}

const interfazEncontroCaracter = (caracter) =>{
    console.log(`******************************************`.green);
    console.log(`*  `.red + `      FUNCIÓN ENCONTRO CARACTER   `.grey + `    *`.red);
    console.log(`******************************************`.magenta);
    console.log(`*   `.white + `    El  caracter ${caracter.toUpperCase( )} ` 
    + " " + functions.encontroCaracter(caracter.toUpperCase( )) + `     *`.white);
    console.log(`******************************************\n`.magenta);
}

const busquedaBebida = (bebida) => {
   switch (bebida) {
        case 'cerveza' :
            return `barra`;
            break;
        case 'vino' :
            return `barra`;
            break;
        case 'gaseosa' :
            return `barra`;
            break;
        case 'agua' :
            return `barra`;
            break;
        default:
            return `tienda`;
            break;
  
    }
};


const interfazBusquedaBebida = (bebida) =>{
    console.log(`+++++++++++++++++++++++++++++++++++++++`.america);
    console.log(`<  `.grey + `      FUNCIÓN BUSQUEDA BEBIDA   `.bgYellow + `   >`.grey);
    console.log(`+++++++++++++++++++++++++++++++++++++++`.america);
    console.log(`<          `.blue + ` ${bebida}  `.blue +  functions.busquedaBebida(bebida ).yellow
     + `               >`.red);
    console.log(`+++++++++++++++++++++++++++++++++++++++\n`.america);
}
const medioTransporte = (medio) =>{
if (medio === 'avion' || medio === "flota") {
            return `recuerda tener dinero para el pasaje`;
        } else if (medio == "carro" || medio == "bicicleta") {
            return 'recuerda llevar ropa apropiada' ;
        } 
    }
    

    const interfazMedioTransporte = (medio) =>{
        console.log(`//////////////////////////////////////////`.magenta);
        console.log(`|   `.green + `       Medio de transporte       ` + `    |`.green);
        console.log(`//////////////////////////////////////////`. magenta);
        console.log(`|  `.blue  + `${medio}  ` +  functions.medioTransporte(medio) + ` |`.blue);
        console.log(`//////////////////////////////////////////\n`.magenta);
    }


    const facturaProducto = (cantidad, precio) => {
        const descuento = cantidad * precio * 0.10; 
        const total = cantidad * precio - descuento;
        return total;
    };

const interfazFacturaProducto = (cantidad, precio) =>{
    console.log(`******************************************`);
    console.log(`*             factura                    *`);
    console.log(`******************************************`);
    console.log(`*`  + `la   ${cantidad}  prendas ` +  `con  ${precio} por und     *
    ` 
    + '*con descuento del 10% =' + functions.facturaProducto(cantidad, precio) + `     *`);
    console.log(`******************************************\n`);
}

const bebidaComida = (menu) => {
    switch (menu) {
         case 'carne' :
             return `vino tinto`;
             break;
         case 'pescado' :
             return `vino blanco`;
             break;

         default:
             return `agua`;
             break;
   
     }
 }
 
 
 const interfazBebidaComida = (menu) =>{
     console.log(`******************************************`);
     console.log(`*           bebidas del menu             *`);
     console.log(`******************************************`);
     console.log(`*`  + `        ${menu}  ` +  functions.bebidaComida(menu)
      + `            *`);
     console.log(`******************************************\n`);
 }

 
const salaJuegos = (juegos) => {
    switch (juegos) {
         case '4000' :
             return `acceso todos`;
             break;
         case '3000' :
             return `acceso consola, 2D y 3D`;
             break;
        
         case '2000' :
            return `acceso consola y 2D `;
            break;
   

         default:
             return `ingrese mas dinero`;
             break;
   
     }
 }
 
 
 const interfazSalaJuegos = (juegos) =>{
     console.log(`******************************************`);
     console.log(`*         el precio de los juegos        *`);
     console.log(`******************************************`);
     console.log(`*    `  + `${juegos}  ` +  functions.salaJuegos(juegos) 
     + `       *`);
     console.log(`******************************************\n`);
 }

const contarNumero = (entero) => {
    for(var i=0; i < entero; i++){
      console.log(i)
    }
    return "termina"
}

 
const interfazContarNumero = (entero) =>{
    console.log(`******************************************`);
    console.log(`*              contar numeros            *`);
    console.log(`******************************************`);
    console.log(`*    `  + `${entero}  ` +  functions.contarNumero(entero) 
    + `       *`);
    console.log(`******************************************\n`);
}

const numerosPares = par => {
    for(let i = 0; i <= par; i++) {
        if(i % 2 === 0){
            console.log(i)
       
    }
    }
    return "";
}

const interfaznumerosPares = (par) =>{
    console.log(`******************************************`);
    console.log(`*         funciones numeros pares        *`);
    console.log(`******************************************`);
    console.log(`*    `  + `       ${par}  ` +  functions.numerosPares(par) 
    + `       *`);
    console.log(`******************************************\n`);
}


const tablaMultiplicar = number => {
    for (let c = 1; c <= 10; c++) {
        const resultado = number * c;
        console.log(`*    ${number} x ${c} = ${resultado}                  *`);
    }
    return "tabla del" + ` ${number}        `
}

const interfazTablaMultiplicar = (number) =>{
    console.log(`***********************************`);
    console.log(`*       tabla de multiplicar      *`);
    console.log(`***********************************`);
    console.log(`*               tabla del ${number}      *`)
    console.log(`*    `  + 
                functions.tablaMultiplicar(number)  + `       *`);
    console.log(`***********************************\n`);
}

const repetirCaracter = (caracte, numer) =>{
    for (let i = 0; i < numer; i++) {
        console.log(caracte);
      }
    return `repetir ${caracte}  ${numer} veces`
}

const interfazRepetirCaracter = (caracte, numer) =>{
    console.log(`******************************************`);
    console.log(`*         funciones numeros pares        *`);
    console.log(`******************************************`);
    console.log(`*    `   +  functions.repetirCaracter(caracte, numer) 
    + `       *`);
    console.log(`******************************************\n`);
}

const contadorBase = (base) => {
    if(base < 2 || base >10){
        return `se necesita que la base este entre 2 y 10`
    }

    for(let numero = 0; numero < base * base; numero++){

    const numeroDeBase = numero.toString(base);

    const numeroDosDigitos = numeroDeBase.length === 1 ? "0" + numeroDeBase : numeroDeBase;

        console.log(`*         `    + numeroDosDigitos);

    }
    return ""
}

const interfazContadorBase = (base) =>{
    console.log(`******************************************`);
    console.log(`*        contador de la base     *`);
    console.log(`******************************************`);
    console.log(`*    `   +  functions.contadorBase(base) 
    + `       *`);
    console.log(`******************************************\n`);
}

const inicioSesion = (clave) => {
    let contraseñas = ['clave1','clave2', 'clav3']
    let intento = 0
    for (const claves of clave) {
        intento++ 
               
        if (contraseñas.includes(claves)) {
            console.log(`la contraseña se encuentra intento ${intento} de 3`)
            return "";
        } else {
            console.log (`la contraseña No se encuentra intento ${intento} de 3`);
        }
    }
    console.log("alerta de intruso")
    return "";
}

const interfazIncioSesion = (clave) => {
    console.log(`******************************************`);
    console.log(`*            funciones claves            *`);
    console.log(`******************************************`);
    console.log(`*    ` + `  ` + functions.inicioSesion(clave)
        + `       *`);
    console.log(`******************************************\n`);
}

const minimoMaximo = (numeros) => {

    let minimo = numeros[0]
    let maximo = numeros[0]
    let suma = numeros[0]

    for(let c = 0; c<numeros.length; c++){
        if(minimo > numeros[c]){
            minimo = numeros[c];
        }
        if(maximo < numeros[c]){
            maximo = numeros[c];
        }
        suma += numeros[c]
    }
    const prome = suma / numeros.length;
    return (`*` + `   El número mínimo es: ${minimo}` + `        *\n`.blue
            + `*`.red+ `   El número máximo es: ${maximo}` + `      *\n`
            + `*`.blue + `   El promedio es: ${prome}`);
}

const interfazMinimoMaximo = (numeros) =>{
    console.log(`***********************************`.america);
    console.log(`*    `   +   `FUNCIÓN MÍN, MÁX Y PROM`.bgRed +`      *`.blue);
    console.log(`***********************************`.america);
    console.log(`*`.blue + `   El arreglo es: ${numeros}`+'   *\n' + ""
     +  functions.minimoMaximo(numeros) + `          *`.red);
    console.log(`***********************************\n`.america);
};

const numerosPares2 = (numeros1) => {
    const pares = [];
    let i = 0;
    
    while (i < numeros1.length) {
        if (numeros1[i] % 2 === 0) {
            pares.push(numeros1[i]);
        }
        i++;
    }

    return {
        cantidad: pares.length,
        numerosPares: pares
    };
};

const interfazNumerosPares2 = (numeros1) => {
    console.log(`********************************************`.blue);
    console.log(`*`.blue + `FUNCIÓN CONTAR NÚMEROS PARES DE UN ARREGLO`.bgBlue + `*`.blue);
    console.log(`********************************************`.blue);
    console.log(`*       `.blue + `El arreglo es: ${numeros1}\n` + `*       `.blue + `Cantidad de números pares: ${numerosPares2(numeros1).cantidad}` + `       *`.blue);
    console.log(`********************************************\n`.blue);
};

functions.signo = signo;
functions.interfazSigno = interfazSigno;
functions.encontroCaracter = encontroCaracter;
functions.interfazEncontroCaracter = interfazEncontroCaracter;
functions.busquedaBebida = busquedaBebida;
functions.interfazBusquedaBebida = interfazBusquedaBebida;
functions.medioTransporte = medioTransporte;
functions.interfazMedioTransporte = interfazMedioTransporte;
functions.facturaProducto = facturaProducto;
functions.interfazFacturaProducto = interfazFacturaProducto;
functions.bebidaComida = bebidaComida;
functions.interfazBebidaComida = interfazBebidaComida;
functions.salaJuegos = salaJuegos;
functions.interfazSalaJuegos = interfazSalaJuegos;
functions.numerosPares = numerosPares;
functions.interfaznumerosPares = interfaznumerosPares;
functions.contarNumero = contarNumero;
functions.interfazContarNumero = interfazContarNumero;
functions.tablaMultiplicar = tablaMultiplicar;
functions.interfazTablaMultiplicar = interfazTablaMultiplicar;
functions.repetirCaracter = repetirCaracter;
functions.interfazRepetirCaracter = interfazRepetirCaracter;
functions.contadorBase = contadorBase;
functions.interfazContadorBase = interfazContadorBase;
functions.inicioSesion = inicioSesion;
functions.interfazIncioSesion = interfazIncioSesion;
functions.minimoMaximo = minimoMaximo;
functions.interfazMinimoMaximo = interfazMinimoMaximo;


module.exports = functions;