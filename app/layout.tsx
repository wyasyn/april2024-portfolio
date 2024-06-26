import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { ClerkProvider } from "@clerk/nextjs";

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
});

export const metadata: Metadata = {
    metadataBase: new URL("https://ywalum.com"),
    title: "Yasin Walum | Web Developer Portfolio && Data Analyst",
    description:
        "👋 Hello! I'm Yasin Walum, a passionate web developer and data analyst with a love for transforming data into meaningful insights and crafting web experiences that leave a lasting impression. With a blend of creativity and analytical prowess, I bring a unique perspective to every project I undertake. 🌐 On the web development front, I thrive in the ever-evolving world of technologies, from front-end magic with HTML, CSS, and JavaScript to building robust back-end systems. My dedication to clean code and user-centric design is at the core of my work, ensuring that the applications I build not only function flawlessly but also provide an exceptional user experience. 📊 As a data analyst, I enjoy uncovering hidden patterns and stories within data sets. Whether it's crunching numbers, creating insightful visualizations, or designing predictive models, I revel in the challenge of turning data into actionable insights that drive decision-making and innovation. 🛠️ My toolset includes a wide range of web development frameworks and libraries, as well as data analysis tools such as Python, R, SQL, and various data visualization libraries. I'm always excited to learn new technologies and explore innovative solutions to complex problems. 🚀 Join me on this journey of continuous learning and improvement as we harness the power of data and technology to build a better, data-driven world. Let's connect and collaborate on exciting projects. Feel free to explore my GitHub repositories to see my work in action, and don't hesitate to reach out for collaborations, discussions, or just a good coding chat! #WebDeveloper #Portfolio #CodingSkills #DataAnalyst",
    keywords:
        "web development,web developer, mathematics tutor in kampala, yasin, walum, yasin walum,Yasin Walum, Yasin, Walum, react, scss, sass, web design, portfolio, projects, coding, programming, HTML, CSS, JavaScript, front-end, back-end, responsive design, web applications, software development, developer, coding skills, creative, UI/UX, technology, coding projects, programming languages, website development, software engineer, web solutions, digital portfolio, coding expertise, data analyst, data science, data visualisation, data mining, statistical analysis, machine learning, python, R programming, SQL, big data analysis, pandas, matplotlib, sea born, database management, small business websites, startups, data-driven enterprises, e-commerce sites, nonprofit organisations",

    authors: {
        name: "Yasin Walum",
        url: "https://ywalum.com",
    },

    openGraph: {
        title: "Yasin Walum | Web Developer Portfolio",
        description:
            "👋 Hello! I'm Yasin Walum, a passionate web developer and data analyst with a love for transforming data into meaningful insights and crafting web experiences that leave a lasting impression. With a blend of creativity and analytical prowess, I bring a unique perspective to every project I undertake. 🌐 On the web development front, I thrive in the ever-evolving world of technologies, from front-end magic with HTML, CSS, and JavaScript to building robust back-end systems. My dedication to clean code and user-centric design is at the core of my work, ensuring that the applications I build not only function flawlessly but also provide an exceptional user experience. 📊 As a data analyst, I enjoy uncovering hidden patterns and stories within data sets. Whether it's crunching numbers, creating insightful visualizations, or designing predictive models, I revel in the challenge of turning data into actionable insights that drive decision-making and innovation. 🛠️ My toolset includes a wide range of web development frameworks and libraries, as well as data analysis tools such as Python, R, SQL, and various data visualization libraries. I'm always excited to learn new technologies and explore innovative solutions to complex problems. 🚀 Join me on this journey of continuous learning and improvement as we harness the power of data and technology to build a better, data-driven world. Let's connect and collaborate on exciting projects. Feel free to explore my GitHub repositories to see my work in action, and don't hesitate to reach out for collaborations, discussions, or just a good coding chat! #WebDeveloper #Portfolio #CodingSkills #DataAnalyst",
        siteName: "Yasin Walum | Web Developer Portfolio",
        images: [
            {
                url: "/hero.jpg",
                width: 760,
                height: 760,
                alt: "Yasin Walum",
            },
        ],
        locale: "en_us",
        url: "/",
        type: "website",
    },
    alternates: {
        canonical: "/",
    },
    twitter: {
        card: "summary_large_image",
        title: "Yasin Walum | Web Developer Portfolio",
        description:
            "👋 Hello! I'm Yasin Walum, a passionate web developer and data analyst with a love for transforming data into meaningful insights and crafting web experiences that leave a lasting impression. With a blend of creativity and analytical prowess, I bring a unique perspective to every project I undertake. 🌐 On the web development front, I thrive in the ever-evolving world of technologies, from front-end magic with HTML, CSS, and JavaScript to building robust back-end systems. My dedication to clean code and user-centric design is at the core of my work, ensuring that the applications I build not only function flawlessly but also provide an exceptional user experience. 📊 As a data analyst, I enjoy uncovering hidden patterns and stories within data sets. Whether it's crunching numbers, creating insightful visualizations, or designing predictive models, I revel in the challenge of turning data into actionable insights that drive decision-making and innovation. 🛠️ My toolset includes a wide range of web development frameworks and libraries, as well as data analysis tools such as Python, R, SQL, and various data visualization libraries. I'm always excited to learn new technologies and explore innovative solutions to complex problems. 🚀 Join me on this journey of continuous learning and improvement as we harness the power of data and technology to build a better, data-driven world. Let's connect and collaborate on exciting projects. Feel free to explore my GitHub repositories to see my work in action, and don't hesitate to reach out for collaborations, discussions, or just a good coding chat! #WebDeveloper #Portfolio #CodingSkills #DataAnalyst",
        images: [
            {
                url: "/hero.jpg",
                width: 1200,
                height: 630,
                alt: "Yasin Walum",
            },
        ],
        site: "@YasinWalum",
        creator: "@YasinWalum",
    },

    category: "web development",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider>
            <html lang="en" suppressHydrationWarning>
                <body
                    className={cn(
                        "min-h-screen  font-sans antialiased",
                        fontSans.variable
                    )}
                >
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                        disableTransitionOnChange
                    >
                        {children}
                        <Toaster />
                    </ThemeProvider>
                </body>
            </html>
        </ClerkProvider>
    );
}
