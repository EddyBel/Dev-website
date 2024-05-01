import { createContext, useEffect, useState } from 'react';
import { getBlogPageContent, getBlogSnippets, getBlogNotes, getBlogPosts } from '../api/api';
import { randomItem } from '../utils/random';
import { validateObjectsNotNull, validateValues } from '../utils/validations';
import { CoversCode, CoversUniversityNotes } from '../constants/cdn.constants';

/** Contexto que guarda los posts del blog */
export const BlogContext = createContext();

export function BlogProvider({ children }) {
  const [blog, setBlog] = useState();
  const [page, setPage] = useState();
  const [lastPosts, setLastPosts] = useState();
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
        const PostsSnippets = standardize(SnippetsContent, CoversCode, defaultDescriptionSnippets);
        const PostsNotes = standardize(NotesContent, CoversUniversityNotes, defaultDescriptionNotes);
        const PostsBlog = standardize(PostsContent, CoversCode, defaultDescriptionPosts);

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

  const getLastPosts = () => {
    if (validateValues(blog)) {
      setLastPosts({
        snippets: blog.PostsSnippets?.slice(-4),
        posts: blog.PostsBlog?.slice(-4),
        notes: blog.PostsNotes?.slice(-4),
      });
    }
  };

  useEffect(() => {
    getLastPosts();
  }, [blog]);

  /** Ejecución inicial nada mas iniciar la web */
  useEffect(() => {
    getPostsInCacheOrPost();
  }, []);

  const values = {
    updateContent,
    page,
    blog,
    lastPosts,
  };

  return <BlogContext.Provider value={values}>{children}</BlogContext.Provider>;
}
