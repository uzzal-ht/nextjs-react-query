import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "../../axios";

import LoadingSppiner from "../UI/LoadingSppiner";
import PostCard from "./PostCard";

const PostsWrapper = () => {
    // get all post data
    const fetchPosts = async () => {
        const { data } = await axios.get("/posts");
        return data;
    };

    // query for get post data
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["posts"],
        queryFn: fetchPosts,
        staleTime: 1000 * 60 * 5,
    });

    const queryClient = useQueryClient();

    // fetch single post for delete
    const deletePost = async (postId) => {
        const res = await axios.delete(`/posts/${postId}`);
        return res;
    };

    // mutation for post delete
    const postMutation = useMutation({
        mutationFn: deletePost,
        onSuccess: (res, id) => {
            queryClient.setQueryData(["posts"], (prevData) => {
                return prevData.filter((item) => item.id !== id);
            });
        },
    });

    // post delete handler
    const postDeleteHandler = (id) => {
        postMutation.mutate(id);
    };

    // if data loading
    if (isLoading) {
        return <LoadingSppiner />;
    }

    // if an error
    if (isError) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <div className="posts-wrapper pb-20">
            <div className="container">
                <div className="grid grid-cols-3 gap-5">
                    {data.map((post) => (
                        <PostCard
                            key={post.id}
                            title={post.title}
                            body={post.body}
                            id={post.id}
                            postDeleteHandler={postDeleteHandler}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PostsWrapper;
