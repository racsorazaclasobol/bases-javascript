
//Manera Tradicional

const activo = true;

let mensaje = '';

if  (activo) {

    mensaje = 'Activo';
}else{
    mensaje = 'Inactivo';
}

// Manera con operador Terniario

const mensaje2 = ( activo ) ? 'Activo' : 'Inactivo';
const mensaje3 = !activo && 'Activo';

console.log(mensaje3)