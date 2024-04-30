import { addProjectData, deleteProject, getAllProjects } from "@/app/action";
import UploadForm from "@/components/addProject";
import DeleteProjectBtn from "@/components/deleteProjectBtn";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Plus, Settings2, Trash2 } from "lucide-react";
import Link from "next/link";

export default async function page() {
    const projects = await getAllProjects();
    // console.log(projects);
    return (
        <div>
            <div className=" grid gap-4 grid-rows-auto grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
                <div>
                    <Sheet>
                        <SheetTrigger asChild>
                            <div
                                className=" bg-secondary rounded-lg grid place-items-center py-[3rem] hover:bg-background cursor-pointer border-2 border-dotted border-muted "
                                title="Add Project"
                            >
                                <Plus size={50} />
                            </div>
                        </SheetTrigger>
                        <SheetContent>
                            <UploadForm addProjectData={addProjectData} />
                        </SheetContent>
                    </Sheet>
                </div>
                {projects.map((project) => {
                    return (
                        <div
                            key={project.id}
                            className=" bg-background p-4 cursor-pointer rounded-lg w-full h-full hover:bg-background border "
                        >
                            <div>
                                <small className=" bg-card px-4 py-1 rounded-md ">
                                    {project.type.name}
                                </small>
                                <h1 className=" text-lg text-popover capitalize recoleta font-semibold my-2 ">
                                    {project.title}
                                </h1>
                                <p className="mb-2">{project.client.name}</p>
                                <div className=" flex items-center justify-between mt-4  ">
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
                    );
                })}
            </div>
        </div>
    );
}
