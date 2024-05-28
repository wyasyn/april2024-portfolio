import { getAllProjects } from "@/app/action";
import Card from "./card";

export default async function GetProjects() {
    const projects = await getAllProjects();

    if (projects.length == 0)
        return (
            <div className="mt-[-5rem] bg-secondary px-7 rounded-lg py-10 ">
                No projects to display
            </div>
        );
    return (
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
    );
}
