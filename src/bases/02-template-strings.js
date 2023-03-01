// TEMPLATE STRINGS

//Los template strings son una manera para concatenar una serie
//de strings, integrar variables con strings, strings multilineas, etc

const nombre = 'Oscar';
const apellido = 'Alcazar';

//metodo antiguo, sin temp. strings

//const nombreCompleto =  nombre + ' ' + apellido;

//Metodo con Template Strings
const nombreCompleto = `
${ nombre } 
${ apellido }
${ 1 + 1}
`;


console.log(nombreCompleto);

function getSaludo( nombre ){
    return 'Hola Mundo ' + nombre;
}

console.log(`Este es un texto: ${getSaludo( nombre )}`)