import { Skeleton } from '@nextui-org/react';
import { ValidatorVariable } from '../../components/@common/validators';
import { MdOutlineWork } from 'react-icons/md';
import { ItemPoint } from '../../components/@common/item-line';
import { INFORMATION_MESSAGES } from '../../data/messages.info';
import { ExperienceLoader } from '../../components/@loaders/experience.loader';

export function MainExperienceSection() {
  const { experience } = INFORMATION_MESSAGES;

  return (
    <section className="py-32">
      <ValidatorVariable variable={experience} elseComponent={<Skeleton className="h-4 w-[50%] rounded-lg" />}>
        <h1 className="text-3xl md:text-4xl font-bold flex items-center gap-4 source-code-pro">
          <MdOutlineWork /> Experiencia laboral
        </h1>
      </ValidatorVariable>
      <ValidatorVariable variable={experience} elseComponent={<ExperienceLoader />}>
        <ul className="relative mt-16 flex flex-col-reverse source-code-pro">
          {experience?.map((exp, index) => (
            <li key={`experienceitem-${index}`}>
              <ItemPoint
                company={exp.company}
                description={exp.description}
                duration={exp.time}
                position={exp.position}
              />
            </li>
          ))}
        </ul>
      </ValidatorVariable>
    </section>
  );
}
