import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function Card({
    title,
    companyName,
    image,
    id,
}: {
    title: string;
    companyName: string;
    image: string | undefined;
    id: string;
}) {
    if (image) {
        const imageBlur = await fetch(image).then(async (res) => {
            return Buffer.from(await res.arrayBuffer()).toString("base64");
        });
        return (
            <Link href={`/projects/${id}`}>
                <div className=" group ">
                    <div className="relative aspect-[3/4] ">
                        <div className="relative w-full h-full rounded-lg">
                            {image ? (
                                <Image
                                    src={image}
                                    alt="project"
                                    sizes="(max-width: 650px) 600px, 650px"
                                    fill
                                    className=" inset-0 object-cover z-0 rounded-lg group-hover:filter-none duration-150  grayscale "
                                    blurDataURL={`data:image/png;base64,${imageBlur}`}
                                    placeholder="blur"
                                />
                            ) : (
                                <div>no image</div>
                            )}
                        </div>
                        <div className=" group-hover:translate-y-[-10px] shadow-md absolute z-2 bg-card -bottom-[2rem] left-1/2 -translate-x-1/2 w-[95%] rounded-lg p-3 duration-150 ">
                            <h3 className=" recoleta font-semibold text-popover">
                                {title}
                            </h3>
                            <p className="text-xs text-foreground my-1 ">
                                {companyName}
                            </p>
                            <Link
                                href={`/projects/${id}`}
                                className=" underline text-green-600 group-hover:text-green-800 visited:text-purple-600 text-[12px] flex duration-150  items-center gap-2 "
                            >
                                <span>View Project</span>
                                <ChevronRight className=" w-5 h-5 " />
                            </Link>
                        </div>
                    </div>
                </div>
            </Link>
        );
    } else {
        return (
            <Link href={`/projects/${id}`}>
                <div className=" bg-card p-[2rem] text-center recoleta text-popover rounded-lg ">
                    {title}
                </div>
            </Link>
        );
    }
}
