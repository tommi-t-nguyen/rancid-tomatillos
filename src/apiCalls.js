const urlPath = 'https://rancid-tomatillos.herokuapp.com/api/v2';

export const fetchAllMovies = () => {
  return fetch(`${urlPath}/movies`)
  .then(response => response.json());
};



export const fetchSingleMovie = (id) => {
  return fetch(`${urlPath}/movies/${id}`)
  .then(response => response.json());
};