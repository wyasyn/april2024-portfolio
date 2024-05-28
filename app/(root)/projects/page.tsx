import GetAllProjects from "@/components/getAllProjects";
import { ProjectsSkeleton } from "@/components/projectsSkeleton";
import TitleHead from "@/components/titleHead";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
    title: "Project",
};

export default function page() {
    return (
        <div>
            <div className=" px-8 py-10 ">
                <TitleHead name="Projects" />
                <div>
                    <h2 className=" mt-8 mb-4 text-popover text-3xl font-semibold recoleta ">
                        My Works
                    </h2>
                    <p>
                        Discover my portfolio, where innovation meets execution.
                        Dive into a collection of endeavors that showcase my
                        passion for technology, creativity, and problem-solving.
                        From groundbreaking software solutions to captivating
                        web applications, each project represents a unique blend
                        of skill, dedication, and ingenuity.
                    </p>
                </div>
            </div>
            <Suspense
                fallback={
                    <>
                        {" "}
                        <ProjectsSkeleton />{" "}
                    </>
                }
            >
                <GetAllProjects />
            </Suspense>
        </div>
    );
}
