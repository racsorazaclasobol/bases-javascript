//Desestructuración de Objetos, o asignación desestrusturacte.

//La desestructuración es una expresion que nos permite desempacar los valores
//de arreglos y/o propiedades de objetos en distintas variables INDIVIDUALES.

//Ej.

// console.log('Ejemplo 1')

const persona = {
    nombre: `Oscar`,
    edad: 28,
    clave: `Ironman`,
    rango: 'Soldado',
}

// console.log( persona.nombre );
// console.log( persona.edad );
// console.log( persona.clave );

/* 
 > Oscar
 > 28
 > Ironman
*/
// console.log('--------------------------------')
//En cambio utilizando la Desestructuración de objetos quedaría así 
// console.log('Ejemplo 2')

const { nombre } = persona;

//Lo que estoy haciendo es extraer la variable de nombre 'nombre' dentro del objeto persona
//en caso de que la variable nombre yá exista sería:
//const {nombre:nombre2} = persona;

// console.log(nombre)

// console.log('--------------------------------')

//Tambien la desestructuración puede ser utilizado en las funciones a traves de los argumentos del mismo
//Ej. con función de llave.

//En caso de que una variable no se encuentre dentro del objeto al cual estamos desestructurando, se puede
//agregar de la manera que se muestra con 'rango'. Pero, en caso de que si venga e igualmente hacemos lo que
//mostramos abajo, javascript preferirá por defecto el que viene en el objeto.
// console.log('Ejemplo 3 - Agregar una variable que no viene originalmente en el objeto al que se le hace la desestructuración')

const retornarPersona = ({ nombre, edad, rango = 'Capitan' }) => {

    // console.log(nombre, edad, rango);

}

retornarPersona(persona);

console.log('--------------------------------')

//Otra situación que suele ser muy muy utilizada en React, y es la siguiente
console.log('Ejemplo 4 - extraer variables devueltas por una función')


const retornaPersona2 = ({ clave, nombre, edad, rango = 'Capitan' }) => {

    //console.log(nombre, edad, rango);
    return{
        nombreClave: clave,
        edadPersona: edad,
        latlng: {
            lat: 5555,
            lng: 6666,
        }
    }
}

const { nombreClave, edadPersona } = retornaPersona2( persona );

console.log(nombreClave, edadPersona);

console.log('--------------------------------')

//Si deseo extraer las variables lat y lng de manera individual, se hace de la siguiente manera
console.log('Ejemplo 5 - extraer objeto dentro de otro objeto utilizando la desestructuración')

//en este caso estamos creando dos variables, lat y lng, y no se crea latlng como variable, ya que
//solamente se utiliza como referencia del objeto dentro del objeto persona al que se le desean 
//extraer sus propiedades

const { nombreClave:clave, latlng: {lat, lng} } = retornaPersona2( persona );

console.log(clave, lat, lng);

