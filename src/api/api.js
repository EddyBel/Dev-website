import axios from 'axios';
import axiosRetry from 'axios-retry';
import { ATTEMPTS_API } from '../web.config';

const API = import.meta.env.VITE_API_URL;

axiosRetry(axios, {
  retries: ATTEMPTS_API,
  retryDelay: (retryCount) => retryCount * 1000,
  retryCondition: (error) => {
    if (error.response === undefined) {
      //  Error de la red
    }
    return true;
  },
});

export async function getAboutMe() {
  const response = await axios.get(`${API}/api/information`);
  if (response.status === 200) return response.data;
}

/** Esta funcion obtiene la experiencia laboral reciente de la api */
export async function getExperience() {
  const response = await axios.get(`${API}/api/experience`);
  if (response.status === 200) return response.data;
}

export async function getProyects() {
  const response = await axios.get(`${API}/api/proyects`);
  if (response.status === 200) return response.data;
}

export async function getBlogSnippets() {
  const response = await axios.get(`${API}/api/blog/snippets`);
  if (response.status === 200) return response.data;
}

export async function getBlogNotes() {
  const response = await axios.get(`${API}/api/blog/notes`);
  if (response.status === 200) return response.data;
}
export async function getBlogPosts() {
  const response = await axios.get(`${API}/api/blog/posts`);
  if (response.status === 200) return response.data;
}

export async function getBlogPageContent(type, id) {
  const response = await axios.get(`${API}/api/blog/${type}/${id}`);
  if (response.status === 200) return response.data;
}

export async function getAllRepositories() {
  const response = await axios.get(`${API}/api/github/repos`);
  if (response.status === 200) return response.data;
}

// export function getInformation() {
//   return axios
//     .get(`${API}/api/information`)
//     .then((response) => response.data.data.filter((item) => item === 'Descripción de usuario'));
// }
