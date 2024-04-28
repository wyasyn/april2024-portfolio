import Image from "next/image";
import TitleHead from "./titleHead";
import heroImg from "@/images/hero.jpg";
import Cta from "./cta";
export default function Hero() {
    return (
        <div className="px-7 py-10 ">
            <TitleHead name="Full-Stack Developer & Data Scientist" />
            <div className=" flex flex-col items-center justify-center my-[5rem] ">
                <div className="relative w-[250px] h-[250px] aspect-square rounded-full overflow-clip outline outline-secondary outline-[1rem] shadow-sm">
                    <Image
                        src={heroImg}
                        alt="hero image"
                        sizes="(max-width: 7680px) 100vw, (max-width: 990px) 50vw, 33vw"
                        fill
                        className=" inset-0 object-cover z-0 "
                        priority
                        placeholder="blur"
                    />
                </div>
                <div className=" mt-[4rem] text-center">
                    <h1 className=" recoleta scroll-m-20 text-4xl font-[600] tracking-tight lg:text-5xl text-popover">
                        Yasin Walum.
                    </h1>
                    <p className="leading-7 [&:not(:first-child)]:mt-6 max-w-[40ch]">
                        Computer scientist proficient in web development, data
                        science, and machine learning. 💻
                    </p>
                </div>
                <Cta />
            </div>
        </div>
    );
}
