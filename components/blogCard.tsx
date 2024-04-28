import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function BlogCard() {
    const src =
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?q=80&w=800&h=600&auto=format&fit=crop";
    const imageBlur = await fetch(src).then(async (res) => {
        return Buffer.from(await res.arrayBuffer()).toString("base64");
    });
    return (
        <Link href="blog">
            <article className="overflow-clip bg-card rounded-lg shadow-md group transition-all ">
                <div className="relative aspect-video overflow-clip  w-full ">
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
                <div className=" px-4 py-5 ">
                    <small className=" bg-blue-500 text-white px-3 py-1 rounded-full ">
                        technology
                    </small>
                    <h3 className="text-lg text-popover recoleta text-balance font-semibold mb-2 mt-1">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </h3>
                    <p className=" text-sm mb-3 ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptatem, quaerat.
                    </p>
                    <div className=" underline text-green-600 group-hover:text-green-800 visited:text-purple-600 text-[12px] flex duration-150  items-center gap-2 ">
                        <span>Read More</span>
                        <ChevronRight className=" w-5 h-5 " />
                    </div>
                </div>
            </article>
        </Link>
    );
}
