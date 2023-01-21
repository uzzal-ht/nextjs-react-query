import Head from "next/head";
import PostsWrapper from "../components/posts/PostsWrapper";

const Home = () => {
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            <PostsWrapper />
        </>
    );
};

export default Home;
