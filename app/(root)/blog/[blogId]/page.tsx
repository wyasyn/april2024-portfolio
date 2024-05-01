import getFormattedDate from "@/lib/getFormattedDate";
import { getPostsMeta, getPostByName } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import "highlight.js/styles/github-dark.css";
import { ChevronLeft } from "lucide-react";

export const revalidate = 86400;

type Props = {
    params: {
        blogId: string;
    };
};

export async function generateStaticParams() {
    const posts = await getPostsMeta(); //deduped!

    if (!posts) return [];

    return posts.map((post) => ({
        postId: post.id,
    }));
}

export async function generateMetadata({ params: { blogId } }: Props) {
    const post = await getPostByName(`${blogId}.mdx`); //deduped!

    if (!post) {
        return {
            title: "Post Not Found",
        };
    }

    return {
        title: post.meta.title,
    };
}

export default async function Post({ params: { blogId } }: Props) {
    const post = await getPostByName(`${blogId}.mdx`); //deduped!

    if (!post) notFound();

    const { meta, content } = post;

    const pubDate = getFormattedDate(meta.date);

    const tags = meta.tags.map((tag, i) => (
        <Link key={i} href={`/tags/${tag}`}>
            {tag}
        </Link>
    ));

    return (
        <div className=" px-4 py-10 ">
            <p className="mt-0 text-sm">{pubDate}</p>
            <h2 className="text-3xl my-4">{meta.title}</h2>

            <article>{content}</article>
            <section className=" my-8 ">
                <h3>Related:</h3>
                <div className="flex flex-row gap-4">{tags}</div>
            </section>
            <p className="mb-10">
                <Link
                    href="/"
                    className=" flex items-center px-4 py-2 rounded-sm bg-card w-fit hover:bg-secondary shadow-md "
                >
                    {" "}
                    <ChevronLeft size={20} /> Back to home
                </Link>
            </p>
        </div>
    );
}
