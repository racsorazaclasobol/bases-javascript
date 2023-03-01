//Async y Await

//Async crea una funcion asíncrona (al igual que promises), por lo que si una petición no está lista, pasa a la siguiente linea 
// y ejecuta el resto del código hasta que termine la petición.

//await es una extención del async que hace que la peticion en concreto se vuelva sincrona, evitando que se 
//ejecute el resto del código si la petición aún no ha terminado.

const getImage = async() => {

    try {
        
        const apiKey = 'MZvAN9dCHAqza2Q87AJ2hjGmXzD8ePP4'
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();

        const { url } = data.images.original;
        const img = document.createElement('img');

        img.src = url;

        document.body.append(img);


        console.log(data.images.original.url)

    } catch (error) {
        console.error(error);
    }

}

getImage();