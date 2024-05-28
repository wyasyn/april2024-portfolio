export const revalidate = 0;
import React, { Suspense } from "react";
import TitleHead from "./titleHead";
import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import GetProjects from "./getProjects";
import { ProjectsSkeleton } from "./projectsSkeleton";

export default function HomeProjects() {
    return (
        <div className="mt-[-5rem] bg-secondary px-7 rounded-lg py-10 ">
            <div className=" flex items-center justify-between ">
                <TitleHead name="Projects" />
                <Link href="/projects">
                    <Button
                        size="sm"
                        className=" shadow-sm bg-ring text-foreground flex items-center gap-2 hover:text-white "
                    >
                        <span className=" text-sm ">View All</span>
                        <ArrowRight className="w-[15px]" />
                    </Button>
                </Link>
            </div>
            <Suspense
                fallback={
                    <>
                        {" "}
                        <ProjectsSkeleton />{" "}
                    </>
                }
            >
                <GetProjects />
            </Suspense>
        </div>
    );
}
