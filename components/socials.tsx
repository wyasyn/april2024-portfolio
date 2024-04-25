import { Github, Linkedin, Mail, MessageCircle, Twitter } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const myEmail = process.env.MY_EMAIL;
const myPhone = process.env.MY_PHONE;

export const socialData = [
    {
        name: "Github",
        icon: <Github className="w-4" />,
        link: "https://github.com/wyasyn",
    },
    {
        name: "LinkedIn",
        icon: <Linkedin className=" w-4 " />,
        link: "https://www.linkedin.com/in/yasin-walum-01b18295/",
    },
    {
        name: "WhatsApp",
        icon: <MessageCircle className="w-4" />,
        link: `https://wa.me/${myPhone}`,
    },
    {
        name: "Email",
        icon: <Mail className="w-4" />,
        link: `mailto:${myEmail}`,
    },
];

export default function Socials() {
    return (
        <div className=" flex items-center gap-2">
            {socialData.map((item) => (
                <Link key={item.name} href={item.link}>
                    <Button
                        size="icon"
                        title={item.name}
                        className=" bg-accent rounded-full text-foreground hover:text-white  "
                    >
                        {item.icon}
                    </Button>
                </Link>
            ))}
        </div>
    );
}
