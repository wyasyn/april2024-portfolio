import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main>
            <Navbar />
            <div className=" container rounded-lg mt-[2rem] bg-background border ">
                {children}
                <Footer />
            </div>
        </main>
    );
}
