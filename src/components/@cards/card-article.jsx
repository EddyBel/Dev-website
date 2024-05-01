import { Image, Button } from '@nextui-org/react';
// import { ImageShadow } from '../@common/img-shadow';
import { Link } from 'react-router-dom';
import { ValidatorVariable } from '../@common/validators';

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
export function CardArticle({ url, title, description, path, height, width, blurred, zoomed, matter, grade }) {
  return (
    <Link to={path}>
      <div className="w-full max-w-[300px] min-h-[230px] sm:min-h-[290px] lg:min-h-[270px] p-3 rounded-2xl hover:bg-neutral-200/70 dark:hover:bg-neutral-900/70 transition-background duration-300 animation-WatchScaleOpacity overflow-hidden bg-neutral-800">
        <div className="w-full m-auto flex justify-center items-center">
          <Image
            isZoomed={zoomed}
            isBlurred={blurred ?? false}
            src={url}
            width="100%"
            alt={''}
            loading="lazy"
            radius="lg"
            className="object-cover w-full"
          />
        </div>
        <div className="w-full flex flex-col gap-2 mt-3">
          <h1 className="text-[0.8rem] source-code-pro text-balance sm:text-md capitalize font-bold text-blue-700/60 dark:text-neutral-200">
            {truncate(title ?? 'Articulo o proyecto', 45)}
          </h1>

          <ValidatorVariable variable={matter} elseComponent={<></>}>
            <div className="flex justify-between gap-2 items-center source-code-pro text-balance text-[0.7rem]">
              <p className="text-blue-300 bg-blue-900 py-1 px-2 rounded-xl">{matter}</p>
              <p>{grade}</p>
            </div>
          </ValidatorVariable>

          <p className="text-[0.7rem] source-code-pro text-pretty text-neutral-950/80 dark:text-neutral-200/60">
            {truncate(
              description ??
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt obcaecati necessitatibus cum eaque beatae perferendis suscipit, accusamus inventore repellat',
              65,
            )}
          </p>
        </div>
      </div>
    </Link>
  );
}

function truncate(string, max) {
  if (string.length > max) return string.slice(0, max) + '...';
  else return string;
}
