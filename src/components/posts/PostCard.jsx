import Link from "next/link";

const PostCard = ({ id, title, body }) => {
    return (
        <article className="card border p-5">
            <h3>
                {title} - ({id})
            </h3>
            <p>{body}</p>
            <Link
                href={`/posts/${id}`}
                className="px-5 py-2.5 bg-primary text-white rounded-md inline-block"
            >
                Read More
            </Link>
        </article>
    );
};

export default PostCard;
