import axios from 'axios';

const API = import.meta.env.VITE_API_URL;

export function getAboutMe() {
  return axios.get(`${API}/information`).then((response) => response.data);
}

export function getInformation() {
  return axios
    .get(`${API}/information`)
    .then((response) => response.data.data.filter((item) => item === 'Descripción de usuario'));
}

/** Esta funcion obtiene la experiencia laboral reciente de la api */
export function getExperience() {
  return axios.get(`${API}/experience`).then((response) => response.data);
}

export function getProyects() {
  return axios.get(`${API}/proyects`).then((response) => response.data);
}

export function getBlogSnippets() {
  return axios.get(`${API}/blog/snippets`).then((response) => response.data);
}

export function getBlogNotes() {
  return axios.get(`${API}/blog/notes`).then((response) => response.data);
}
export function getBlogPosts() {
  return axios.get(`${API}/blog/posts`).then((response) => response.data);
}

export function getBlogPageContent(type, id) {
  return axios.get(`${API}/blog/${type}/${id}`).then((response) => response.data);
}

export function getAllRepositories() {
  return axios.get(`${API}/github/repos`).then((response) => response.data);
}
