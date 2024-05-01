import Link from "next/link";
import getFormattedDate from "@/lib/getFormattedDate";

type Props = {
    post: Meta;
};

export default function ListItem({ post }: Props) {
    const { id, title, date } = post;
    const formattedDate = getFormattedDate(date);

    return (
        <li className="mt-4 text-xl text-balance hover:bg-background bg-card px-4 rounded-lg border py-2 shadow-md">
            <p className="text-sm mb-1">{formattedDate}</p>
            <Link className="recoleta text-popover " href={`/blog/${id}`}>
                {title}
            </Link>
        </li>
    );
}
