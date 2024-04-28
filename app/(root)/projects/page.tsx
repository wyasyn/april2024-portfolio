import Card from "@/components/card";
import TitleHead from "@/components/titleHead";

const projs = [
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?q=80&w=800&h=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=1748&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?q=80&w=800&h=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?q=80&w=800&h=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?q=80&w=800&h=600&auto=format&fit=crop",
];

export default function page() {
    return (
        <div>
            <div className=" px-8 py-10 ">
                <TitleHead name="Projects" />
                <div>
                    <h2 className=" mt-8 mb-4 text-popover text-3xl font-semibold recoleta ">
                        My Works
                    </h2>
                    <p>
                        Discover my portfolio, where innovation meets execution.
                        Dive into a collection of endeavors that showcase my
                        passion for technology, creativity, and problem-solving.
                        From groundbreaking software solutions to captivating
                        web applications, each project represents a unique blend
                        of skill, dedication, and ingenuity.
                    </p>
                </div>
            </div>
            <div className=" px-5 bg-secondary py-5 rounded-lg my-[4rem] grid gap-x-[1rem] grid-cols-1 sm:grid-cols-2 gap-y-[4rem] ">
                {projs.map((item, index) => (
                    <Card key={index} src={item} />
                ))}
            </div>
        </div>
    );
}
