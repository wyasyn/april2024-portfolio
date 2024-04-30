export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main>
            <div className=" w-full h-dvh grid place-items-center ">
                {children}
            </div>
        </main>
    );
}
