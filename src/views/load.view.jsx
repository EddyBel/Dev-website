import { LoaderFire } from '../components/@loaders/fire.loader';

export function LoaderPageView() {
  return (
    <main className="min-h-[100vh] w-full fixed flex justify-center items-center bg-black z-50">
      <LoaderFire />
    </main>
  );
}
