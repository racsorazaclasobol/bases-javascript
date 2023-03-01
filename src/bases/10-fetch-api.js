//FETCH API

//Fetch API es una interfaz que viene incluido de manera nativa en los navegadores web y en el propio 
//Javascript, por lo que tambien hay otras librerias externas que realizan la misma taréa.

//Fetch API nos permite recuperar recursos de distintos APIs, webServices, etc.

//A traves de la función fetch (que viene integrada de manera nativa en JS, por lo que no es necesario importar
//nada) obtendremos una promesa con los datos entregados por la Api, por lo que su tratamiento es el de una
//promesa


//En este ejemplo utilizaremos la API de Giphy, la cual funciona a traves de una apiKey para poder acceder
//a sus recursos.

const apiKey = 'MZvAN9dCHAqza2Q87AJ2hjGmXzD8ePP4'

//Tan simple como utilizar la funcion fetch() obtendremos la promesa con los arreglos entregados por GIPHY
const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

//Por lo que ahora simplemente tenemos que tratarla como una promesa mas, a traves del Then y el Catch
peticion
    //En este primer then obtenemos la promesa (que viene con un arreglo en su interior)
    //y lo transformamos con la funcion .json() que recibe una promesa.
    .then(resp => resp.json())
    //Cuando termina el primer then, pasamos automaticamente al segundo then.
    //Recuerda que para la desestructuración se utiliza { <nombre del objeto dentro del arreglo> }, 
    //para mas información revisar curso 06-Desestructuración.
    .then( ( {data} ) => {
        //console.log(data.images.original.url)
        const { url } =  data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);

    })
    .catch(console.warm);