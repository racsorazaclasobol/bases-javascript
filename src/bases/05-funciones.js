//Funciones

//La forma incorrecta, poco usada e insegura de inicializar una funcion
//es haciendola de la siguiente manera.

function formaIncorrecta(valor) {
    return `Hola, este es el valor: ${valor}`;
}

console.log(formaIncorrecta('Poto'));

//--------------------

//La forma correcta y clásica de inicializar una función es de
//la siguiente manera.

const funcion1 = function formaClasica(valor){
    return `Hola, este es el valor: ${valor}`;
}

console.log(funcion1('PotoClasico'));

//Esta es la forma correcta y clásica, ya que al inicializar la funcion
//dentro de una variable constante (const), la funcion no puede ser
//alterada.

//-------------------

//En Javascript hay diversas maneras de inicializar una funcion,
//siendo las funciones de Flecha una muy utilizada.

//Forma 1

const funcion2 = (valor) => {
    return `Hola, este es el valor: ${valor}`;
}

console.log(funcion2('PotoFlecha'))

//Forma 2
const funcion3 = (valor) => `Hola, este es el valor: ${valor}`;

console.log(funcion3('PotoFlecha2'));

//Forma 3
const funcion4 = () => `Hola, este no recibe valor`;

console.log(funcion4());

//Forma 4

const funcion5 = () => (
    {
        uid: 'ABC123',
        username: 'razacla'
    }
);

console.log(funcion5());

//Tarea
//1. Transformar la función a una funcion de flecha
//2. Hacer que devuelva un objeto implicito
//3. Probar

//funcion a transformar
const funcionTarea = function(valor){
    return {
        uid: 'ABC321',
        username: valor,
    }
}

//Resultado
const funcionResultado = (valor) => (
    {
        uid: 'ABC147',
        username: valor,
    }
)


console.log(funcionTarea('pepenavaja'));
console.log(funcionResultado('pepeCogoteo'));