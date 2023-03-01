//Import, export y funciones varias de arreglos

//Para realizar una importación se hace de la siguiente manera:
import heroes, { owners } from '../data/heroes'
//Tambien si se pone 'imp' y tabulador, te crea un import automaticamente.


//Si deseamos encontrar un valor, variable, constante dentro de un arreglo almacenado
//en otro lugar se utiliza el método 'find' con la siguiente nomesclatura.


//const getHeroesById = (id) => {
//    return heroes.find((heroe) => heroe.id === id);
//}

export const getHeroesById = (id) => heroes.find((heroe) => heroe.id === id);

// console.log(getHeroesById(2))

// console.log('--------------------')

//Tarea, utilizar el metodo filter para filtrar todos los elementos del arreglo
//cuyo owner sea DC.
//En este caso, el método 'find' no nos sirve, ya que unicamente devuelve 1 resultado,
//en cambio filter, filtra entre todos los elementos, los que coincidan con el parametro
//que le estamos entregando.

export const getFilterHeroesBOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);

// console.log(getFilterHeroesBOwner('DC'));
