import { createContext, useEffect, useState } from 'react';
import { getAboutMe, getExperience, getProyects } from '../api/api';
import { validateObjectsNotNull, validateValues } from '../utils/validations';

export const StoreContext = createContext();

export function StoreProvider({ children }) {
  const [information, setInformation] = useState();
  const [theme, setTheme] = useState(false);
  const localRef = 'info';

  /** Realiza las peticiones a la API */
  async function getApi() {
    // Realiza todas las peticiones
    const responseAboutMe = await getAboutMe();
    const responseExperience = await getExperience();
    const responseProyects = await getProyects();

    if (validateValues(responseAboutMe, responseExperience, responseProyects)) {
      // Extrae el contenido de las peticiones
      const aboutMeContent = responseAboutMe?.data;
      const experienceContent = responseExperience?.data;
      const proyectsContent = responseProyects?.data;

      if (validateValues(aboutMeContent, experienceContent, proyectsContent)) {
        // Filtra algunos datos
        let aboutMe = [];
        aboutMeContent?.map((item) => {
          if (item.name === 'Sobre mi') aboutMe = item?.information?.split('\n');
        });

        // Crea el objeto de la información
        const information = {
          aboutMe,
          experience: experienceContent,
          proyects: proyectsContent,
        };

        //   Crea el local storage
        localStorage.setItem(localRef, JSON.stringify({ data: information, date: new Date().getTime() }));
        setInformation(information);
      }
    }
  }

  /**
   * Esta función solicita la información en caso de que no tenga un estado previamente guardado.
   * - Si no existe un storage guardado previamente entonces realiza la petición al servidor.
   * - Si existe un storage guardado previamente entonces valdida que haya pasado mas de una semana para renovar ls datos
   * - Actualiza el estado local de la apliacion para que la aplicacion pueda acceder a los datos
   */
  const getDataInCaheOrAPI = async () => {
    const cache = localStorage.getItem(localRef);
    if (cache) {
      const cacheData = JSON.parse(cache);
      const cacheDate = cacheData.date;
      const cacheContent = cacheData.data;
      const date = new Date().getTime();
      const diference = (date - cacheDate) / (1000 * 60 * 60 * 24 * 7);

      if (diference > 1) getApi();
      else if (!validateValues(cacheContent)) getApi();
      else if (!validateObjectsNotNull(cacheContent)) getApi();
      else setInformation(cacheContent);
    } else getApi();
  };

  function strToBool(str) {
    if (str) {
      const newstr = str?.toLowerCase();
      if (newstr === 'true') return true;
      if (newstr === 'false') return false;
    }
  }

  /** Ejecución cada que cambia el estado del tema */
  //   useEffect(() => {
  //     const html = document.documentElement;
  //     if (theme) html.classList.remove('dark');
  //     else html.classList.add('dark');
  //   }, [theme]);

  /** Ejecución inicial al arrancar la web */
  useEffect(() => {
    getDataInCaheOrAPI();
    const bool = strToBool(localStorage.getItem('theme'));
    if (bool) setTheme(bool);
  }, []);

  const values = {
    information,
    theme,
    setTheme,
  };

  return <StoreContext.Provider value={values}>{children}</StoreContext.Provider>;
}
