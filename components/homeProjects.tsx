export const revalidate = 0;
import React from "react";
import TitleHead from "./titleHead";
import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

import Card from "./card";
import { getAllProjects } from "@/app/action";

export default async function HomeProjects() {
    const projects = await getAllProjects();

    if (projects.length == 0)
        return (
            <div className="mt-[-5rem] bg-secondary px-7 rounded-lg py-10 ">
                No projects to display
            </div>
        );
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
            <div className=" my-[4rem] grid gap-x-[1rem] grid-cols-1 sm:grid-cols-2 gap-y-[4rem] ">
                {projects.slice(0, 4).map((project) => (
                    <Card
                        key={project.id}
                        image={project.image || ""}
                        title={project.title}
                        companyName={project.company.name}
                        id={project.id}
                    />
                ))}
            </div>
        </div>
    );
}
