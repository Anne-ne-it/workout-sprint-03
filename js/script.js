import peliculas from './peliculas.js'
console.log(peliculas);


/*IDs de cada genero*/
const genero_accion= 28;
const genero_thriller= 53;
const genero_acentura= 12;

/*CONTENEDORES, seleccionamos los divs del HTML por su id)*/
const contenedorAccion = document.getElementById('genero-28'); /*Contenedor de acción*/
const contenedorThriller = document.getElementById('genero-53'); /*Contenedor de thriller*/
const contenedorAventura = document.getElementById('genero-12'); /*Contenedor de aventura*/

/*FUNCIÓN MOSTRAR CONTENIDO EN EL DOM*/
function mostrarPeliculas(lista, contenedor) { // Recibe una lista de pelis y el contenedor donde pintarlas
  lista.forEach(peli => { /*Recorre cada película del array*/
    const div = document.createElement('div'); /*Crea un nuevo div para cada película*/
    div.classList.add('pelicula'); /*Añade una clase CSS al div*/

    /*Comprobamos si la imagen ya tiene URL completa o necesita base*/
    const imagen = peli.poster_path.startsWith('http') 
    ? peli.poster_path /*Si ya es URL completa, la usamos directamente*/
    : `https://image.tmdb.org/t/p/w500${peli.poster_path}`; /*Si no, añadimos la base*/
    div.innerHTML = ` 
    <img src="${imagen}" alt="${peli.title}">
    <h3>${peli.title}</h3>
    `;
    contenedor.appendChild(div); /*Añade el div creado dentro del contenedor en el HTML*/
    })
}

/*FILTRAR Y MOSTRAR PELÍCULAS DE ACCIÓN*/
mostrarPeliculas(
  peliculas.filter(p => p.genre_ids.includes(28)), /*Filtra pelis con género 28 (acción)*/
  contenedorAccion /*Las muestra en el contenedor de acción*/
);

/*FILTRAR Y MOSTRAR PELÍCULAS DE THRILLER*/
mostrarPeliculas(
  peliculas.filter(p => p.genre_ids.includes(53)), /*Filtra pelis con género 53 (thriller)*/
  contenedorThriller /*Las muestra en el contenedor thriller*/
);

/*FILTRAR Y MOSTRAR PELÍCULAS DE AVENTURA*/
mostrarPeliculas(
  peliculas.filter(p => p.genre_ids.includes(12)), /*Filtra pelis con género 12 (aventura)*/
  contenedorAventura /*Las muestra en el contenedor aventura*/
);