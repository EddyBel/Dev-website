import { MdOutlineWork } from 'react-icons/md';
import { FaUserAlt } from 'react-icons/fa';
import { CoverMain } from '../assets';
import { BannerShadow } from '../components/@common/banners';
import { useStore } from '../hook/store.context';
import { ItemPoint } from '../components/@common/item-line';
import { CardProyect } from '../components/@cards/card-proyect';
import { ValidatorVariable } from '../components/@common/validators';
import { ExperienceLoader } from '../components/@loaders/experience.loader';
import { Skeleton } from '@nextui-org/react';
import { AboutMeLoader } from '../components/@loaders/about-me.loader';
import { ProyectHomeLoader } from '../components/@loaders/proyects-home.loader';
import { BannerLoader } from '../components/@loaders/banner.loader';

export function Home() {
  const { information } = useStore();

  return (
    <main className="w-full max-w-[1000px] m-auto flex flex-col gap-5 p-5">
      <ValidatorVariable variable={information} elseComponent={<BannerLoader />}>
        <BannerShadow background={CoverMain}>
          <h1 className="text-6xl capitalize font-extrabold text-neutral-100 flex items-center gap-3">
            ¡Hola! soy Eduardo
            {/* <StatusBar status={true} url={SocialNetworks.Linkedin.url} /> */}
          </h1>
          <p className="text-neutral-100/90 text-[0.8rem] md:text-md lg:text-[1.1rem]">
            Desarrollador <span className="p-1 bg-secondary text-neutral-200 rounded-xl font-bold">Web</span> y{' '}
            <span className="p-1 bg-success text-neutral-200 rounded-xl font-bold">Mobile</span>, especializado en la
            creación de experiencias digitales. Con habilidades tanto en el desarrollo{' '}
            <span className="p-1 bg-warning text-neutral-200 rounded-xl font-bold">Front-End</span> y{' '}
            <span className="p-1 bg-warning text-neutral-200 rounded-xl font-bold">Back-End</span>, como en el
            desarrollo de aplicaciones móviles para{' '}
            <span className="p-1 bg-primary text-neutral-200 rounded-xl font-bold">iOS</span> y{' '}
            <span className="p-1 bg-success text-neutral-200 rounded-xl font-bold">Android</span>.
          </p>
        </BannerShadow>
      </ValidatorVariable>

      <ValidatorVariable variable={information?.proyects} elseComponent={<ProyectHomeLoader />}>
        <section className="w-full flex flex-wrap justify-center items-start p-3 gap-4 mb-16">
          {information?.proyects?.slice(0, 3).map((p) => (
            <CardProyect
              zoomed={true}
              url={p.covers[0]}
              title={p.name}
              description={p.description}
              path={p.url}
              key={`${p.name}-${Math.random()}`}
            />
          ))}
        </section>
      </ValidatorVariable>

      <section className="py-32">
        <ValidatorVariable
          variable={information?.experience}
          elseComponent={<Skeleton className="h-4 w-[50%] rounded-lg" />}
        >
          <h1 className="text-3xl md:text-4xl font-bold flex items-center gap-4">
            <MdOutlineWork /> Experiencia laboral
          </h1>
        </ValidatorVariable>
        <ValidatorVariable variable={information?.experience} elseComponent={<ExperienceLoader />}>
          <ul className="relative mt-16 flex flex-col-reverse">
            {information?.experience?.map((exp) => (
              <li key={`${exp.position}-${Math.random()}`}>
                <ItemPoint
                  company={exp.company}
                  description={exp.description}
                  duration={exp.duration}
                  position={exp.position}
                />
              </li>
            ))}
          </ul>
        </ValidatorVariable>
      </section>

      <section className="px-3 pl-9 mt-16">
        <ValidatorVariable
          variable={information?.aboutMe}
          elseComponent={<Skeleton className="h-4 w-[50%] rounded-lg mb-9" />}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-7 flex gap-4">
            <FaUserAlt /> Sobre mi
          </h1>
        </ValidatorVariable>
        <ValidatorVariable variable={information?.aboutMe} elseComponent={<AboutMeLoader />}>
          <div className="w-full text-sm md:text-lg text-neutral-950/90 dark:text-neutral-200/80 max-w-[800px]">
            {information?.aboutMe?.map((text) => (
              <p key={`${text}-${Math.random()}`} className="mb-4">
                {text}
              </p>
            ))}
          </div>
        </ValidatorVariable>
      </section>
    </main>
  );
}
