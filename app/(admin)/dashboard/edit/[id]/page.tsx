import { getProjectById } from "@/app/action";
import EditProjectBtn from "@/components/editProjectBtn";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function page({
    params: { id },
}: {
    params: { id: string };
}) {
    const project = await getProjectById(id);
    if (!project) return <div>No project with id: {id}</div>;

    async function editProject(formData: FormData) {
        "use server";

        const data = {
            title: formData.get("title") as string,
            description: formData.get("description") as string,
            introduction: formData.get("introduction") as string,
        };

        try {
            await prisma.project.update({
                data,
                where: { id },
            });

            revalidatePath("/dashboard");
        } catch (e) {
            console.log(e);
        } finally {
            redirect("/dashboard");
        }
    }

    return (
        <div className=" max-w-md ">
            <form action={editProject} className=" grid gap-2 ">
                <div>
                    <Label htmlFor="title">Title:</Label>
                    <Input
                        type="text"
                        id="title"
                        name="title"
                        defaultValue={project?.title}
                        className=" border-foreground border "
                    />
                </div>
                <div>
                    <Label htmlFor="introduction">Introduction:</Label>
                    <Textarea
                        id="introduction"
                        name="introduction"
                        defaultValue={project?.introduction || ""}
                        className="border-foreground border"
                        rows={5}
                    />
                </div>
                <div>
                    <Label htmlFor="description">Description:</Label>
                    <Textarea
                        id="description"
                        name="description"
                        defaultValue={project?.description}
                        className=" border-foreground border "
                        rows={5}
                    />
                </div>

                <EditProjectBtn />
            </form>
        </div>
    );
}
