import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function page() {
    const src =
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?q=80&w=800&h=600&auto=format&fit=crop";
    const imageBlur = await fetch(src).then(async (res) => {
        return Buffer.from(await res.arrayBuffer()).toString("base64");
    });
    const info = [
        {
            name: "client",
            value: "Nor UBOUS",
        },
        {
            name: "company",
            value: "Morva labs",
        },
        {
            name: "project type",
            value: "web site",
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
                    Morva labs
                </h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque euismod dapibus risus, vitae efficitur urna
                    condimentum id.
                </p>
                <Link href="/">
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
                    />
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquid sunt accusamus provident nemo reiciendis debitis
                    nisi incidunt iusto, laborum, quasi ab cumque assumenda
                    obcaecati exercitationem labore. Laudantium dolorum eveniet
                    dicta non voluptatum vero rerum. Expedita explicabo minus,
                    at quae impedit amet aliquid nulla sapiente autem numquam
                    saepe quasi, earum odio.
                </p>
            </div>
        </div>
    );
}
