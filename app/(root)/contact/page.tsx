import FormCard from "@/components/formItem";
import TitleHead from "@/components/titleHead";

export default function page() {
    return (
        <div className=" px-8 py-10 ">
            <TitleHead name="Hire Me" />
            <div className=" my-[3rem] ">
                <h1 className=" text-popover scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl mb-4 ">
                    Inquiry
                </h1>
                <p>Got an idea and need a developer? Reach out now</p>
                <div className=" mt-[2rem] ">
                    <FormCard />
                </div>
            </div>
        </div>
    );
}
