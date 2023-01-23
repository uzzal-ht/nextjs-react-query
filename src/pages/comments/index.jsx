import Head from "next/head";
import { useQuery } from "@tanstack/react-query";
import axios from "../../axios";
import LoadingSppiner from "../../components/UI/LoadingSppiner";
import CommentCard from "../../components/Comments/CommentCard";
import CommentForm from "../../components/Comments/CommentForm";

const Comments = () => {
    const fetchComments = async () => {
        const response = await axios.get("/comments");
        return response;
    };
    const { isLoading, data, isError, error } = useQuery({
        queryKey: ["comments"],
        queryFn: fetchComments,
        staleTime: 1000 * 60 * 10,
    });

    if (isLoading) {
        return <LoadingSppiner />;
    }
    if (isError) {
        return <h2>There was an error {error.message}</h2>;
    }

    return (
        <>
            <Head>
                <title>All Comments</title>
            </Head>
            <div className="container">
                <CommentForm />
                <div className="grid grid-cols-2 gap-5">
                    {data.data.map((item) => (
                        <CommentCard
                            key={item.id}
                            name={item.name}
                            email={item.email}
                            body={item.body}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Comments;
