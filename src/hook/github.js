import { useContext, useEffect, useState } from 'react';
import { GithubContext } from '../store/github.context';

/** Solicita el contexto de  github */
export const useGithub = () => useContext(GithubContext);

/**
 * Esta función se encarga de dividir los posts en los pedasos seleccionados.
 * @param {array} posts Lista de posts a dividir
 * @param {number} size Las partes en las que se va a dividir los posts
 * @returns {Object} newPosts size Retorna los posts y el tamaño de los posts
 */
export const useDivideRepos = (repos, size) => {
  const [newRepos, setNewRepos] = useState([]);

  useEffect(() => {
    if (Array.isArray(repos)) {
      const newPosts = repos.reduce((result, item, index) => {
        let subIndex = Math.floor(index / size);
        if (!result[subIndex]) {
          result[subIndex] = [];
        }
        result[subIndex].push(item);
        return result;
      }, []);

      setNewRepos(newPosts);
    }
  }, [repos]);

  return {
    repos: newRepos,
    size: newRepos?.length,
    allSize: repos?.length,
  };
};

/**
 * Este hook recibe los posts a filtrar y retorna una nueva lista de posts
 * @param {array} posts Posts a filtrar por su nombre
 * @returns newPosts Post filtrados
 */
export const useSearchRepo = (repos) => {
  const [search, setSearh] = useState();
  const [newRepos, setNewRepos] = useState();

  useEffect(() => {
    if (!search | (search === '')) setNewRepos(repos);
    else setNewRepos(repos?.filter((repo) => repo?.name?.toLowerCase().includes(search.toLowerCase())));
  }, [search, repos]);

  return {
    newRepos,
    setSearh,
  };
};

export const useExtractTags = () => {
  const { repos } = useGithub();
  const [tags, setTags] = useState();

  useEffect(() => {
    const tags = ['Todos'];

    if (repos) {
      repos?.map((repo) => {
        const lang = repo.lang;
        if (!tags.includes(lang)) tags.push(lang);
      });
    }

    setTags(tags);
  }, [repos]);

  return tags;
};

export const useFilterByTag = (repos, tag) => {
  const [newRepos, setNewRepos] = useState();

  useEffect(() => {
    const reposfiltered = [];

    if (repos)
      repos?.map((repo) => {
        if (!repo.lang & (tag === 'Ninguno')) reposfiltered.push(repo);
        else if (repo.lang === tag) reposfiltered.push(repo);
      });

    if (tag === 'Todos') setNewRepos(repos);
    else setNewRepos(reposfiltered);
  }, [repos, tag]);

  return newRepos;
};
