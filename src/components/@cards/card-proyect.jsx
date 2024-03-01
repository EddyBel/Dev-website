import { Image } from '@nextui-org/react';
// import { ImageShadow } from '../@common/img-shadow';
import { Link } from 'react-router-dom';

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
export function CardProyect({ url, title, description, path, onClick, height, width, blurred, zoomed }) {
  return (
    <Link to={path} onClick={onClick}>
      <div className="w-full max-w-[300px] dark:hover:bg-neutral-950/80 p-2 rounded-lg duration-300 transition-background">
        <div className="w-full m-auto flex justify-center items-center">
          <Image
            isZoomed={zoomed}
            isBlurred={blurred ?? false}
            src={url}
            width={width ?? '100%'}
            height={height}
            alt={''}
            className="rounded-md"
          />
        </div>
        <div className="w-full flex flex-col gap-2 mt-3">
          <h1 className="text-md capitalize text-neutral-200">{title ?? 'Articulo o proyecto'}</h1>
          <p className="text-[0.8rem] text-neutral-200/60">
            {description ??
              'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt obcaecati necessitatibus cum eaque beatae perferendis suscipit, accusamus inventore repellat'}
          </p>
        </div>
      </div>
    </Link>
  );
}
