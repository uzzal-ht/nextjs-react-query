import Head from "next/head";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import axios from "../../axios";

import LoadingSppiner from "../../components/UI/LoadingSppiner";
import PostDetailsContent from "../../components/posts/PostDetailsContent";
import CommentsList from "../../components/posts/CommentsList";

const Home = () => {
    const router = useRouter();

    const { id } = router.query;

    const fetchPost = async (postId) => {
        const res = await axios.get(`/posts/${postId}`);
        return res;
    };

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["post", id],
        queryFn: () => fetchPost(id),
        enabled: !!id,
        staleTime: 1000 * 60 * 5,
    });

    if (isLoading) {
        return <LoadingSppiner />;
    }
    if (isError) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <>
            <Head>
                <title>Post Details</title>
            </Head>
            <div className="pb-20">
                <div className="container">
                    <PostDetailsContent data={data} />
                    <CommentsList pageId={id} />
                </div>
            </div>
        </>
    );
};

export default Home;
