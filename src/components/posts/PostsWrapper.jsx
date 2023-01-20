import { useQuery } from "@tanstack/react-query";
import axios from "../../axios";

import LoadingSppiner from "../UI/LoadingSppiner";
import PostCard from "./PostCard";

const PostsWrapper = () => {
    const fetchPosts = async () => {
        const response = await axios.get("/posts");
        return response;
    };

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["posts"],
        queryFn: fetchPosts,
        staleTime: 1000 * 60 * 5,
    });

    if (isLoading) {
        return <LoadingSppiner />;
    }
    if (isError) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <div className="posts-wrapper py-20">
            <div className="container">
                <div className="grid grid-cols-3 gap-5">
                    {data.data.map((post) => (
                        <PostCard
                            key={post.id}
                            title={post.title}
                            body={post.body}
                            id={post.id}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PostsWrapper;
