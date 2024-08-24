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
      <section className="py-5 mt-5">
        <RandomizedGreeting gretting={gretting} time={150} />
        <HighlightSpecialWords text={mainDescription} />
      </section>
      <BannerShadow background={urlBanner}>{/* <Avatar src={Logo} className="w-10 h-10" isBordered /> */}</BannerShadow>
    </ValidatorVariable>
  );
}
