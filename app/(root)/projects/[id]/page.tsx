import { getProjectById } from "@/app/action";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export async function generateMetadata({
    params: { id },
}: {
    params: { id: string };
}) {
    const project = await getProjectById(id);

    if (!project) {
        return {
            title: "Project Not Found",
        };
    }

    return {
        title: project.title,
        description: project.description,
        openGraph: {
            type: "website",
            locale: "en_IE",
            url: `https://www.ywalum.com/project/${id}`,
            title: project.title,
            description: project.description,
            images: [
                {
                    url: project.image,
                    width: 1200,
                    height: 630,
                    alt: project.title,
                },
            ],
        },
    };
}

export default async function page({
    params: { id },
}: {
    params: { id: string };
}) {
    const project = await getProjectById(id);
    if (!project) return <div>No Project found</div>;
    const src = project.image || "";
    const imageBlur = await fetch(src).then(async (res) => {
        return Buffer.from(await res.arrayBuffer()).toString("base64");
    });
    const info = [
        {
            name: "client",
            value: project.client.name,
        },
        {
            name: "company",
            value: project.company.name,
        },
        {
            name: "project type",
            value: project.type.name,
        },
        {
            name: "date",
            value: "2024-01-14",
        },
    ];
    return (
        <div>
            <div className=" bg-secondary p-4 m-2 rounded-lg grid gap-2 ">
                {info.map((item, index) => {
                    return (
                        <div key={index} className=" grid grid-cols-3 gap-4 ">
                            <span className=" capitalize col-span-1 ">
                                {item.name}
                            </span>
                            <strong className=" capitalize text-popover col-span-2 ">
                                {item.value}
                            </strong>
                        </div>
                    );
                })}
            </div>
            <div className=" mx-2 my-[3rem]  ">
                <h2 className="mb-4 text-popover text-3xl font-semibold recoleta ">
                    {project.title}
                </h2>
                <p>{project.introduction}</p>
                <Link href={project.url || ""}>
                    <Button
                        size="sm"
                        className="my-[2rem] flex items-center gap-2 bg-card text-foreground hover:text-white shadow-md "
                    >
                        <span>Visit Website</span> <ChevronRight size={16} />
                    </Button>
                </Link>
                <div className="relative aspect-video overflow-clip  w-full rounded-lg my-[3rem]  ">
                    <Image
                        src={src}
                        alt="project"
                        sizes="(max-width: 650px) 600px, 650px"
                        fill
                        className=" inset-0 object-cover z-0 group-hover:scale-110 duration-150  "
                        blurDataURL={`data:image/png;base64,${imageBlur}`}
                        placeholder="blur"
                        title={project.type.name}
                    />
                </div>
                <p>{project.description}</p>
            </div>
        </div>
    );
}
