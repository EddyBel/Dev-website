import { MainAboutMeSection } from './main-aboutme.section';
import { MainExperienceSection } from './main-experience.section';
import { MainProjectsSection } from './main-projects.section';
import { MainSection } from './main.section';

export function HomePage() {
  return (
    <main className="w-full max-w-[1000px] m-auto flex flex-col gap-5 p-5">
      <MainSection />
      <MainProjectsSection />
      <MainExperienceSection />
      <MainAboutMeSection />
    </main>
  );
}
