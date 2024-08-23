import { CardProyect } from '../../components/@cards/card-proyect';
import { INFORMATION_PROJECTS } from '../../data/projects.info';

export function ProjectPage() {
  const PROJECTS = INFORMATION_PROJECTS;
  return (
    <main className="w-full min-h-screen max-w-[1000px] m-auto">
      <section className="flex flex-wrap items-center justify-center gap-2 pt-9">
        {PROJECTS.map((p, index) => {
          return (
            <CardProyect
              zoomed={true}
              url={p.preview}
              title={p.name}
              description={p.description}
              path={p.web || p.repo}
              stack={p.stack}
              website={p.web}
              repo={p.repo}
              like={p.favorite}
              key={`projectmain-${index}`}
            />
          );
        })}
      </section>
    </main>
  );
}
