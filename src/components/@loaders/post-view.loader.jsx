import {Skeleton} from "@nextui-org/react"

export function LoaderPage() {
    return (
      <div className="w-full flex flex-col gap-16">
        <Skeleton className="h-[200px] w-full rounded-lg" />
        <div className="flex flex-col gap-3">
          <Skeleton className="h-5 w-[80%] rounded-lg" />
          <Skeleton className="h-5 w-[100%] rounded-lg" />
          <Skeleton className="h-5 w-[90%] rounded-lg" />
          <Skeleton className="h-5 w-[95%] rounded-lg" />
          <Skeleton className="h-5 w-[100%] rounded-lg" />
        </div>
        <div className="flex flex-col gap-3">
          <Skeleton className="h-5 w-[90%] rounded-lg" />
          <Skeleton className="h-5 w-[95%] rounded-lg" />
          <Skeleton className="h-5 w-[100%] rounded-lg" />
          <Skeleton className="h-5 w-[100%] rounded-lg" />
          <Skeleton className="h-5 w-[90%] rounded-lg" />
        </div>
        <div className="flex flex-col gap-3">
          <Skeleton className="h-5 w-[100%] rounded-lg" />
          <Skeleton className="h-5 w-[95%] rounded-lg" />
          <Skeleton className="h-5 w-[100%] rounded-lg" />
          <Skeleton className="h-5 w-[95%] rounded-lg" />
          <Skeleton className="h-5 w-[80%] rounded-lg" />
        </div>
        <div className="flex flex-col gap-3">
          <Skeleton className="h-5 w-[80%] rounded-lg" />
          <Skeleton className="h-5 w-[100%] rounded-lg" />
          <Skeleton className="h-5 w-[90%] rounded-lg" />
          <Skeleton className="h-5 w-[95%] rounded-lg" />
          <Skeleton className="h-5 w-[100%] rounded-lg" />
        </div>
        <div className="flex flex-col gap-3">
          <Skeleton className="h-5 w-[90%] rounded-lg" />
          <Skeleton className="h-5 w-[95%] rounded-lg" />
          <Skeleton className="h-5 w-[100%] rounded-lg" />
          <Skeleton className="h-5 w-[100%] rounded-lg" />
          <Skeleton className="h-5 w-[90%] rounded-lg" />
        </div>
      </div>
    );
  }
  