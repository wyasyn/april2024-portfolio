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
  title:
    "Yasin Walum | 🌐 Professional Full Stack Web Developer | Custom Web Solutions & Development Services 💻",
  description:
    "🚀 Yasin Walum is a professional Full Stack Web Developer offering custom web solutions and development services. Specializing in responsive design, modern web technologies, and user-friendly interfaces. Transforming ideas into dynamic web applications. 💡✨",
  keywords:
    "Yasin Walum, Full Stack Web Developer, Custom Web Solutions, Web Development Services, Responsive Web Design, Modern Web Technologies, User-Friendly Interfaces, Dynamic Web Applications, Professional Web Developer, Frontend Development, Backend Development, Web Application Development, JavaScript Developer, HTML/CSS Developer, React Developer, Node.js Developer, PHP Developer, Web Development Portfolio, Freelance Web Developer, Website Development Expert, UI/UX Design",

  authors: {
    name: "Yasin Walum",
    url: "https://ywalum.com",
  },

  openGraph: {
    title:
      "Yasin Walum | 🌐 Professional Full Stack Web Developer | Custom Web Solutions & Development Services 💻",
    description:
      "🚀 Yasin Walum is a professional Full Stack Web Developer offering custom web solutions and development services. Specializing in responsive design, modern web technologies, and user-friendly interfaces. Transforming ideas into dynamic web applications. 💡✨",
    siteName:
      "Yasin Walum | 🌐 Professional Full Stack Web Developer | Custom Web Solutions & Development Services 💻",
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
    title:
      "Yasin Walum | 🌐 Professional Full Stack Web Developer | Custom Web Solutions & Development Services 💻",
    description:
      "🚀 Yasin Walum is a professional Full Stack Web Developer offering custom web solutions and development services. Specializing in responsive design, modern web technologies, and user-friendly interfaces. Transforming ideas into dynamic web applications. 💡✨",
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
