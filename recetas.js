// Función para obtener recetas de la API
const obtenerRecetas= async()=>{
    const url = 'https://the-birthday-cake-db.p.rapidapi.com/';
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5307f446bfmshe1d03488a352e87p107e63jsnede772f199b0',
		'X-RapidAPI-Host': 'the-birthday-cake-db.p.rapidapi.com'
	}
};
    fetch(url, options)
        .then(response => response.json())
        .then(data => {
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
    recetas.slice(0, limite).forEach(receta => {
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('receta-card');

        const titulo = document.createElement('h4');
        titulo.textContent = receta.title;
        tarjeta.appendChild(titulo);

        const imagen = document.createElement('img');
        imagen.src = receta.image;
        tarjeta.appendChild(imagen);

        const descripcion = document.createElement('p');
        descripcion.textContent = receta.difficulty;
        tarjeta.appendChild(descripcion);

        const boton = document.createElement('button');
        boton.textContent = 'Ver Receta';
        boton.addEventListener('click', () => {
        });
        tarjeta.appendChild(boton);

        recetasContainer.appendChild(tarjeta);
    });
}
obtenerRecetas();
