import { createContext, useEffect, useState } from 'react';
import { getAllRepositories } from '../api/api';
import { validateObjectsNotNull, validateValues } from '../utils/validations';

export const GithubContext = createContext();

export function GithubProvider({ children }) {
  const [repos, setRepos] = useState();
  const localRef = 'git';

  const getAPI = async () => {
    // Realiza las peticiones a la API y obten el contenido
    const response = await getAllRepositories();
    if (validateValues(response)) {
      const content = response.data;

      // Guarda en el estado actual y en localStorage
      localStorage.setItem(
        localRef,
        JSON.stringify({
          data: content,
          date: new Date().getTime(),
        }),
      );
      setRepos(content);
    }
  };

  /** Funcion que obtiene la información dela api y laguarda en cache */
  const getDataInCaheOrAPI = async () => {
    const cacheString = localStorage.getItem('git');

    if (cacheString) {
      const cache = JSON.parse(cacheString);
      const cacheContent = cache.data;
      const cacheDate = cache.date;
      const date = new Date().getTime();
      const diference = (date - cacheDate) / (1000 * 60 * 60 * 24 * 7);

      if (diference > 1) getAPI();
      else if (!validateValues(cacheContent)) getAPI();
      else if (!validateObjectsNotNull(cacheContent)) getAPI();
      setRepos(cacheContent);
    } else getAPI();
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
