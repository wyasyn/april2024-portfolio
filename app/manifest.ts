import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Yasin Walum",
        short_name: "Walum",
        description: "Web developer / data scientist portfolio",
        start_url: "/",
        display: "standalone",
        background_color: "#171717",
        theme_color: "#b8b8b8",
        icons: [
            {
                src: "/favicon-16x16.png",
                sizes: "16x16",
                type: "image/x-icon",
            },
            {
                src: "/apple-touch-icon.png",
                sizes: "any",
                type: "image/x-icon",
            },
            {
                src: "/favicon-32x32.png",
                sizes: "32x32",
                type: "image/x-icon",
            },
            {
                src: "/android-chrome-192x192.png",
                sizes: "192x192",
                type: "image/x-icon",
            },
            {
                src: "/android-chrome-512x512.png",
                sizes: "512x512",
                type: "image/x-icon",
            },
        ],
    };
}
