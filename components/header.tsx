"use client";
import { useState, useEffect } from "react";

export default function Header({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setScrolled(isScrolled);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <header
            className={`sticky left-0 top-4 z-[10000] rounded-lg container shadow border flex items-center justify-between ${
                scrolled ? "bg-background/15 backdrop-blur-sm" : "bg-background"
            } `}
        >
            {children}
        </header>
    );
}
