const functions = { };

const signo = (numero) => {
    if (numero >= 0) {
        return 'Positivo'
    } else {
        return 'negativo'
    }
}

const interfazSigno = (numero) => {
    console.log(`***********************************************`.blue);
    console.log(`*                ` .blue    +    `FUNCIÓN SIGNO` .bgBlue        
                 +  `                *`.blue);
    console.log(`***********************************************`.blue);
    console.log(`*         `.blue   +  `El número ${numero} es ` + " " + functions.signo(numero)    
     +  `          
    *`.blue);
    console.log(`***********************************************\n`.blue);
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
    console.log(`******************************************`);
    console.log(`*        FUNCIÓN ENCONTRO CARACTER       *`);
    console.log(`******************************************`);
    console.log(`*       El  caracter ${caracter.toUpperCase( )} ` + " " + functions.encontroCaracter
    (caracter.toUpperCase( )) + `     *`);
    console.log(`******************************************\n`);
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
    console.log(`******************************************`);
    console.log(`*        FUNCIÓN BUSQUEDA BEBIDA      *`);
    console.log(`******************************************`);
    console.log(`*`  + `${bebida}  ` +  functions.busquedaBebida(bebida ) + `*`);
    console.log(`******************************************\n`);
}
const medioTransporte = (medio) =>{
if (medio === 'avion' || medio === "flota") {
            return `recuerda tener dinero para el pasaje`;
        } else if (medio == "carro" || medio == "bicicleta") {
            return 'recuerda llevar ropa apropiada' ;
        } 
    }
    

    const interfazMedioTransporte = (medio) =>{
        console.log(`******************************************`);
        console.log(`*        Medio de transporte     *`);
        console.log(`******************************************`);
        console.log(`*`  + `${medio}  ` +  functions.medioTransporte(medio) + `*`);
        console.log(`******************************************\n`);
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
    console.log(`*    `  + ` ${numer}  ${caracte} ` +  functions.repetirCaracter(caracte, numer) 
    + `       *`);
    console.log(`******************************************\n`);
}

const contadorBase = (base) => {

    
}


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



module.exports = functions;