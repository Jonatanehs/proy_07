// se crea una constante llamada functions que tiene un objeto vacio 
const functions = { };

// se crea una funcion flecha utilizando como parametro llamado numero 
const signo = (numero) => {

// si numero es mayor o igual a 0 retornara un string diciendo positivo 
    if (numero >= 0) {
        return 'Positivo'

// si es falso retornara un string con mensahe negativo 
    } else {
        return 'negativo'
    }
}

// se crea una nueva funcion flecha llamada interfazSigno que tiene un parametro de nombre numero 
const interfazSigno = (numero) => {

// se imprime varios mensajes en las consola que va a simular una interfaz 
    console.log(`******************************************`.yellow);
    console.log(`*                ` .yellow    +    `FUNCIÓN SIGNO` .bgBlue        
                 +  `           *`.yellow);
    console.log(`******************************************`.yellow);
    console.log(`*         `.blue   +  `El número ` + `${numero}`.yellow + ` es ` +
     " " + functions.signo(numero)    +  `       *`.blue);
    console.log(`******************************************\n`.red);
}

// se crea una nueva funcion flecha con un parametro llamado caracter 
const encontroCaracter = (caracter) => {

// se crea una constate llamado datos que obtendra un arreglo con 5 datos 
    const datos = ['A', 'B', 'C', 'D', 'E'];

// si datos inluye el caracter pasara por verdadero y se retorna un string 
    if (datos.includes(caracter)) {
        return 'Se encuentra';

// si es falso retornara un string 
    }else {
        return 'No se encuentra';
    }
}

// se crea una funcion flecha que tendra como parametro caracter 
const interfazEncontroCaracter = (caracter) =>{

// se imprimiran varios mensajes en consola que simularan una interfaz 
    console.log(`******************************************`.green);
    console.log(`*  `.red + `      FUNCIÓN ENCONTRO CARACTER   `.grey + `    *`.red);
    console.log(`******************************************`.magenta);
    console.log(`*   `.white + `    El  caracter ${caracter.toUpperCase( )} ` 
    + " " + functions.encontroCaracter(caracter.toUpperCase( )) + `     *`.white);
    console.log(`******************************************\n`.magenta);
}

// se crea una funcion flecha que tendra como parametro bebida 
const busquedaBebida = (bebida) => {

// switch es una condicion cuya expresion es bebida 
   switch (bebida) {

// el caso de que sea cerveza retornara un string diciendo barra 
        case 'cerveza' :
            return `barra`;
            break;

// el caso de que sea vino retornara un string diciendo barra 
        case 'vino' :
            return `barra`;
            break;

// el caso de que sea gaseosa retornara un string diciendo barra 
        case 'gaseosa' :
            return `barra`;
            break;

// el caso de que sea agua retornara un string diciendo barra 
        case 'agua' :
            return `barra`;
            break;

// si ninguno de los anteriores casos es verdadero retornara un string diciendo tienda 
        default:
            return `tienda`;
            break;
  
    }
};

// se crea una nueva funcion flecha que tiene como parametro bebida 
const interfazBusquedaBebida = (bebida) =>{

// se imprimira varios mensajes en consola que simularan una interfaz 
    console.log(`+++++++++++++++++++++++++++++++++++++++`.america);
    console.log(`<  `.grey + `      FUNCIÓN BUSQUEDA BEBIDA   `.bgYellow + `   >`.grey);
    console.log(`+++++++++++++++++++++++++++++++++++++++`.america);
    console.log(`<          `.blue + ` ${bebida}  `.blue +  functions.busquedaBebida(bebida ).yellow
     + `               >`.red);
    console.log(`+++++++++++++++++++++++++++++++++++++++\n`.america);
}

// se crea una nueva funcion flecha que tiene como parametro medio 
const medioTransporte = (medio) =>{

// si medio es estrictamente igual avion o flota retornara un string 
if (medio === 'avion' || medio === "flota") {
            return `recuerda tener dinero para el pasaje`;

/* si la condicion anterior no se cumple, si es estrictamente igual a carro 
o bicicleta retorna un nuevo string */
        } else if (medio === "carro" || medio === "bicicleta") {
            return 'recuerda llevar ropa apropiada' ;
        } 
    }
    
// se crea una nueva funcion flecha que tiene como parametro medio 
    const interfazMedioTransporte = (medio) =>{

// se imprimira varios mensajes en consola que simularan una interfaz 
        console.log(`//////////////////////////////////////////`.magenta);
        console.log(`|   `.green + `       Medio de transporte       ` + `    |`.green);
        console.log(`//////////////////////////////////////////`. magenta);
        console.log(`|  `.blue  + `${medio}  ` +  functions.medioTransporte(medio) + ` |`.blue);
        console.log(`//////////////////////////////////////////\n`.magenta);
    }

// se crea una funcion flecha con tres parametros distintos 
    const facturaProducto = (cantidad, precio, descuento) => {

// se crea una constante que contiene descuento dividido en 100 
        const descuent = descuento / 100;

// se crea una constante que contiene la cantidad * precio * descuento 
        const descuentoTotal = cantidad * precio * descuent; 

// se crea una constante que contiene la cantidad por precio menos decuento y se retorna lo que hay en total 
        const total = cantidad * precio - descuentoTotal;
        return total;
    };

// se crea una nueva funcion flecha con tres parametros distintos 
const interfazFacturaProducto = (cantidad, precio, descuento) =>{

// se imprimira varios mensajes en consola que simularan una interfaz 

    console.log(`________________________________________`.cyan);
    console.log(`^`.red+ `              factura                 `.grey + `^`.red);
    console.log(`----------------------------------------`.cyan);
    console.log(`^`.yellow  + `  La   ` + `${cantidad}`.bgBlue + `  prendas ` +  
    `con  ` + `${precio}`.bgGreen + ` por und `+ ` ^\n`.yellow 
    + `|`.yellow + `  Con descuento del ` + `${descuento}%`.bgYellow + `  =  ` + 
    functions.facturaProducto(cantidad, precio, descuento) +  `     |`.yellow);
    console.log(`----------------------------------------\n`.cyan);
}

// se crea una funcion flecha que utiliza como parametro menu 
const bebidaComida = (menu) => {

// el switch tendra como exprecion menu 
    switch (menu) {

// si el caso 1 es carne retornara un string 
         case 'carne' :
             return `vino tinto`;
             break;

// si el caso 2 es pescado retornara un string 
         case 'pescado' :
             return `vino blanco`;
             break;
// si ningun caso se cumple retorna un string 
         default:
             return `agua`;
             break;
   
     }
 }
 
//  se crea una nueva funcion flecha que obtiene de parametro menu 
 const interfazBebidaComida = (menu) =>{

// se imprimira varios mensajes en consola que simularan una interfaz 
     console.log(`-----------------------------------`.green);
     console.log(`-`.red + `        bebidas del menu        ` + `<`.blue);
     console.log(`-----------------------------------`.green);
     console.log(`-`.red  + `        ` + `${menu}  ` +  functions.bebidaComida(menu)
      + `           ` + `<`.blue);
     console.log(`-----------------------------------\n`.green);
 }

// se crea una funcion flecha como parametro juegos 
const salaJuegos = (juegos) => {

// si juegos es mayor de 4000 pasara 
    if(juegos > 4000){ 

// se crea una variable llamada cambio obtendra juegos - 4000 
        let cambio = juegos - 4000

// retorna un mensaje en consola 
        return ` recibe cambio de  ` + `${cambio}`.bgMagenta
     }

// se uriliza el switch con una exprecion llamada juegos 
    switch (juegos) {

// el caso 1 es 4000 retorna un string 
         case 4000 :
             return `acceso todos los juegos`;
             break;

// el caso 2 es 3000 retorna un string 
         case  3000 :
             return `acceso consola, 2D y 3D`;
             break;
        
// el caso 3 es 2000 retorna un string 
         case 2000 :
            return `acceso consola y 2D `;
            break;
   
// si no es ningun caso retornara un mensaje en consola 
         default:
             return `ingrese mas dinero`;
             break;
   
     }
 }
 
//  se crea una nueva funcion flecha que obtiene de parametro juegos
 const interfazSalaJuegos = (juegos) =>{

// se imprimira varios mensajes en consola que simularan una interfaz 
     console.log(`******************************************`.america);
     console.log(`<`.red + `         el precio de los juegos        `.gray + `>`.blue);
     console.log(`******************************************`.america);
     console.log(`*    `.red  + `${juegos}`.bgYellow + `  `  +  functions.salaJuegos(juegos) 
     + `       *`.blue);
     console.log(`******************************************\n`.america);
 }

// se crea una funcion flecha que obtiene como parametro entero 
const contarNumero = (entero) => {

/* el for es una estructura ciclica que se ejecutara mientras i sea igual a 0,
si i es menor que el entero y i aumenta uno en uno */
    for(let i=0; i < entero; i++){

// se imprime una mini interfaz en cosola 
      console.log(`^`.blue + `          ` + i + `          ` + `^`.blue)
    }
// se retornara un string vacio 
    return ''
}

//  se crea una nueva funcion flecha que obtiene de parametro entero
const interfazContarNumero = (entero) =>{

// se imprimira varios mensajes en consola que simularan una interfaz
    console.log(`+++++++++++++++++++++++`.magenta);
    console.log(`~`.magenta + `    ` + `contar numeros`.america + `   ` + `~`.magenta);
    console.log(`+++++++++++++++++++++++`.magenta);
    console.log(`^`.blue + `         `    +  `     ` +  functions.contarNumero(entero) + `      ` + ` ^`.blue);
    console.log(`+++++++++++++++++++++++\n`.blue);
}

// se crea una nueva funcion flecha que contiene como parametro par 
const numerosPares = (par) => {

// se crea un for donde i va hacer igual a 0, i sea igual o menor que par y aumente uno en uno 
    for(let i = 0; i <= par; i++) {

// si i se divide en 2 y es estrictamente igual a 0 imprimira un mensaje en consola 
        if(i % 2 === 0){
            console.log(`~         `.yellow + i + `          ~`.yellow)
       
    }
    }
    return "";
}

//  se crea una nueva funcion flecha que obtiene de parametro par
const interfazNumerosPares = (par) =>{

// se imprimira varios mensajes en consola que simularan una interfaz
    console.log(`=======================`.magenta);
    console.log(`=    `.magenta + `Numeros pares`.bgGreen + `    =`.magenta);
    console.log(`=======================`.magenta);
    console.log(`~       `.yellow + functions.numerosPares(par)  + 
    `              ~`.yellow);
    console.log(`=======================\n`.magenta);
}

// se crea una funcion flecha con parametro number
const tablaMultiplicar = (number) => {

/* se crea un for donde se ejecutara el bucle mientras c es igual a 1.
c sea menor o igual a 10 y aumenta uno en uno */
    for (let c = 1; c <= 10; c++) {

// la constante contiene a number por c y se imprime un mensaje en consola 
        const resultado = number * c;
        console.log(`*`.yellow + `         ${number} x ${c} = ${resultado}        ` 
        +  `*`.yellow);
    }

// se retorna un string vacio 
    return "                  " 
}

//  se crea una nueva funcion flecha que obtiene de parametro number
const interfazTablaMultiplicar = (number) =>{

// se imprimira varios mensajes en consola que simularan una interfaz
    console.log(`*****************************`.red);
    console.log(`*`.red + `    Tabla de multiplicar   `.cyan + `*`.red);
    console.log(`*****************************`.red);
    console.log(`*`.yellow + `         tabla del ${number}       ` + `*`.yellow)
    console.log(`*    `.yellow  + 
                functions.tablaMultiplicar(number)  + `       *`.yellow);
    console.log(`*******************************\n`.yellow);
}

// se crea una funcion flecha con dos parametros 
const repetirCaracter = (caracte, numer) =>{

// se utiliza un nuevo for donde i es igual a 0, i es menor que numer y este aumenta uno en uno 
    for (let i = 0; i < numer; i++) {

// se imprime un mensaje en consola 
        console.log(`~`.green + `            ` + caracte  +  
                    `                ~`.green);
      }

// se retorna un string 
    return `repetir ` + `${caracte}`.bgMagenta + `  ${numer} veces`
}

//  se crea una nueva funcion flecha que obtiene dos parametros
const interfazRepetirCaracter = (caracte, numer) =>{

// se imprimira varios mensajes en consola que simularan una interfaz
    console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`.grey);
    console.log(`~`.green + `        Numeros pares        ` + `~`.green);
    console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`.grey);
    console.log(`~    `.green   +  functions.repetirCaracter(caracte, numer) 
    + `       ~`.green);
    console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n`.grey);
}

// se crea una nueva funcion flecha como parametro base 
const contadorBase = (base) => {

// si base es menor que 2 o maypt que 10, retornara un string 
    if(base < 2 || base >10){
        return `se necesita que la base este entre 2 y 10`
    }

/* se crea una estructura en bucle for que se ejecuta cuando numero es igual a 0,
si numero es menor que la base y esta se mulyiplica por base y el numero aumenta uno en uno */
    for(let numero = 0; numero < base * base; numero++){

// la constante numero base contendra el numero convirtiendo la base a un string
    const numeroDeBase = numero.toString(base);

/* se crea una constante numeroDosDigitos que contiene la longitud de la cadena sea estrictamente
igual a 1 si es verdadero es igual a 0 y si es falso pasaria a numeroDeBase */
    const numeroDosDigitos = numeroDeBase.length === 1 ? "0" + numeroDeBase : numeroDeBase;

        console.log(`*                `.yellow    +  numeroDosDigitos  +  
        `              *`.yellow);

    }

// retorna un string vacio 
    return "                     "
}

//  se crea una nueva funcion flecha que obtiene de parametro base
const interfazContadorBase = (base) =>{

// se imprimira varios mensajes en consola que simularan una interfaz
    console.log(`++++++++++++++++++++++++++++++++++`.cyan);
    console.log(`+`.yellow + `        contador de la base     `+ `+`.yellow);
    console.log(`++++++++++++++++++++++++++++++++++`.cyan);
    console.log(`*    `.yellow   +  functions.contadorBase(base) 
    + `       *`.yellow);
    console.log(`++++++++++++++++++++++++++++++++++\n`.cyan);
}

// se crea una funcion flecha con  un parametro llamado clave
const inicioSesion = (clave) => {

// se crea una variable llamada contraseñas que obtendra un arreglo con tres string 
    let contraseñas = ['clave1','clave2', 'clav3']

// se crea una variable llamada inyendo que contien un 0 
    let intento = 0

// se crea un bucle que itera claves de clave y aumenta uno en uno
    for (const claves of clave) {
        intento++ 
               
// si contraseñas invlue vlave imprimira un mensaje en consola 
        if (contraseñas.includes(claves)) {
            console.log(`*`.magenta + ` la contraseña se encuentra intento` + 
            ` ${intento} de 3    ` + `*`.magenta)
            return "                              ";

// si es falso imprimira un mensaje en consola y retorna un string vacio 
        } else {
            console.log (`*`.magenta + ` la contraseña No se encuentra intento`+
            ` ${intento} de 3 ` + `*`.magenta);
        }
    }
    console.log("*".magenta + `             alerta de intruso                ` +
     "*".magenta)
    return "                                 ";
}

//  se crea una nueva funcion flecha que obtiene de parametro clave
const interfazIncioSesion = (clave) => {

// se imprimira varios mensajes en consola que simularan una interfaz
    console.log(`************************************************`.blue);
    console.log(`*`.blue + `                funciones claves              `.magenta  
    + `*`.blue);
    console.log(`************************************************`.blue);
    console.log(`*    `.blue + `  ` + functions.inicioSesion(clave)
        + `       *`.blue);
    console.log(`************************************************\n`.blue);
}

// se crea una funcion flecha que tiene como argumento numeros 
const minimoMaximo = (numeros) => {

// se crea una nueva variable llamada maximo que contiene numeros tiene un array en 0 
    let minimo = numeros[0]
    let maximo = numeros[0]
    let suma = numeros[0]

/* se crea un for que se ejecuta si c es igual a 0, c es menor a 
la cantidad de la cadena de numeros y aumenta uno en uno */
    for(let c = 0; c<numeros.length; c++){

// si minimo es mayor que numeros de c 
        if(minimo > numeros[c]){

// minimo obtendra lo que esta en numeros 
            minimo = numeros[c];
        }

// si maximo es menor que numeros de c 
        if(maximo < numeros[c]){

// maximo contiene lo que esta en numeros de c 
            maximo = numeros[c];
        }

// se utiliza en un operador para sumar la suma de numeros 
        suma += numeros[c]
    }

// la constante prome contiene suma dividido de los numeros de la cadena
    const prome = suma / numeros.length;

// se retorna un string 
    return (`*` + `   El número mínimo es: ${minimo}` + `        *\n`.blue
            + `*`.red+ `   El número máximo es: ${maximo}` + `      *\n`
            + `*`.blue + `   El promedio es: ${prome}`);
}

//  se crea una nueva funcion flecha que obtiene de parametro numeros
const interfazMinimoMaximo = (numeros) =>{

// se imprimira varios mensajes en consola que simularan una interfaz
    console.log(`***********************************`.america);
    console.log(`*    `   +   `FUNCIÓN MÍN, MÁX Y PROM`.bgRed +`      *`.blue);
    console.log(`***********************************`.america);
    console.log(`*`.blue + `   El arreglo es: ${numeros}`+'   *\n' + ""
     +  functions.minimoMaximo(numeros) + `          *`.red);
    console.log(`***********************************\n`.america);
};

// se crea una funcion flecha con parametro numeros1 
const numerosPares2 = (numeros1) => {

// la constante pares tiene un arreglo vacio 
    const pares = [];

// se cra una variable que contiene un valor de 0 
    let i = 0;
    
// se crea un bucle que ejecuta  si i es menor que la longitud de la cadena 
    while (i < numeros1.length) {

// si numeros1 empieza de l posicion i dividido en 2 y sea estrictamente 0
        if (numeros1[i] % 2 === 0) {

// se agrega los elementos a pares 
            pares.push(numeros1[i]);
        }

// i aumenta uno en uno 
        i++;
    }

    return {
        cantidad: pares.length,
        numerosPares: pares
    };
};

//  se crea una nueva funcion flecha que obtiene de parametro numeros1
const interfazNumerosPares2 = (numeros1) => {

// se imprimira varios mensajes en consola que simularan una interfaz
    console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`.red);
    console.log(`+`.grey + `     Contar numeros pares       `.blue + `+`.grey);
    console.log(`------------------------------------------`.red);
    console.log(`~       `.red + `Los numeros son: ${numeros1}     `+`  *\n`.grey
     + `~       `.red + `La cantidad son: ${numerosPares2(numeros1).cantidad}`
      + `                 *`.grey);
    console.log(`------------------------------------------\n`.red);
};

// se guardara las funciones en functions. 
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

// se exporta lo que esta en functions 
module.exports = functions;