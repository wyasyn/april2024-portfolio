"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

interface linkProps {
    url: string;
    label: string;
    icon?: React.ReactNode;
}

export default function NavLinks({ url, label, icon }: linkProps) {
    const pathname = usePathname();
    const isActive = pathname === url;
    return (
        <Link href={url}>
            <Button
                size="icon"
                variant="ghost"
                className={`relative group ${
                    isActive && " border-b border-popover rounded-none  "
                } `}
            >
                <span
                    className={`group-hover:text-popover duration-150  ${
                        isActive ? "text-popover" : "text-foreground"
                    } `}
                >
                    {icon}
                </span>

                <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-4 bg-card px-2 rounded-sm">
                    {label}
                </span>
            </Button>
        </Link>
    );
}
