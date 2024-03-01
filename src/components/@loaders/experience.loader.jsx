import { Skeleton } from '@nextui-org/react';

export function ExperienceLoader() {
  return (
    <ul className="relative mt-16 flex flex-col-reverse">
      <div className="relative mx-12 pb-12 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-black/20 dark:before:border-white/15 before:content-[''] md:grid-cols-5 md:gap-10 md:space-x-4]">
        <div className="relative pb-12 md:col-span-2">
          <div className="sticky top-0">
            <span className="text-red-900 dark:text-neutral-800 -left-[42px] absolute rounded-full text-5xl">•</span>
            <Skeleton className="w-[90%] h-3 rounded-lg mb-3" />
            <Skeleton className="w-[70%] h-3 rounded-lg mb-3" />
            <Skeleton className="w-[80%] h-3 rounded-lg mb-3" />
          </div>
        </div>
        <div className="relative flex flex-col gap-2 pb-4 text-gray-600 dark:text-gray-300 md:col-span-3">
          <Skeleton className="h-5 w-[85%]  rounded-lg" />
          <Skeleton className="h-5 w-[90%]  rounded-lg" />
          <Skeleton className="h-5 w-[100%] rounded-lg" />
          <Skeleton className="h-5 w-[95%]  rounded-lg" />
        </div>
      </div>
      <div className="relative mx-12 pb-12 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-black/20 dark:before:border-white/15 before:content-[''] md:grid-cols-5 md:gap-10 md:space-x-4]">
        <div className="relative pb-12 md:col-span-2">
          <div className="sticky top-0">
            <span className="text-red-900 dark:text-neutral-800 -left-[42px] absolute rounded-full text-5xl">•</span>
            <Skeleton className="w-[90%] h-3 rounded-lg mb-3" />
            <Skeleton className="w-[70%] h-3 rounded-lg mb-3" />
            <Skeleton className="w-[60%] h-3 rounded-lg mb-3" />
          </div>
        </div>
        <div className="relative flex flex-col gap-2 pb-4 text-gray-600 dark:text-gray-300 md:col-span-3">
          <Skeleton className="h-5 w-[100%]  rounded-lg" />
          <Skeleton className="h-5 w-[90%]  rounded-lg" />
          <Skeleton className="h-5 w-[95%] rounded-lg" />
          <Skeleton className="h-5 w-[100%]  rounded-lg" />
        </div>
      </div>
      <div className="relative mx-12 pb-12 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-black/20 dark:before:border-white/15 before:content-[''] md:grid-cols-5 md:gap-10 md:space-x-4]">
        <div className="relative pb-12 md:col-span-2">
          <div className="sticky top-0">
            <span className="text-red-900 dark:text-neutral-800 -left-[42px] absolute rounded-full text-5xl">•</span>
            <Skeleton className="w-[80%] h-3 rounded-lg mb-3" />
            <Skeleton className="w-[70%] h-3 rounded-lg mb-3" />
            <Skeleton className="w-[95%] h-3 rounded-lg mb-3" />
          </div>
        </div>
        <div className="relative flex flex-col gap-2 pb-4 text-gray-600 dark:text-gray-300 md:col-span-3">
          <Skeleton className="h-5 w-[85%]  rounded-lg" />
          <Skeleton className="h-5 w-[100%] rounded-lg" />
          <Skeleton className="h-5 w-[100%] rounded-lg" />
          <Skeleton className="h-5 w-[95%]  rounded-lg" />
        </div>
      </div>
    </ul>
  );
}
