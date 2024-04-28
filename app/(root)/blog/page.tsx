import BlogCard from "@/components/blogCard";
import TitleHead from "@/components/titleHead";

export default function page() {
    return (
        <div>
            <div className=" px-8 py-10 ">
                <TitleHead name="Blog" />
                <div>
                    <h2 className=" mt-8 mb-4 text-popover text-3xl font-semibold recoleta ">
                        Insights & Innovations
                    </h2>
                    <p>
                        Step into a world where technology meets creativity, and
                        ideas flourish. Join me on a journey through insightful
                        articles, thought-provoking discussions, and innovative
                        explorations at the crossroads of computer science,
                        education, and entertainment.
                    </p>
                </div>
            </div>
            <div className=" my-[3rem] bg-secondary px-5 grid gap-[2rem] py-10 rounded-lg ">
                <BlogCard />
                <BlogCard />
            </div>
        </div>
    );
}
