import { Button } from '@nextui-org/react';
import { FaArrowUp } from 'react-icons/fa';

export function ButtonUpScroll() {
  /** Esta función mueve el scroll de la pagina hasta el inicio de la misma cada que se hace un click */
  const ScrollMoveUp = () =>
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

  return (
    <Button
      isIconOnly
      color="primary"
      variant="flat"
      aria-label="UP Button"
      className="fixed bottom-3 left-3 animate-bounce"
      onClick={ScrollMoveUp}
    >
      <FaArrowUp className="text-xl" />
    </Button>
  );
}
