import { createContext, useEffect, useState } from 'react';
import { getBlogPageContent, getBlogSnippets, getBlogNotes, getBlogPosts } from '../api/api';
import { randomItem } from '../utils/random';
import { CoversGlobal, CoversSnippets } from '../assets';
import { validateObjectsNotNull, validateValues } from '../utils/validations';

/** Contexto que guarda los posts del blog */
export const BlogContext = createContext();

export function BlogProvider({ children }) {
  const [blog, setBlog] = useState();
  const [page, setPage] = useState();
  const [covers, setCovers] = useState([
    'https://images.pexels.com/photos/5483071/pexels-photo-5483071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://static.wixstatic.com/media/nsplsh_4d534e385446684a306973~mv2_d_5184_3456_s_4_2.jpg/v1/fill/w_1976,h_756,al_c,q_90/nsplsh_4d534e385446684a306973~mv2_d_5184_3456_s_4_2.webp',
    'https://images.pexels.com/photos/4218883/pexels-photo-4218883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/15467761/pexels-photo-15467761/free-photo-of-person-scanning-qr-code-from-screen.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  ]);
  const localRef = 'blog';

  const defaultDescriptionNotes =
    'Exploro ideas innovadoras y perspectivas educativas que enriquecerán tu experiencia académica.';
  const defaultDescriptionSnippets =
    'Simplifica tu trabajo con estas valiosas piezas de código que te comparto para facilitar tu camino en el mundo de la programación.';
  const defaultDescriptionPosts =
    'Mi contenido te guiará a través de diversas temáticas, ofreciéndote insights valiosos para expandir tus habilidades y conocimientos.';

  const updateContent = (type, id) => {
    getBlogPageContent(type, id).then((response) => setPage(response.data));
  };

  const standardize = (posts, covers, defaultDescription, callback) => {
    return posts?.map((post) => {
      if (!callback) post['cover'] = randomItem(covers);
      else callback(post);
      post['description'] = !post['description'] ? defaultDescription : post['description'];
      return post;
    });
  };

  /** Realiza las peticiones a la web */
  const getAPI = async () => {
    // Realiza las peticiones para obtener los posts
    const responseSnippetsPosts = await getBlogSnippets();
    const responseNotePosts = await getBlogNotes();
    const responsePostsPosts = await getBlogPosts();

    if (validateValues(responseNotePosts, responsePostsPosts, responseSnippetsPosts)) {
      const SnippetsContent = responseSnippetsPosts?.data;
      const NotesContent = responseNotePosts?.data;
      const PostsContent = responsePostsPosts?.data;

      if (validateValues(SnippetsContent, NotesContent, PostsContent)) {
        // Agrega propiedades estanda a todas las notas encontradas en la petición
        const PostsSnippets = standardize(SnippetsContent, CoversSnippets, defaultDescriptionSnippets);
        const PostsNotes = standardize(NotesContent, CoversGlobal, defaultDescriptionNotes);
        const PostsBlog = standardize(PostsContent, CoversSnippets, defaultDescriptionPosts);

        //   Crea el objeto que contendra las notas
        const blog = {
          PostsSnippets,
          PostsNotes,
          PostsBlog,
        };

        //   Guarda en el local storage y en el estado
        localStorage.setItem(
          localRef,
          JSON.stringify({
            data: blog,
            date: new Date().getTime(),
          }),
        );
        setBlog(blog);
      }
    }
  };

  const getPostsInCacheOrPost = async () => {
    const cacheString = localStorage.getItem(localRef);
    // Valida si el localStorage tiene algun valor
    if (cacheString) {
      const cache = JSON.parse(cacheString);
      const cacheDate = cache.date;
      const cacheContent = cache.data;
      const date = new Date().getTime();
      const diference = (date - cacheDate) / (1000 * 60 * 60 * 24 * 7);

      //   Valida si ya paso mas de una semana
      if (diference > 1) getAPI();
      else if (!validateValues(cacheContent)) getAPI();
      else if (!validateObjectsNotNull(cacheContent)) getAPI();
      else setBlog(cacheContent);
    } else getAPI();
  };

  /** Ejecución inicial nada mas iniciar la web */
  useEffect(() => {
    getPostsInCacheOrPost();
  }, []);

  const values = {
    updateContent,
    page,
    covers,
    blog,
  };

  return <BlogContext.Provider value={values}>{children}</BlogContext.Provider>;
}
