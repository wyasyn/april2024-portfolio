import { Skeleton } from "@/components/ui/skeleton";

export function ProjectsSkeleton() {
    return (
        <div className=" container grid grid-cols-1 md:grid-cols-2 gap-8">
            <Skeleton className="h-[350px] w-full rounded-xl" />
            <Skeleton className="h-[350px] w-full rounded-xl" />
            <Skeleton className="h-[350px] w-full rounded-xl" />
            <Skeleton className="h-[350px] w-full rounded-xl" />
        </div>
    );
}
