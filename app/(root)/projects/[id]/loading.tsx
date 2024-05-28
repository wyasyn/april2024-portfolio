import { LoaderCircle } from "lucide-react";

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <section className=" min-h-dvh grid place-items-center ">
            <LoaderCircle size={48} className=" animate-spin " />
        </section>
    );
}
