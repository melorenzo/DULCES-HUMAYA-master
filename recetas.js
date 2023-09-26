// Función para obtener recetas de la API
const obtenerRecetas= async()=>{
    // Aquí puedes hacer una solicitud a la API de recetas
    // Puedes usar fetch u otra librería para hacer la solicitud
    const url = 'https://the-birthday-cake-db.p.rapidapi.com/';
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5307f446bfmshe1d03488a352e87p107e63jsnede772f199b0',
		'X-RapidAPI-Host': 'the-birthday-cake-db.p.rapidapi.com'
	}
};
    // Ejemplo de solicitud usando fetch
    fetch(url, options)
        .then(response => response.json())
        .then(data => {
            // Luego de obtener los datos, puedes crear las tarjetas de recetas
            crearTarjetasRecetas(data);
        })
        .catch(error => {
            console.error('Error al obtener recetas:', error);
        });
        try {
            const response = await fetch(url, options);
            const result = await response.text();
            console.log(result);
        } catch (error) {
            console.error(error);
        }
}




// Función para crear tarjetas de recetas
function crearTarjetasRecetas(recetas) {
    const recetasContainer = document.getElementById('recetas-container');
    const limite = 3;

    // Recorre las recetas y crea una tarjeta para cada una
    recetas.slice(0, limite).forEach(receta => {
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('receta-card');

        // Agregar titulo a la receta
        const titulo = document.createElement('h4');
        titulo.textContent = receta.title;
        tarjeta.appendChild(titulo);

        // Agrega la imagen de la receta
        const imagen = document.createElement('img');
        imagen.src = receta.image;
        tarjeta.appendChild(imagen);

        // Agrega la descripción de la receta
        const descripcion = document.createElement('p');
        descripcion.textContent = receta.difficulty;
        tarjeta.appendChild(descripcion);

        // Agrega el botón con el título de la sección Recetas
        const boton = document.createElement('button');
        boton.textContent = 'Ver Receta';
        boton.addEventListener('click', () => {
            // Aquí puedes definir la lógica para mostrar la receta completa
        });
        tarjeta.appendChild(boton);

        recetasContainer.appendChild(tarjeta);
    });
}

// Llama a la función para obtener las recetas al cargar la página
obtenerRecetas();
