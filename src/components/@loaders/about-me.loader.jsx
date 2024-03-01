import { Skeleton } from '@nextui-org/react';

export function AboutMeLoader() {
  return (
    <div className="w-full flex flex-col gap-3 text-lg text-neutral-950/90 dark:text-neutral-200/80 max-w-[800px]">
      <Skeleton className="h-5 rounded-lg w-[70%]" />
      <Skeleton className="h-5 rounded-lg w-[90%]" />
      <Skeleton className="h-5 rounded-lg w-[75%]" />
      <Skeleton className="h-5 rounded-lg w-[80%]" />
      <Skeleton className="h-5 rounded-lg w-[85%]" />
    </div>
  );
}
