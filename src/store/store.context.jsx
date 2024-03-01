import { createContext, useEffect, useState } from 'react';
import { getAboutMe, getExperience, getProyects } from '../api/api';

export const StoreContext = createContext();

export function StoreProvider({ children }) {
  const [information, setInformation] = useState();
  const user = {
    avatar: 'https://avatars.githubusercontent.com/u/111319309?v=4',
    userName: 'EddyBel',
    userNameProfile: '@eddybel',
    userPosition: 'Full-Stack Developer',
    description:
      'Desarrollador full-stack con pasión por los videojuegos. Me encanta crear experiencias interactivas y divertidas para los usuarios.',
    hashtag: '#AmazingCode',
    github: 'https://github.com/EddyBel',
    linkedin: 'https://www.linkedin.com/in/eduardo-rangel-eddybel/',
    status: true,
  };

  //   useEffect(() => {
  //     console.log(information);
  //   }, [information]);

  /**
   * Esta función solicita la información en caso de que no tenga un estado previamente guardado.
   * - Si no existe un storage guardado previamente entonces realiza la petición al servidor.
   * - Si existe un storage guardado previamente entonces valdida que haya pasado mas de una semana para renovar ls datos
   * - Actualiza el estado local de la apliacion para que la aplicacion pueda acceder a los datos
   */
  const getDataInCaheOrAPI = async () => {
    const cache = localStorage.getItem('info');
    if (cache) {
      const cacheData = JSON.parse(cache);
      const cacheDate = cacheData.date;
      const cacheContent = cacheData.data;
      const date = new Date().getTime();
      const diference = (date - cacheDate) / (1000 * 60 * 60 * 24 * 7);

      if (diference > 1) {
        // Realiza todas las peticiones
        const responseAboutMe = await getAboutMe();
        const responseExperience = await getExperience();
        const responseProyects = await getProyects();

        // Filtra algunos datos
        const aboutMe = responseAboutMe?.data?.map((item) => {
          if (item.name === 'Sobre mi') return item?.information?.split('\n');
        });
        const experience = responseExperience?.data;
        const proyects = responseProyects?.data;

        // Crea el objeto de la información
        const information = {
          aboutMe,
          experience,
          proyects,
        };

        //   Crea el local storage
        localStorage.setItem('info', JSON.stringify({ data: information, date: new Date().getTime() }));
        setInformation(information);
      }
      setInformation(cacheContent);
    } else {
      // Realiza todas las peticiones
      const responseAboutMe = await getAboutMe();
      const responseExperience = await getExperience();
      const responseProyects = await getProyects();

      // Filtra algunos datos
      let aboutMe = '';
      responseAboutMe?.data?.map((item) => {
        if (item?.name?.toLowerCase() === 'sobre mi') aboutMe = item?.information?.split('\n');
      });
      const experience = responseExperience?.data;
      const proyects = responseProyects?.data;

      // Crea el objeto de la información
      const information = {
        aboutMe,
        experience,
        proyects,
      };

      //   Crea el local storage
      localStorage.setItem('info', JSON.stringify({ data: information, date: new Date().getTime() }));
      setInformation(information);
    }
  };

  /** Ejecución inicial al arrancar la web */
  useEffect(() => {
    getDataInCaheOrAPI();
  }, []);

  const values = {
    user,
    information,
  };

  return <StoreContext.Provider value={values}>{children}</StoreContext.Provider>;
}
