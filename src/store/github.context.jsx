import { createContext, useEffect, useState } from 'react';
import { getAllRepositories } from '../api/api';

export const GithubContext = createContext();

export function GithubProvider({ children }) {
  const [repos, setRepos] = useState();

  /** Funcion que obtiene la información dela api y laguarda en cache */
  const getDataInCaheOrAPI = async () => {
    const cacheString = localStorage.getItem('git');

    if (cacheString) {
      const cache = JSON.parse(cacheString);
      const cacheData = cache.data;
      const cacheDate = cache.date;
      const date = new Date().getTime();
      const diference = (date - cacheDate) / (1000 * 60 * 60 * 24 * 7);

      if (diference > 1) {
        // Realiza las peticiones a la API y obten el contenido
        const response = await getAllRepositories();
        const content = response.data;

        // Guarda en el estado actual y en localStorage
        localStorage.setItem(
          'git',
          JSON.stringify({
            data: content,
            date: new Date().getTime(),
          }),
        );
        setRepos(content);
      }
      setRepos(cacheData);
    } else {
      // Realiza las peticiones a la API y obten el contenido
      const response = await getAllRepositories();
      const content = response.data;

      // Guarda en el estado actual y en localStorage
      localStorage.setItem(
        'git',
        JSON.stringify({
          data: content,
          date: new Date().getTime(),
        }),
      );
      setRepos(content);
    }
  };

  /** Ejecuta al iniciar la web */
  useEffect(() => {
    getDataInCaheOrAPI();
  }, []);

  const values = {
    repos,
  };

  return <GithubContext.Provider value={values}>{children}</GithubContext.Provider>;
}
