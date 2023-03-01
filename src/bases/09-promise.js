//Promesas
//Documentación: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise

import { getHeroesById, getFilterHeroesBOwner } from './bases/08-import-export-find-filter'

//Las promesas son funciones asincronas, esto quiere decir que cuando el codigo se ejecuta de manera
//secuencial, es decir de linea en linea, las promesas pueden quedar pendientes hasta que se cumpla su
//función. Estas pueden ejecutarse en el momento, en el futuro o nunca.

//Las promesas requieren de un callback (o funcion) que necesita 2 variables. 
//Resolve y reject en este orden, estas informan a la promesa si su función pudo ser llevada a cabo
//con exito o de lo contrario si arrojó un error para ser manejado posteriormente
const promesa = new Promise( (resolve, reject) => {

    setTimeout( () => {

        console.log("Pasaron 2 segundos");
        const heroe = getHeroesById(2);
        console.log(heroe);
        resolve();

    }, 10000 )

} );

//Una ves establecida la promesa, se debe preguntar si esta se ejecutó correctamente o si arrojó un error,
//esto se realiza a traves de los metodos then y catch.

promesa.then( () => {
    console.log("Then de la promesa")
} )
.catch( () => {
    console.log("Catch de la promesa")
} );

console.log("Esto está despues de la promesa, pero se ejecutó antes");

//Las promesas pueden estar en 3 estados, y estos son:
//pendiente (pending), cumplida (fulfilled), rechazada(rejected)

//Una promesa pendiente (pending) puede ser cumplida con un valor o rechazada con una razon.

//En caso de querer pasar un parameto a la promesa, debería hacerse de la siguiente manera.

const getHeroesByIdAsync = ( id ) => {
    return new Promise( (resolve, reject) => {

        setTimeout( () => {
            const heroe2 = getHeroesById(id);
            
            if(heroe2){
                resolve(heroe2);
            }else{
                reject("No se ha podido encontrar al heroe")
            }

        }, 2000 );
    } );
}

getHeroesByIdAsync(3)
.then( console.log )
.catch(console.warn);

