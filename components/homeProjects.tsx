import React from "react";
import TitleHead from "./titleHead";
import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

import Card from "./card";

export default async function HomeProjects() {
    return (
        <div className="mt-[-5rem] bg-secondary px-7 rounded-lg py-10 ">
            <div className=" flex items-center justify-between ">
                <TitleHead name="Projects" />
                <Link href="/projects">
                    <Button
                        size="sm"
                        className=" shadow-sm bg-ring text-foreground flex items-center gap-2 hover:text-white "
                    >
                        <span className=" text-sm ">View All</span>
                        <ArrowRight className="w-[15px]" />
                    </Button>
                </Link>
            </div>
            <div className=" my-[4rem] grid gap-x-[1rem] grid-cols-1 sm:grid-cols-2 gap-y-[4rem] ">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
}
