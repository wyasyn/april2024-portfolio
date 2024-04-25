import Cta from "./cta";
import TitleHead from "./titleHead";
import Socials from "./socials";

export default function Footer() {
    return (
        <footer>
            <div className=" text-center pt-[3rem] pb-2 ">
                <h2 className=" text-popover text-3xl font-bold ">
                    Let&apos;s work together.
                </h2>
                <p className=" my-4 ">
                    Have a project in mind or just want to connect? Feel free to
                    reach out!
                </p>
                <Cta />
                <div className=" flex items-center justify-between bg-secondary rounded-md border px-4 py-2 ">
                    <TitleHead name="follow me" />
                    <Socials />
                </div>
                <div className=" mt-3 bg-secondary border rounded-lg py-[4rem] ">
                    <p>
                        &copy; {new Date().getFullYear()}{" "}
                        <span className=" text-popover ">Yasin Walum.</span>{" "}
                    </p>
                </div>
            </div>
        </footer>
    );
}
