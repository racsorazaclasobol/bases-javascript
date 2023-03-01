const persona = {
    nombre: 'Oscar',
    apellido: 'Alcazar',
    edad: 28,
    direccion: {
        ciudad: 'Santiago',
        zip: 5465166,
        lat: 22254,
        lng: 22236, 
    }
};

//console.table(persona);

console.log(persona);

//Para duplicar un objeto correctamente se debe anteponer ... antes del
//objeto a duplicar, ej:

const persona2 = {...persona};
persona2.nombre = 'Oscar2'

console.table(persona2);