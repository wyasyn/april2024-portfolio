import {
    BookImage,
    CircleUserRound,
    Home,
    LayoutDashboard,
    SwatchBook,
} from "lucide-react";
import NavLinks from "./navLinks";

const links = [
    {
        label: "Home",
        icon: <Home className=" w-5" />,
        url: "/",
    },
    {
        label: "About",
        icon: <CircleUserRound className=" w-5" />,
        url: "/about",
    },
    {
        label: "Projects",
        icon: <BookImage className=" w-5" />,
        url: "/projects",
    },
    {
        label: "Blog",
        icon: <SwatchBook className=" w-5" />,
        url: "/blog",
    },
    {
        label: "Dashboard",
        icon: <LayoutDashboard className=" w-5" />,
        url: "/dashboard",
    },
];

export default function MainLinks() {
    return (
        <div>
            {links.map((link) => (
                <NavLinks
                    key={link.label}
                    label={link.label}
                    icon={link.icon}
                    url={link.url}
                />
            ))}
        </div>
    );
}
