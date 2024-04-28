import React from "react";
import TitleHead from "./titleHead";
import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

import Card from "./card";

const projs = [
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?q=80&w=800&h=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=1748&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?q=80&w=800&h=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?q=80&w=800&h=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?q=80&w=800&h=600&auto=format&fit=crop",
];

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
                {projs.map((item, index) => (
                    <Card key={index} src={item} />
                ))}
            </div>
        </div>
    );
}
