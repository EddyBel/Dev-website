import { useParams, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useBlog } from '../hook/blog.context';
import { Notion } from '../components/@common/notion';
import { ImageShadow } from '../components/@common/img-shadow';
import { randomItem } from '../utils/random';
import { Breadcrumbs, BreadcrumbItem, Skeleton } from '@nextui-org/react';
import { ValidatorVariable } from '../components/@common/validators';
import { LoaderPage } from '../components/@loaders/post-view.loader';

const icons = ['💻', '📄', '📘', '🎓'];

export function Article() {
  const { updateContent, page, covers } = useBlog();
  const { type, id } = useParams();
  const location = useLocation();
  const [cover, setCover] = useState();
  const [links, setLinks] = useState();
  const [icon, setIcon] = useState();
  let url = '';

  useEffect(() => {
    setCover(randomItem(covers));
  }, []);

  /** Busca el contenido de la web o articulo segun el id y tipo de elemento actual */
  useEffect(() => updateContent(type, id.split('-')[0]), [type, id, location]);

  /** Convierte la url en un array dividido por el simbolo / */
  useEffect(() => setLinks(location.pathname.split('/').filter(Boolean)), [location]);

  /** Define al uniciar la renderización que icono va a utilizar la pagina para acompañar al titulo
   * Se ejecuta una sola vez
   */
  useEffect(() => setIcon(randomItem(icons)), []);

  return (
    <main className="w-full max-w-[700px] m-auto p-5 flex flex-col gap-2 relative">
      <ValidatorVariable variable={page} elseComponent={<Skeleton className="h-7 w-2/5 mb-4 rounded-lg" />}>
        <ValidatorVariable variable={links} elseComponent={<></>}>
          <Breadcrumbs variant={'bordered'} className="mb-3">
            {links?.map((link) => {
              url += `/${link.toLowerCase()}`;
              return (
                <BreadcrumbItem key={`${link}-${Math.random()}`} href={`${url}`} className="capitalize">
                  {decodeURIComponent(link.split('-').pop())}
                </BreadcrumbItem>
              );
            })}
          </Breadcrumbs>
        </ValidatorVariable>
      </ValidatorVariable>

      <ValidatorVariable variable={page} elseComponent={<LoaderPage />}>
        <div>
          <ImageShadow width="100%" height={200} url={cover} />
          <h1 className="bg-black/60 backdrop-blur-lg shadow-lg shadow-slate-200/10 text-2xl text-white capitalize rounded-lg -translate-y-8 p-3 ml-4 font-bold w-[fit-content]">
            <span className="text-3xl">{icon}</span>
            {/* <FaCodeBranch className="text-blue-400" /> */}
            {!id ? '' : id.split('-')[1]}
          </h1>
        </div>
        {page?.map((p) => (
          <Notion data={p.content} type={p.type} key={`${p.content}-${Math.random()}`} />
        ))}
      </ValidatorVariable>
    </main>
  );
}
