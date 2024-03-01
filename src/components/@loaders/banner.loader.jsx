import { Skeleton } from '@nextui-org/react';
import { LoaderFire } from './fire.loader';

export function BannerLoader() {
  return (
    <section className="relative">
      <Skeleton className="w-full min-h-[450px] rounded-xl" />
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <LoaderFire />
      </div>
    </section>
  );
}
