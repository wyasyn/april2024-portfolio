import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
        <div className=" container ">
            <Skeleton className=" mt-5 w-full h-[50px] rounded-md" />
            <Skeleton className=" mt-[3rem] w-full h-[400px] rounded-md" />
            <Skeleton className=" mt-[3rem] w-full h-[50px] rounded-md" />
            <Skeleton className=" mt-3 w-full h-[50px] rounded-md" />
            <Skeleton className=" mt-3 w-full h-[50px] rounded-md" />
        </div>
    );
}
