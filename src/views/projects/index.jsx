import { useEffect, useState } from 'react';
import { CardProyect } from '../../components/@cards/card-proyect';
import { INFORMATION_PROJECTS } from '../../data/projects.info';
import { FiltersProjects } from './components/filters';
import { useAutoAnimate } from '@formkit/auto-animate/react';

export function ProjectPage() {
  const [filter, setFilter] = useState();
  const [projects, setProjects] = useState(INFORMATION_PROJECTS);
  const [parent, enableAnimations] = useAutoAnimate(/* optional config */);

  useEffect(() => {
    console.log(filter);
    if (filter == '' || filter == null || filter == undefined || filter == 'todos') setProjects(INFORMATION_PROJECTS);
    else setProjects(INFORMATION_PROJECTS.filter((item) => item.stack.includes(filter)));
  }, [filter]);

  return (
    <main className="w-full min-h-screen max-w-[1000px] m-auto">
      <section className="w-full px-2 pt-3">
        <FiltersProjects
          setFilter={setFilter}
          stacks={['todos', 'javascript', 'typescript', 'python', 'lua', 'html', 'css', 'tailwindcss', 'react', 'ia']}
        />
      </section>

      <section className="flex flex-wrap items-center justify-center gap-2 pt-9" ref={parent}>
        {projects.map((p, index) => {
          return (
            <CardProyect
              zoomed={true}
              url={p.preview}
              title={p.name}
              description={p.description}
              path={`/works/${index}`}
              stack={p.stack}
              website={p.web}
              repo={p.repo}
              like={p.favorite}
              key={`projectmain-${p.name}`}
            />
          );
        })}
      </section>
    </main>
  );
}
