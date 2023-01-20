// import Link from "next/link";
import Head from "next/head";

const Home = () => {
    return (
        <>
            <Head>
                <title>Blog page</title>
            </Head>
            <div className="container">
                <div className="grid grid-cols-4 gap-5">
                    <h2>This is blog page</h2>
                </div>
            </div>
        </>
    );
};

export default Home;
