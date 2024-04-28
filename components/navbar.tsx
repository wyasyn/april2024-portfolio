import Link from "next/link";
import { ModeToggle } from "./modeToggle";
import { Button } from "./ui/button";
import { CirclePlus } from "lucide-react";
import Header from "./header";
import MainLinks from "./mainLinks";

export default function Navbar() {
    return (
        <Header>
            <MainLinks />
            <div className=" flex items-center gap-2 ">
                <ModeToggle />
                <Link href="/contact">
                    <Button size="sm" className=" flex items-center gap-2 ">
                        <CirclePlus className=" w-[15px] text-white " />
                        <span className="text-white ">Hire Me</span>
                    </Button>
                </Link>
            </div>
        </Header>
    );
}
