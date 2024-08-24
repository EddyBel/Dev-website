import { CardProyect } from '../../components/@cards/card-proyect';
import { ValidatorVariable } from '../../components/@common/validators';
import { ProyectHomeLoader } from '../../components/@loaders/proyects-home.loader';
import { INFORMATION_PROJECTS } from '../../data/projects.info';

export function MainProjectsSection() {
  const PROJECTS = INFORMATION_PROJECTS;

  return (
    <ValidatorVariable variable={PROJECTS} elseComponent={<ProyectHomeLoader />}>
      <section className="w-full flex flex-wrap justify-center items-start p-3 gap-4 mb-16">
        {PROJECTS?.map((p, index) =>
          p.viewMain ? (
            <CardProyect
              zoomed={true}
              url={p.preview}
              stack={p.stack}
              title={p.name}
              description={p.description}
              path={`/works/${index}`}
              website={p.web}
              repo={p.repo}
              showButtonRepo={false}
              key={`projectmain-${index}`}
            />
          ) : (
            <></>
          ),
        )}
      </section>
    </ValidatorVariable>
  );
}
