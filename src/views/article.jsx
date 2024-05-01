import { useParams, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useBlog } from '../hook/blog.context';
import { Notion } from '../components/@common/notion';
import { ImageShadow } from '../components/@common/img-shadow';
import { randomItem } from '../utils/random';
import { Breadcrumbs, BreadcrumbItem, Skeleton, Image, User } from '@nextui-org/react';
import { ValidatorVariable } from '../components/@common/validators';
import { LoaderPage } from '../components/@loaders/post-view.loader';
import { SadBuho } from '../assets';
import { CoversPageArticle } from '../constants/cdn.constants';
import { USERNAME, USER_AVATAR, USER_POSITION, USER_STATUS } from '../constants/information';

const icons = ['💻', '📄', '📘', '🎓'];

export function Article() {
  const { updateContent, page } = useBlog();
  const { type, id } = useParams();
  const location = useLocation();
  const [cover, setCover] = useState();
  const [links, setLinks] = useState();
  const [icon, setIcon] = useState();
  const [siteExist, setSiteExist] = useState();
  let url = '';

  useEffect(() => {
    setCover(randomItem(CoversPageArticle));
  }, []);

  /** Busca el contenido de la web o articulo segun el id y tipo de elemento actual */
  useEffect(() => updateContent(type, id.split('-')[0]), [type, id, location]);

  /** Convierte la url en un array dividido por el simbolo / */
  useEffect(() => setLinks(location.pathname.split('/').filter(Boolean)), [location]);

  /** Define al uniciar la renderización que icono va a utilizar la pagina para acompañar al titulo
   * Se ejecuta una sola vez
   */
  useEffect(() => setIcon(randomItem(icons)), []);

  /** Valida si es que los datos de la web si fueron encontrados */
  useEffect(() => (page === null ? setSiteExist(false) : setSiteExist(true)), [page]);

  return (
    <main className="w-full max-w-[700px] m-auto p-5 flex flex-col gap-2 relative">
      <ValidatorVariable variable={siteExist} elseComponent={<SiteContentNotFound />}>
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
            <h1 className="bg-white/60 dark:bg-black/60 backdrop-blur-lg shadow-lg shadow-slate-200/10 text-2xl text-black dark:text-white capitalize rounded-lg -translate-y-8 p-3 ml-4 max-w-[500px] font-bold w-[fit-content] source-code-pro text-balance">
              <span className="text-3xl">{icon}</span>
              {/* <FaCodeBranch className="text-blue-400" /> */}
              {!id ? '' : id.split('-')[1]}
            </h1>
          </div>
          {page?.map((block) => (
            <Notion block={block} key={`${block.data}-${Math.random()}`} />
          ))}

          <section className="w-full my-12">
            <div className="w-full dark:bg-neutral-800 p-4 rounded-xl">
              <User
                name={USERNAME}
                description={USER_POSITION}
                avatarProps={{
                  src: USER_AVATAR,
                  isBordered: true,
                  color: USER_STATUS ? 'success' : 'secondary',
                }}
              />

              <p className="source-code-pro text-pretty text-[0.7rem] dark:text-neutral-100/70 mt-3">
                ¡Gracias por leer! Soy Eduardo, el autor detrás de estos artículos. Me apasiona compartir mis
                conocimientos y experiencias contigo. Si te ha gustado lo que has leído, no dudes en dejar un comentario
                o compartirlo con tus amigos. Para actualizaciones y más contenido interesante, ¡sígueme en mis redes
                sociales! Hasta la próxima.
              </p>
            </div>
          </section>
        </ValidatorVariable>
      </ValidatorVariable>
    </main>
  );
}

function SiteContentNotFound() {
  return (
    <section className="w-full flex flex-col items-center justify-center pt-5 relative">
      <h1 className="text-5xl capitalize text-balance yeseva-one-regular m-auto text-center animate-fade-up animate-once animate-ease-linear animate-normal inline-block text-transparent bg-clip-text bg-gradient-to-r from-violet-200 to-pink-200">
        ¡Upps! No encontramos el articulo que busca
      </h1>{' '}
      <Image src={SadBuho} isBlurred />
      <div className="w-full h-full absolute">
        <div className="bg-primary/10 w-80 h-80 absolute left-0 bottom-0 blur-xl rounded-full "></div>
        <div className="bg-warning/10 w-80 h-80 absolute right-0 top-0 blur-xl rounded-full "></div>
      </div>
    </section>
  );
}
