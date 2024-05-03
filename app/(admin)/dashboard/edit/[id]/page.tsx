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

        const title = formData.get("title") as string;
        const description = formData.get("description") as string;
        const introduction = formData.get("introduction") as string;
        const companyName = formData.get("company") as string;
        const typeName = formData.get("type") as string;
        const clientName = formData.get("client") as string;

        let clientId, companyId, typeId;

        // Check if client exists, if not, create new
        let client = await prisma.client.findUnique({
            where: {
                name: clientName,
            },
        });

        if (!client) {
            client = await prisma.client.create({
                data: {
                    name: clientName,
                },
            });
        }

        clientId = client.id;

        // Check if company exists, if not, create new
        let company = await prisma.company.findUnique({
            where: {
                name: companyName,
            },
        });

        if (!company) {
            company = await prisma.company.create({
                data: {
                    name: companyName,
                },
            });
        }

        companyId = company.id;

        // Check if type exists, if not, create new
        let type = await prisma.type.findUnique({
            where: {
                name: typeName,
            },
        });

        if (!type) {
            type = await prisma.type.create({
                data: {
                    name: typeName,
                },
            });
        }

        typeId = type.id;

        const data = {
            title,
            description,
            introduction,
            companyId,
            typeId,
            clientId,
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
                <div>
                    <Label htmlFor="client">Client:</Label>
                    <Input
                        type="text"
                        id="client"
                        name="client"
                        defaultValue={project?.client.name}
                        className=" border-foreground border "
                    />
                </div>
                <div>
                    <Label htmlFor="company">Company:</Label>
                    <Input
                        type="text"
                        id="company"
                        name="company"
                        defaultValue={project?.company.name}
                        className=" border-foreground border "
                    />
                </div>
                <div>
                    <Label htmlFor="type">Type:</Label>
                    <Input
                        type="text"
                        id="type"
                        name="type"
                        defaultValue={project?.type.name}
                        className=" border-foreground border "
                    />
                </div>

                <EditProjectBtn />
            </form>
        </div>
    );
}
