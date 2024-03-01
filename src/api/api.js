import axios from 'axios';

const API = import.meta.env.VITE_API_URL;

export function getAboutMe() {
  return axios.get(`${API}/api/information`).then((response) => response.data);
}

export function getInformation() {
  return axios
    .get(`${API}/api/information`)
    .then((response) => response.data.data.filter((item) => item === 'Descripción de usuario'));
}

/** Esta funcion obtiene la experiencia laboral reciente de la api */
export function getExperience() {
  return axios.get(`${API}/api/experience`).then((response) => response.data);
}

export function getProyects() {
  return axios.get(`${API}/api/proyects`).then((response) => response.data);
}

export function getBlogSnippets() {
  return axios.get(`${API}/api/blog/snippets`).then((response) => response.data);
}

export function getBlogNotes() {
  return axios.get(`${API}/api/blog/notes`).then((response) => response.data);
}
export function getBlogPosts() {
  return axios.get(`${API}/api/blog/posts`).then((response) => response.data);
}

export function getBlogPageContent(type, id) {
  return axios.get(`${API}/api/blog/${type}/${id}`).then((response) => response.data);
}

export function getAllRepositories() {
  return axios.get(`${API}/api/github/repos`).then((response) => response.data);
}
