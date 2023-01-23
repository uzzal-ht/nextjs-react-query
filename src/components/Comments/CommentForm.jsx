import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "../../axios";

const CommentForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [body, setBody] = useState("");

    const queryClient = useQueryClient();

    const postComment = async (comment) => {
        const response = await axios.post("/comments", comment);
        return response;
    };

    const mutation = useMutation({
        mutationFn: postComment,
        onSuccess: (data) => {
            // queryClient.invalidateQueries(["comments"]);
            queryClient.setQueriesData(["comments"], (prevData) => {
                return { data: [data.data, ...prevData.data] };
            });
        },
    });

    const commentSubmitHandler = (e) => {
        e.preventDefault();
        const user = { name, email, body };
        mutation.mutate(user);
    };

    if (mutation.isLoading) {
        return <h4>Comment saving...</h4>;
    }

    if (mutation.isError) {
        return <h3>Something went wrong!</h3>;
    }

    return (
        <div className="grid grid-col-1">
            <form
                className="border p-5 mb-5 space-y-5"
                onSubmit={commentSubmitHandler}
            >
                <div className="border">
                    <input
                        type="text"
                        value={name}
                        placeholder="Write name here"
                        className="w-full h-12 px-5 py-3"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="border">
                    <input
                        type="text"
                        value={email}
                        placeholder="Write email here"
                        className="w-full h-12 px-5 py-3"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="border">
                    <input
                        type="text"
                        value={body}
                        placeholder="Write body here"
                        className="w-full h-12 px-5 py-3"
                        onChange={(e) => setBody(e.target.value)}
                    />
                </div>
                <button
                    type="submit"
                    className="bg-primary text-white px-8 py-2 hover:bg-black"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default CommentForm;
