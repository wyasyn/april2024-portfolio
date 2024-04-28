import React from "react";
import { Button } from "./ui/button";

import { IoLogoJavascript, IoLogoPython } from "react-icons/io5";
import { FaCss3Alt, FaPhp, FaReact } from "react-icons/fa";
import {
    SiDjango,
    SiExpress,
    SiFlask,
    SiNextdotjs,
    SiTailwindcss,
} from "react-icons/si";
import { TbFileTypeSql } from "react-icons/tb";
import { IoLogoNodejs } from "react-icons/io";

const skills = [
    {
        name: "JS",
        icon: <IoLogoJavascript />,
    },
    {
        name: "python",
        icon: <IoLogoPython />,
    },
    {
        name: "php",
        icon: <FaPhp />,
    },
    {
        name: "react",
        icon: <FaReact />,
    },
    {
        name: "express",
        icon: <SiExpress />,
    },
    {
        name: "sql",
        icon: <TbFileTypeSql />,
    },
    {
        name: "node",
        icon: <IoLogoNodejs />,
    },
    {
        name: "next js",
        icon: <SiNextdotjs />,
    },
    {
        name: "django",
        icon: <SiDjango />,
    },
    {
        name: "flask",
        icon: <SiFlask />,
    },
    {
        name: "css",
        icon: <FaCss3Alt />,
    },
    {
        name: "tailwind",
        icon: <SiTailwindcss />,
    },
];

export default function Skills() {
    return (
        <div className=" my-[5rem] ">
            <h2 className=" recoleta my-4 text-popover text-3xl font-semibold capitalize ">
                my skills
            </h2>
            <div className="  grid grid-cols-3 gap-2 ">
                {skills.map((skill) => {
                    return (
                        <article
                            key={skill.name}
                            className=" rounded-lg flex items-center gap-1 shadow-sm px-3 bg-secondary justify-center hover:bg-accent duration-300 "
                        >
                            <Button
                                size="icon"
                                variant="ghost"
                                className="text-xl"
                            >
                                {skill.icon}
                            </Button>
                            <span className=" uppercase ">{skill.name}</span>
                        </article>
                    );
                })}
            </div>
        </div>
    );
}
