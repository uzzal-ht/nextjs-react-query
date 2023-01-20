import Head from "next/head";
import PostsWrapper from "../components/posts/PostsWrapper";

const Home = () => {
    return (
        <>
            <Head>
                <title>Home page</title>
            </Head>
            <PostsWrapper />
        </>
    );
};

export default Home;
