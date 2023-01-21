import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import axios from "../../axios";
import LoadingSppiner from "../UI/LoadingSppiner";

const CommentsList = () => {
    const router = useRouter();

    const pageId = router.query.id;

    const fetchComments = async () => {
        const res = await axios.get(`posts/${pageId}/comments`);
        return res;
    };

    const { data, isLoading, isError, error } = useQuery(
        ["posts", pageId, "comments"],
        fetchComments,
        {
            staleTime: 1000 * 60 * 5,
        }
    );

    if (isLoading) {
        return <LoadingSppiner />;
    }

    if (isError) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <div className="grid grid-cols-1 mt-10 space-y-5">
            <h2 className="text-2xl font-semibold mb-5 text-center">
                All comments by post
            </h2>
            {data.data.map(({ id, name, email, body }) => (
                <div className="border p-5" key={id}>
                    <h4 className="text-lg font-medium">Name: {name}</h4>
                    <h4 className="text-lg font-medium">Email: {email}</h4>
                    <h4 className="text-lg font-medium">Details: {body}</h4>
                </div>
            ))}
        </div>
    );
};

export default CommentsList;
