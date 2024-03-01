import { useContext } from 'react';
import { BlogContext } from '../store/blog.context';

export const useBlog = () => useContext(BlogContext);
