import { Button, Image, Tooltip } from '@nextui-org/react';
// import { ImageShadow } from '../@common/img-shadow';
import { Link } from 'react-router-dom';
import { truncate } from '../../utils/formatter';
import { IoBrowsers, IoLogoJavascript } from 'react-icons/io5';
import { SiGithub, SiTailwindcss } from 'react-icons/si';
import { GetTechIcon } from '../@common/get-tech-icon';
import { FaHeart } from 'react-icons/fa';
import { RiArchiveDrawerFill } from 'react-icons/ri';
import { BsBrowserChrome } from 'react-icons/bs';

/**
 * CardArticle Component
 *
 * React component for displaying an article card with an image, title, and paragraph.
 *
 * @component
 * @example
 * // Example usage of CardArticle
 * <CardArticle
 *   width={400}
 *   height={200}
 *   url="https://example.com/image.jpg"
 *   alt="Article Image"
 *   title="Sample Article"
 *   paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
 * />
 *
 * @param {object} props - The properties of the CardArticle component.
 * @param {number} props.width - The width of the image (default: 300).
 * @param {number} props.height - The height of the image.
 * @param {string} props.url - The URL of the image.
 * @param {string} props.alt - The alt text for the image.
 * @param {string} props.title - The title of the article (default: 'Nombre de la nota o proyecto').
 * @param {string} props.paragraph - The content of the article paragraph.
 *    If not provided, a default placeholder text will be used.
 *
 * @returns {JSX.Element} - Rendered CardArticle component.
 */
export function CardProyect({
  url,
  title,
  description,
  path,
  website,
  repo,
  stack,
  onClick,
  height,
  width,
  blurred,
  zoomed,
  like,
  showButtonRepo = true,
}) {
  return (
    <a href={path} onClick={onClick} target="_blank" rel="noopener noreferrer">
      <div className="w-full max-w-[300px] hover:bg-neutral-200/70 dark:hover:bg-neutral-800/80 p-5 rounded-lg duration-300 transition-background">
        <div className="w-full m-auto flex justify-center items-center relative overflow-hidden rounded-xl">
          <Image
            isZoomed={zoomed}
            isBlurred={blurred ?? false}
            src={url}
            width={width ?? '100%'}
            height={height}
            alt={''}
            className="rounded-md"
            loading="lazy"
          />

          <div className="absolute left-0 top-0 flex items-end justify-between w-full h-full z-10 px-4 py-2 bg-black/30">
            <div className="flex items-center justify-center gap-3">
              {stack?.map((s, index) => (
                <GetTechIcon tech={s} key={`techicon-${index}`} />
              ))}
            </div>
            <div className="flex items-center justify-center gap-3">
              {website ? <BsBrowserChrome /> : repo ? <SiGithub /> : <></>}
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-2 mt-3">
          <h1 className="text-md capitalize text-neutral-950 font-bold dark:text-yellow-200 source-code-pro text-balance">
            {title ?? 'Articulo o proyecto'}
          </h1>
          <p className="text-[0.7rem] text-neutral-950/80 dark:text-neutral-200/60 source-code-pro text-pretty">
            {truncate(
              description ??
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt obcaecati necessitatibus cum eaque beatae perferendis suscipit, accusamus inventore repellat',
              120,
            )}
          </p>

          <div className="w-full flex justify-between items-center mt-1">
            {repo && showButtonRepo ? (
              <Button
                as={Link}
                to={repo}
                target="_blank"
                rel="noopener noreferrer"
                color="secondary"
                size="sm"
                variant="bordered"
                startContent={<SiGithub />}
              >
                Github
              </Button>
            ) : (
              <></>
            )}
            {like ? <FaHeart color="#ff81b5" /> : <></>}
          </div>
        </div>
      </div>
    </a>
  );
}
