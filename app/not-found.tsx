import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import TitleHead from "@/components/titleHead";
import Image from "next/image";
import Link from "next/link";
import notFoundImg from "@/images/notfound.svg";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <div>
            <Navbar />
            <div className="container rounded-lg my-[2rem] px-4 py-10 bg-background border  ">
                <TitleHead name="Oops! 404" />
                <div className=" flex flex-col items-center justify-center my-[3rem] ">
                    <div className="relative w-[250px] h-[250px] my-[2rem] aspect-square">
                        <Image
                            src={notFoundImg}
                            alt="hero image"
                            sizes="(max-width: 7680px) 100vw, (max-width: 990px) 50vw, 33vw"
                            fill
                            className=" inset-0 object-cover z-0 "
                            priority
                        />
                    </div>
                    <div>
                        <h2 className=" font-semibold text-popover text-3xl recoleta capitalize ">
                            Page not found
                        </h2>
                        <p className=" my-[2rem] ">The page does not exist.</p>
                    </div>
                    <div className=" flex items-center gap-4 ">
                        <Link href="/">
                            <Button
                                size="sm"
                                className=" bg-card "
                                variant="ghost"
                            >
                                Back to Home
                            </Button>
                        </Link>

                        <Link href="projects">
                            <Button variant="outline" size="sm">
                                See My Work
                            </Button>
                        </Link>
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    );
}
