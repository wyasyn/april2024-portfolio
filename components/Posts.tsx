import { getPostsMeta } from "@/lib/posts";
import ListItem from "./ListItem";

export default async function Posts() {
    const posts = await getPostsMeta();

    if (!posts) {
        return <p className="mt-10 text-center">Sorry, no posts available.</p>;
    }

    return (
        <section className="mt-10 bg-secondary px-8 py-10 rounded-xl border">
            <ul className="w-full list-none p-0">
                {posts.map((post) => (
                    <ListItem key={post.id} post={post} />
                ))}
            </ul>
        </section>
    );
}
