import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { CirclePlus, Mail } from "lucide-react";

const myEmail = process.env.MY_EMAIL;

export default function Cta() {
    return (
        <div className=" flex items-center gap-4 w-fit mx-auto my-[3rem] ">
            <Link href="/contact">
                <Button size="sm" className=" flex items-center gap-2 ">
                    <CirclePlus className=" w-[15px] text-white " />
                    <span className="text-white ">Hire Me</span>
                </Button>
            </Link>
            <Link href={`mailto:${myEmail}`}>
                <Button
                    variant="outline"
                    size="sm"
                    className=" flex items-center gap-2 "
                >
                    <Mail className=" w-[15px] text-popover " />

                    <span className="text-popover ">Mail Me</span>
                </Button>
            </Link>
        </div>
    );
}
