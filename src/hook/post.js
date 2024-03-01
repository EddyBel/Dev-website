import { useEffect, useState } from 'react';
import { useBlog } from './blog.context';

/**
 * Esta función obteiene los posts segun se encuentre en la ruta actual.
 * @param {string} pathname Ruta en la que esta actualmente
 * @returns newPosts
 */
export const usePostsByRoute = (pathname) => {
  const { blog } = useBlog();
  const [newPosts, setNewPosts] = useState();

  useEffect(() => {
    if (blog) {
      if (pathname.includes('snippets')) setNewPosts(blog.PostsSnippets);
      if (pathname.includes('posts')) setNewPosts(blog.PostsBlog);
      if (pathname.includes('notes')) setNewPosts(blog.PostsNotes);
    }
  }, [blog, pathname]);

  return {
    oldPosts: blog,
    posts: newPosts,
  };
};

export const useGetLastNotes = (lastElements) => {
  const { blog } = useBlog();
  const [newPosts, setNewPosts] = useState({
    snippets: [],
    posts: [],
    notes: [],
  });

  useEffect(() => {
    if (blog) {
      setNewPosts({
        snippets: blog.PostsSnippets?.slice(-lastElements),
        posts: blog.PostsBlog?.slice(-lastElements),
        notes: blog.PostsNotes?.slice(-lastElements),
      });
    }
  }, [blog]);

  return newPosts;
};

/**
 * Este hook recibe los posts a filtrar y retorna una nueva lista de posts
 * @param {array} posts Posts a filtrar por su nombre
 * @returns newPosts Post filtrados
 */
export const useSearchPost = (posts) => {
  const [search, setSearh] = useState();
  const [newPosts, setNewPosts] = useState();

  useEffect(() => {
    if (!search | (search === '')) setNewPosts(posts);
    else setNewPosts(posts?.filter((post) => post?.name?.toLowerCase().includes(search.toLowerCase())));
  }, [search, posts]);

  return {
    newPosts,
    setSearh,
  };
};

/**
 * Esta función se encarga de dividir los posts en los pedasos seleccionados.
 * @param {array} posts Lista de posts a dividir
 * @param {number} size Las partes en las que se va a dividir los posts
 * @returns {Object} newPosts size Retorna los posts y el tamaño de los posts
 */
export const useDividePosts = (posts, size) => {
  const [newPosts, setNewPosts] = useState([]);

  useEffect(() => {
    if (Array.isArray(posts)) {
      const newPosts = posts.reduce((result, item, index) => {
        let subIndex = Math.floor(index / size);
        if (!result[subIndex]) {
          result[subIndex] = [];
        }
        result[subIndex].push(item);
        return result;
      }, []);

      setNewPosts(newPosts);
    }
  }, [posts]);

  return {
    posts: newPosts,
    size: newPosts?.length,
  };
};
