// ARREGLOS

//Para definir un arreglo con un tamaño determinado se hace de la 
//siguiente manera.

const arregloDefinido = new Array(100);

//En cambio para definir un arreglo en la mayoría de los casos, se hace
//de la siguiente manera.

const arreglo = [];

//Uno puede agregar objetos dentro del arreglo atraves del comando .push
//pero este ultimo no es recomendado debido a que modifica el arreglo
//principal.


const arreglo2 = [1,2,3,4];

//Para agregar un valor dentro del arreglo que se esta clonando, se realiza
//de la siguiente manera
const arregloClonado = [...arreglo2, 2];

//Array.prototype.map() crea un nuevo arreglo en base a una función
//aplicada a otro arreglo. Ej:

let arregloMap = arregloClonado.map( function (numero) {
    return numero * 2;
})


console.log(arregloClonado);
console.log(arregloMap);