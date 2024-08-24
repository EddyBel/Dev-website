import { Image } from '@nextui-org/react';
import { SadBuho } from '../../assets';
import { TitleProject } from './components/title-project';
import { HighlightSpecialWords } from './components/description-project';

export function ContentNotFound() {
  return (
    <main className="w-full max-w-[1000px] h-screen m-auto">
      <div className="w-full flex flex-col items-center justify-center gap-4 pt-7">
        <div className='flex flex-col items-center justify-center'>
          <TitleProject gretting={'Upps! No encontramos el proyecto que buscas'} time={50} />
          <HighlightSpecialWords text={'Continua viendo el resto de proyectos 😊'} />
        </div>
        <Image src={SadBuho} alt="Sad Buho" />
      </div>
    </main>
  );
}
