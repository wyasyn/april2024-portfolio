import { getAllProjects } from "@/app/action";
import Card from "@/components/card";
import TitleHead from "@/components/titleHead";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Project",
};

export default async function page() {
    const projects = await getAllProjects();

    if (projects.length == 0)
        return (
            <div className="mt-[-5rem] bg-secondary px-7 rounded-lg py-10 ">
                No projects to display
            </div>
        );
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
            <div className=" px-5 bg-secondary py-5 rounded-lg my-[4rem] grid gap-x-[1rem] grid-cols-1 sm:grid-cols-2 gap-y-[4rem] ">
                {projects.map((project) => (
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
