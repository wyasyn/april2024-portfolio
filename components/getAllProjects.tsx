import { getAllProjects } from "@/app/action";
import React from "react";
import Card from "./card";

export default async function GetAllProjects() {
    const projects = await getAllProjects();
    if (!projects)
        return (
            <div>
                <div className=" bg-secondary p-[2rem] rounded-lg my-[3rem] text-xl  ">
                    No project to show!
                </div>
            </div>
        );
    return (
        <div className=" px-5 bg-secondary py-5 rounded-lg my-[4rem] grid gap-x-[1rem] grid-cols-1 sm:grid-cols-2 gap-y-[4rem] ">
            {projects.length > 0 &&
                projects.map((project) => (
                    <Card
                        key={project.id}
                        image={project.image || ""}
                        title={project.title}
                        companyName={project.company.name}
                        id={project.id}
                    />
                ))}
        </div>
    );
}
