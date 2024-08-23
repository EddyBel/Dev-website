import { Routes as Switch, Route, Navigate } from 'react-router-dom';

// Paginas
import { HomePage } from '../views/home/index';
import { ProjectPage } from '../views/projects/index';
import { Proyects } from '../views/proyects.view';
import { Blog } from '../views/blog.view';
import { Article } from '../views/article';
import { BlogArticlesType } from '../views/blog-articles-type.view';
import { LoaderPageView } from '../views/load.view';
import { PageNotFound } from '../views/404';

/** Este componente clasifica las rutas correspondientes para cada pagina */
export function Routes() {
  return (
    <Switch>
      <Route strict path="/" element={<RedirectHome />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/works" element={<ProjectPage />} />
      <Route path="/home/blog" element={<Blog />} />
      <Route path="/home/blog/:type" element={<BlogArticlesType />} />
      <Route path="/home/blog/:type/:id" element={<Article />} />
      <Route path="/loader" element={<LoaderPageView />} />
      <Route path="*" element={<PageNotFound />} />
    </Switch>
  );
}

function RedirectHome() {
  return <Navigate to={'/home'} />;
}
