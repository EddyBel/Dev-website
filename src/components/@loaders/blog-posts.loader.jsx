import { Divider } from '@nextui-org/react';
import { CardLoader } from './card.loader';

export function PostsLoader() {
  return (
    <section className="w-full py-5">
      <Divider className="my-4" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 gap-y-12 my-9">
        <CardLoader />
        <CardLoader />
        <CardLoader />
        <CardLoader />
      </div>
      <Divider className="my-4" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 gap-y-12 my-9">
        <CardLoader />
        <CardLoader />
        <CardLoader />
        <CardLoader />
      </div>
      <Divider className="my-4" />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 gap-y-12 my-9">
        <CardLoader />
        <CardLoader />
        <CardLoader />
        <CardLoader />
      </div>
      <Divider className="my-4" />
    </section>
  );
}
