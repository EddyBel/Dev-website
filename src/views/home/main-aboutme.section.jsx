import { FaUserAlt } from 'react-icons/fa';
import { ValidatorVariable } from '../../components/@common/validators';
import { INFORMATION_MESSAGES } from '../../data/messages.info';
import { Skeleton } from '@nextui-org/react';
import { AboutMeLoader } from '../../components/@loaders/about-me.loader';

export function MainAboutMeSection() {
  const { aboutMe } = INFORMATION_MESSAGES;

  return (
    <section className="px-3 pl-9 mt-16">
      <ValidatorVariable variable={aboutMe} elseComponent={<Skeleton className="h-4 w-[50%] rounded-lg mb-9" />}>
        <h1 className="text-3xl md:text-4xl font-bold mb-7 flex gap-4 source-code-pro">
          <FaUserAlt /> Sobre mi
        </h1>
      </ValidatorVariable>
      <ValidatorVariable variable={aboutMe} elseComponent={<AboutMeLoader />}>
        <div className="w-full text-sm text-neutral-950/90 dark:text-neutral-200/80 max-w-[800px]">
          {aboutMe?.map((text, index) => (
            <p key={`aboutmeitem-${index}`} className="mb-4 source-code-pro">
              {text}
            </p>
          ))}
        </div>
      </ValidatorVariable>
    </section>
  );
}
