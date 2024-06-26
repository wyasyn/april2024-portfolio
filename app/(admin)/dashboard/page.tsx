export const revalidate = 0;
import { addProjectData, deleteProject, getAllProjects } from "@/app/action";
import UploadForm from "@/components/addProject";
import DeleteProjectBtn from "@/components/deleteProjectBtn";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Plus, Settings2 } from "lucide-react";
import Link from "next/link";

export default async function page() {
    const projects = await getAllProjects();
    return (
        <div>
            <div className=" grid gap-4 grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
                <Link href={`dashboard/add-project`}>
                    <div
                        className=" bg-secondary min-h-[200px] rounded-lg flex items-center justify-center w-full hover:bg-background cursor-pointer border-2 border-dotted border-muted h-full "
                        title="Add Project"
                    >
                        <Plus size={50} />
                    </div>
                </Link>
                {projects.length === 0 ? (
                    <div className=" bg-secondary rounded-lg grid place-items-center py-[3rem] hover:bg-background cursor-pointer border border-dotted text-lg recoleta  ">
                        No Projects! Please add projects
                    </div>
                ) : (
                    <>
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className="bg-background p-4 cursor-pointer rounded-lg w-full h-full hover:bg-background border"
                            >
                                <div className=" grid">
                                    <small className="bg-card px-4 py-1 rounded-md">
                                        {project.type.name}
                                    </small>
                                    <h1 className="text-lg text-popover capitalize recoleta font-semibold my-2">
                                        {project.title}
                                    </h1>
                                    <p className="mb-2">
                                        {project.client.name}
                                    </p>
                                    <div className="flex items-center justify-between mt-4">
                                        <Link
                                            href={`/dashboard/edit/${project.id}`}
                                        >
                                            <Button
                                                size="icon"
                                                variant="outline"
                                                title="Edit Project"
                                            >
                                                <Settings2 size={20} />
                                            </Button>
                                        </Link>
                                        <DeleteProjectBtn
                                            projectId={project.id}
                                            deleteProject={deleteProject}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </>
                )}
            </div>
        </div>
    );
}
