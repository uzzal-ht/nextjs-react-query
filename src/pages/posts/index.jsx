// import Link from "next/link";
import Head from "next/head";

const Home = () => {
    return (
        <>
            <Head>
                <title>All Posts</title>
            </Head>
            <div className="container">
                <div className="grid grid-cols-4 gap-5">
                    <h2>This is posts page</h2>
                </div>
            </div>
        </>
    );
};

export default Home;
