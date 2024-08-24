import { ComputerCanvas } from '../../components/@3dElements/computer.3d';
import { TerrainCanvas } from '../../components/@3dElements/malla.3d';
import { BannerShadow } from '../../components/@common/banners';
import { ValidatorVariable } from '../../components/@common/validators';
import { BannerLoader } from '../../components/@loaders/banner.loader';
import { INFORMATION_MESSAGES } from '../../data/messages.info';
import { HighlightSpecialWords } from './components/description';
import { RandomizedGreeting } from './components/grettings';

export function MainSection({ banner }) {
  const { gretting, mainDescription } = INFORMATION_MESSAGES;
  const urlBanner =
    banner ||
    'https://en.idei.club/uploads/posts/2023-06/thumbs/1687438917_en-idei-club-p-aesthetic-programmer-dizain-pinterest-66.jpg';

  return (
    <ValidatorVariable variable={INFORMATION_MESSAGES} elseComponent={<BannerLoader />}>
      <div className="relative w-full h-full">
        <section className="py-5 pr-2 mt-5 relative">
          <div className="absolute left-0 top-0 h-full">
            <div className="h-full w-1 bg-yellow-300/80 rounded-xl animate-fade-right relative"></div>
          </div>
          <div className="w-full ml-5">
            <RandomizedGreeting gretting={gretting} time={150} />
            <HighlightSpecialWords text={mainDescription} />
          </div>
        </section>
        {/* <section className="w-full h-[300px] sm:h-[600px] absolute top-24 sm:-top-16 left-0 animate-fade-up">
          <ComputerCanvas />
        </section>
        <section className="h-[400px]"></section> */}
      </div>
      <BannerShadow background={urlBanner}>{/* <Avatar src={Logo} className="w-10 h-10" isBordered /> */}</BannerShadow>
    </ValidatorVariable>
  );
}
