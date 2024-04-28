import TitleHead from "@/components/titleHead";
import Image from "next/image";
import aboutImg from "@/images/about.jpg";
import Skills from "@/components/skills";

export default function page() {
    return (
        <div className=" px-8 py-10 ">
            <TitleHead name="About Me " />
            <h2 className=" recoleta capitalize my-6 text-popover text-3xl font-semibold ">
                It&apos;s me Yasin
            </h2>
            <p>
                Greetings! I’m Yasin Walum, a passionate software developer
                hailing from Makerere University, where I pursued dual
                bachelor&apos;s degrees in Computer Science and Education. With
                a firm belief in the transformative power of technology and
                education, I embark on a journey to craft innovative solutions
                that empower individuals and organizations.
            </p>
            <div className=" my-[3rem] relative w-full aspect-square rounded-lg overflow-clip outline outline-secondary outline-[1rem] shadow-sm">
                <Image
                    src={aboutImg}
                    alt="hero image"
                    sizes="(max-width: 7680px) 100vw, (max-width: 990px) 50vw, 33vw"
                    fill
                    className=" inset-0 object-cover z-0 object-top "
                    priority
                    placeholder="blur"
                />
            </div>
            <h2 className=" recoleta my-4 text-popover text-3xl font-semibold capitalize ">
                more about me
            </h2>
            <p className=" mb-4 ">
                My academic background not only equipped me with technical
                prowess but also instilled in me the values of mentorship and
                knowledge dissemination. This unique blend of skills allows me
                to not only develop cutting-edge software but also effectively
                communicate and educate others about its potential.
            </p>
            <p>
                Beyond the realms of programming, I find solace in the
                captivating world of television shows and series. Whether it’s
                unraveling complex plotlines or immersing myself in captivating
                narratives, I find inspiration in the diverse stories portrayed
                on screen. <br /> <br /> In my spare time, you can often find me
                exploring the latest advancements in technology, honing my
                skills through personal projects, or simply unwinding with a
                good book. I firmly believe in the mantra of lifelong learning
                and strive to stay at the forefront of innovation in the
                ever-evolving tech industry.
            </p>

            <Skills />
        </div>
    );
}
