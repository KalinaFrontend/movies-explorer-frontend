import { baseUrl } from "./constants"
import { moviesApi } from "./constants";

const checkResponse = (res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`${res.status} ${res.statusText}`);
    }
  }


export async function getUserInfo () {
   const data = await fetch(`${baseUrl}/users/me`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
        "Content-Type": "application/json",
      },
   })
   return checkResponse(data);
}

export async function updateUserInfo(userInfo) {
  const data = await fetch(`${baseUrl}/users/me`, {
    method: "PATCH",
    headers: {
      authorization: `Bearer ${localStorage.getItem('jwt')}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userInfo),
  })
  return checkResponse(data);
}

export async function getMovies() {
  const data = await fetch(`${baseUrl}/movies`, {
    method: "GET",
    headers: {
      authorization: `Bearer ${localStorage.getItem('jwt')}`,
      "Content-Type": "application/json",
    },
  });
  return checkResponse(data);
}

export async function saveMovie({ country, director, duration, year, description, image, nameEN, nameRU, trailerLink, id }) {
  const data = await fetch(`${baseUrl}/movies`, {
    method: "POST",
    headers: {
      authorization: `Bearer ${localStorage.getItem('jwt')}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      country: country,
      director: director,
      duration: duration,
      year: year,
      description: description,
      image: `${moviesApi}${image.url}`,
      trailer: trailerLink, 
      nameEN: nameEN,
      nameRU: nameRU, 
      thumbnail: `${moviesApi}${image.formats.thumbnail.url}`,
      movieId: id 
    }),
  });
  console.log(data);
  return checkResponse(data);
}