import Head from "next/head";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import axios from "../../axios";
import LoadingSppiner from "../../components/UI/LoadingSppiner";
import CommentCard from "../../components/Comments/CommentCard";

const Home = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

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

    const commentSubmitHandler = (e) => {
        e.prevent.default();
    };

    return (
        <>
            <Head>
                <title>All Comments</title>
            </Head>
            <div className="container">
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
                                onChange={(e) => setName(e.target.value)}
                                className="w-full h-12 px-5 py-3"
                            />
                        </div>
                        <div className="border">
                            <input
                                type="text"
                                value={email}
                                placeholder="Write name here"
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full h-12 px-5 py-3"
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

export default Home;
