// top 100 movies

const urlJson = 'img.json';

// Realiza la solicitud fetch al archivo JSON
fetch(urlJson)
  .then(response => response.json())
  .then(data => {
    const carouselImages = document.getElementById('carouselImages');

    // Itera sobre el array de imágenes y crea los elementos del carrusel
    data.imagenes.forEach((imagen, index) => {
      const carouselItem = document.createElement('div');
      carouselItem.classList.add('carousel-item');

      if (index === 0) {
        carouselItem.classList.add('active');
      }

      const imgElement = document.createElement('img');
      imgElement.src = imagen;
      imgElement.classList.add('d-block', 'w-100');
      imgElement.alt = `Slide ${index + 1}`;

      carouselItem.appendChild(imgElement);
      carouselImages.appendChild(carouselItem);
    });
  })
  .catch(error => console.error('Error fetching images:', error));


const url = 'https://imdb-top-100-movies.p.rapidapi.com/';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'd317458e53msh66f1cf55df45c79p10d220jsnf4c309c49c8a',
    'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(data => {
    const items = data;
    // console.log(items);
    const results = document.getElementById('containerCards');
    for (let i = 0; i < items.length; i++) {
      results.innerHTML += `
        <div class="card mb-3" style="width: 18rem;">
                            <img src="${items[i].image}" class=col-lg-4 col-md-6 custom-card>
                            <div class="card-body">
                                <h5 class="card-title">${items[i].title}</h5>
                                <p class="card-text">${items[i].description}</p>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">${items[i].rating}</li>
                                <li class="list-group-item">${items[i].id}</li>
                                <li class="list-group-item">${items[i].year}</li>
                            </ul>
                            <div class="card-body">
                                <a href="${items[i].imdb_link}" class="card-link">Trailer</a>
                            </div>
                        </div>
        `;

    }

  })
  .catch(error => console.error('Error al obtener datos de la API:', error));

// mAURICIO AYUDA
// const options = {
//     method: 'GET',
//     headers: {
//         accept: 'application/json',
//         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NmJhZmZmYzgxOGIzMzI1MDQzNjBkZjQyNmY1OWM1MCIsInN1YiI6IjY1N2FjOWRmN2VjZDI4MDBjNzBkMTI2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tl-0_YbbqHe9hi0pOuJINkNI-eODOsFjlBKCEsHd4Dc'
//     }
// };

// fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
//     .then(response => response.json())
//     .then(data => {
//         const items = data.results;
//         console.log(items);
//         let resultados = document.getElementById('containerCards');
//         for (let i = 0; i < items.length; i++) {
//             resultados.innerHTML += `
//                    <div class="card mb-3" style="width: 18rem;">
//                                        <img src="${items[i].poster_path}" class=col-lg-4 col-md-6 custom-card>
//                                        <div class="card-body">
//                                            <h5 class="card-title">${items[i].original_title}</h5>
//                                            <p class="card-text">${items[i].overview}</p>
//                                        </div>
//                                        <ul class="list-group list-group-flush">
//                                            <li class="list-group-item">${items[i].media_type}</li>
//                                            <li class="list-group-item">${items[i].vote_average}</li>
//                                            <li class="list-group-item">${items[i].release_date}</li>
//                                        </ul>
//                                        <div class="card-body">
//                                            <a href="${items[i].video}" class="card-link">Trailer</a>
//                                        </div>
//                                    </div>
//                    `;

//         }

//     })
//     .catch(err => console.error(err));
