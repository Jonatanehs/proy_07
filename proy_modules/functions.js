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
    console.log(`*         `.blue   +  `El número ` + `${numero}`.yellow + ` es ` +
     " " + functions.signo(numero)    +  `       *`.blue);
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


    const facturaProducto = (cantidad, precio, descuento) => {
        const descuent = descuento / 100;
        const descuentoTotal = cantidad * precio * descuent; 
        const total = cantidad * precio - descuentoTotal;
        return total;
    };

const interfazFacturaProducto = (cantidad, precio, descuento) =>{
    console.log(`________________________________________`.cyan);
    console.log(`^`.red+ `              factura                 `.grey + `^`.red);
    console.log(`----------------------------------------`.cyan);
    console.log(`^`.yellow  + `  La   ` + `${cantidad}`.bgBlue + `  prendas ` +  
    `con  ` + `${precio}`.bgGreen + ` por und `+ ` ^\n`.yellow 
    + `|`.yellow + `  Con descuento del ` + `${descuento}%`.bgYellow + `  =  ` + 
    functions.facturaProducto(cantidad, precio, descuento) +  `     |`.yellow);
    console.log(`----------------------------------------\n`.cyan);
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
     console.log(`-----------------------------------`.green);
     console.log(`-`.red + `        bebidas del menu        ` + `<`.blue);
     console.log(`-----------------------------------`.green);
     console.log(`-`.red  + `        ` + `${menu}  ` +  functions.bebidaComida(menu)
      + `           ` + `<`.blue);
     console.log(`-----------------------------------\n`.green);
 }

 
const salaJuegos = (juegos) => {
    if(juegos > 4000){ 
        let cambio = juegos - 4000
        return ` recibe cambio de  ` + `${cambio}`.bgMagenta
     }
    switch (juegos) {
         case 4000 :
             return `acceso todos los juegos`;
             break;
         case  3000 :
             return `acceso consola, 2D y 3D`;
             break;
        
         case 2000 :
            return `acceso consola y 2D `;
            break;
   

         default:
             return `ingrese mas dinero`;
             break;
   
     }
 }
 
 
 const interfazSalaJuegos = (juegos) =>{
     console.log(`******************************************`.america);
     console.log(`<`.red + `         el precio de los juegos        `.gray + `>`.blue);
     console.log(`******************************************`.america);
     console.log(`*    `.red  + `${juegos}`.bgYellow + `  `  +  functions.salaJuegos(juegos) 
     + `       *`.blue);
     console.log(`******************************************\n`.america);
 }

const contarNumero = (entero) => {
    for(var i=0; i < entero; i++){
      console.log(`^`.blue + `          ` + i + `          ` + `^`.blue)
    }
    return ''
}

 
const interfazContarNumero = (entero) =>{
    console.log(`+++++++++++++++++++++++`.magenta);
    console.log(`~`.magenta + `    ` + `contar numeros`.america + `   ` + `~`.magenta);
    console.log(`+++++++++++++++++++++++`.magenta);
    console.log(`^`.blue + `         `    +  `     ` +  functions.contarNumero(entero) + `      ` + ` ^`.blue);
    console.log(`+++++++++++++++++++++++\n`.blue);
}

const numerosPares = par => {
    for(let i = 0; i <= par; i++) {
        if(i % 2 === 0){
            console.log(`~         `.yellow + i + `          ~`.yellow)
       
    }
    }
    return "";
}

const interfazNumerosPares = (par) =>{
    console.log(`=======================`.magenta);
    console.log(`=    `.magenta + `Numeros pares`.bgGreen + `    =`.magenta);
    console.log(`=======================`.magenta);
    console.log(`~       `.yellow + functions.numerosPares(par)  + 
    `              ~`.yellow);
    console.log(`=======================\n`.magenta);
}


const tablaMultiplicar = number => {
    for (let c = 1; c <= 10; c++) {
        const resultado = number * c;
        console.log(`*`.yellow + `         ${number} x ${c} = ${resultado}        ` 
        +  `*`.yellow);
    }
    return "                  " 
}

const interfazTablaMultiplicar = (number) =>{
    console.log(`*****************************`.red);
    console.log(`*`.red + `    Tabla de multiplicar   `.cyan + `*`.red);
    console.log(`*****************************`.red);
    console.log(`*`.yellow + `         tabla del ${number}       ` + `*`.yellow)
    console.log(`*    `.yellow  + 
                functions.tablaMultiplicar(number)  + `       *`.yellow);
    console.log(`*******************************\n`.yellow);
}

const repetirCaracter = (caracte, numer) =>{
    for (let i = 0; i < numer; i++) {
        console.log(`~`.green + `            ` + caracte  +  
                    `                ~`.green);
      }
    return `repetir ` + `${caracte}`.bgMagenta + `  ${numer} veces`
}

const interfazRepetirCaracter = (caracte, numer) =>{
    console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`.grey);
    console.log(`~`.green + `        Numeros pares        ` + `~`.green);
    console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`.grey);
    console.log(`~    `.green   +  functions.repetirCaracter(caracte, numer) 
    + `       ~`.green);
    console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n`.grey);
}

const contadorBase = (base) => {
    if(base < 2 || base >10){
        return `se necesita que la base este entre 2 y 10`
    }

    for(let numero = 0; numero < base * base; numero++){

    const numeroDeBase = numero.toString(base);

    const numeroDosDigitos = numeroDeBase.length === 1 ? "0" + numeroDeBase : numeroDeBase;

        console.log(`*                `.yellow    +  numeroDosDigitos  +  
        `              *`.yellow);

    }
    return "                     "
}

const interfazContadorBase = (base) =>{
    console.log(`++++++++++++++++++++++++++++++++++`.cyan);
    console.log(`+`.yellow + `        contador de la base     `+ `+`.yellow);
    console.log(`++++++++++++++++++++++++++++++++++`.cyan);
    console.log(`*    `.yellow   +  functions.contadorBase(base) 
    + `       *`.yellow);
    console.log(`++++++++++++++++++++++++++++++++++\n`.cyan);
}

const inicioSesion = (clave) => {
    let contraseñas = ['clave1','clave2', 'clav3']
    let intento = 0
    for (const claves of clave) {
        intento++ 
               
        if (contraseñas.includes(claves)) {
            console.log(`*`.magenta + ` la contraseña se encuentra intento` + 
            ` ${intento} de 3    ` + `*`.magenta)
            return "                              ";
        } else {
            console.log (`*`.magenta + ` la contraseña No se encuentra intento`+
            ` ${intento} de 3 ` + `*`.magenta);
        }
    }
    console.log("*".magenta + `             alerta de intruso                ` +
     "*".magenta)
    return "                                 ";
}

const interfazIncioSesion = (clave) => {
    console.log(`************************************************`.blue);
    console.log(`*`.blue + `                funciones claves              `.magenta  
    + `*`.blue);
    console.log(`************************************************`.blue);
    console.log(`*    `.blue + `  ` + functions.inicioSesion(clave)
        + `       *`.blue);
    console.log(`************************************************\n`.blue);
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
    console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`.red);
    console.log(`+`.grey + `     Contar numeros pares       `.blue + `+`.grey);
    console.log(`------------------------------------------`.red);
    console.log(`~       `.red + `Los numeros son: ${numeros1}     `+`  *\n`.grey
     + `~       `.red + `La cantidad son: ${numerosPares2(numeros1).cantidad}`
      + `                 *`.grey);
    console.log(`------------------------------------------\n`.red);
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
functions.interfazNumerosPares = interfazNumerosPares;
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
functions.numerosPares2 = numerosPares2;
functions.interfazNumerosPares2 = interfazNumerosPares2;


module.exports = functions;