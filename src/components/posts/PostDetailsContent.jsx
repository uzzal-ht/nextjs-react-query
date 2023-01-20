const PostDetailsContent = ({ data }) => {
    return (
        <div className="grid grid-cols-1">
            <h2 className="text-2xl font-semibold mb-5 text-center">
                Post Details content
            </h2>
            <article className="border p-5">
                <h1 className="text-xl font-semibold capitalize">
                    {data?.data?.title}
                </h1>
                <p>{data.data.body}</p>
            </article>
        </div>
    );
};

export default PostDetailsContent;
