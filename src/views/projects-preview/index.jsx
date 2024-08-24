import { Link, useParams } from 'react-router-dom';
import { GetTechIcon } from '../../components/@common/get-tech-icon';
import { TitleProject } from './components/title-project';
import { INFORMATION_PROJECTS } from '../../data/projects.info';
import { Button, Image } from '@nextui-org/react';
import { FiGithub } from 'react-icons/fi';
import { FaChrome } from 'react-icons/fa';
import { HighlightSpecialWords } from './components/description-project';
import { specialWordsInDescription } from './components/specia-words-description';

export function PreviewCodePage() {
  const { id_project } = useParams();

  const project = INFORMATION_PROJECTS[id_project];
  const nameProject = project.name;
  const descriptionProject = project.description;
  const stacksProject = project.stack;
  const image = project.preview;
  const website = project.web;
  const video = project?.videoPreview;
  const repo = project.repo;
  const previewWebsite = website || repo;

  return (
    <main className="min-h-[100dvh] w-full max-w-[1200px] m-auto">
      <div className="flex items-center justify-center flex-wrap gap-4 px-3 pt-7">
        <section className="flex-1 max-w-[400px] py-7">
          <TitleProject gretting={nameProject} time={100} />
          <HighlightSpecialWords text={descriptionProject} especialWords={specialWordsInDescription} />

          <div className="w-full flex items-center gap-2 my-5">
            {stacksProject?.map((t, index) => (
              <GetTechIcon tech={t} key={index} />
            ))}
          </div>

          <div className="flex items-center gap-5 w-full">
            {website ? (
              <Button
                as={Link}
                to={website}
                target="_blank"
                rel="noopener noreferrer"
                color="primary"
                variant="bordered"
                startContent={<FaChrome />}
              >
                Website
              </Button>
            ) : (
              <></>
            )}
            {repo ? (
              <Button
                as={Link}
                to={repo}
                target="_blank"
                rel="noopener noreferrer"
                color="secondary"
                variant="bordered"
                startContent={<FiGithub />}
              >
                GitHub
              </Button>
            ) : (
              <></>
            )}
          </div>
        </section>
        {website ? (
          <iframe
            className="flex-1 max-h-[500px] min-h-[500px] w-full rounded-xl"
            src={previewWebsite}
            frameborder="0"
          ></iframe>
        ) : video ? (
          <video
            className="flex-1 max-w-[700px] w-full rounded-xl"
            style={{ aspectRatio: '16/9' }}
            src={video}
            autoPlay
            loop
            muted
          ></video>
        ) : image ? (
          <Image src={image} className="max-w-[600px] w-full object-cover" />
        ) : (
          <></>
        )}
      </div>
    </main>
  );
}
