import Link from "next/link";

const Header = () => {
    return (
        <div className="py-5 border-b mb-10">
            <div className="container">
                <ul className="flex justify-center">
                    <li className="mr-10 text-lg font-medium hover:text-primary">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="mr-10 text-lg font-medium hover:text-primary">
                        <Link href="/comments">Comments</Link>
                    </li>
                    <li className="mr-10 text-lg font-medium hover:text-primary">
                        <Link href="/posts">Posts</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
