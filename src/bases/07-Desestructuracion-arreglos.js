//Desestructuración de Arreglos

//Ejemplo sin usar Desestructuración

console.log('Ejemplo sin Desestructuracion')

const personajes = ['Luffy', 'Zoro', 'Sanji'];

console.log(personajes[0]);
console.log(personajes[1]);
console.log(personajes[2]);

console.log('--------------------')

//Ejemplo Desestructuración de arreglos
console.log('Ejemplo 1 - con desestructuración de arreglos de manera básica')
console.log('------')

//De esta manera le estoy diciendo que me devuelva el primer valor del arreglo
const [ p1 ] = personajes;

console.log('obtener el primer elemento del arreglo')
console.log(p1);
console.log('------')

//Pero, ¿y si quiero obtener el segundo, o el tercero?, pues de debe anteponer una serie de , antes 
//del la variable que se esta creando.
//Por ejemplo, si deseo obtener el tercer elemento del arreglo, debo anteponer 2 ',' antes de la 
//variable a crear.

const [, , p3] = personajes;
console.log('obtener el tercer elemento del arreglo')
console.log(p3);

console.log('--------------------')

//Realizar una desestructuración de una funcion que devuelva un arreglo
console.log('Ejemplo 2 - desestructuración de una funcion que devuelva un arreglo')

/*const retornaArreglo = () => {
    return ['ABC', 123]
    
};*/

const retornaArreglo = () => ['ABC', 123];

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

console.log('--------------------')

//Ejemplo 3 - Tarea
//1. el primer valor del arr debe llamarse 'nombre'
//2. la funcion dentro del arreglo se llamara SetNombre()
//Hacer la desestructuración de la función de abajo.

const UseState = ( valor ) => {
    return [
        valor,
        () => { 
            console.log('Hola Mundo')
         }
    ]
}

const [nombre, SetNombre] = UseState('Luffy');

console.log( nombre );
SetNombre();

