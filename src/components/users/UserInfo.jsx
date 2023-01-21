import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import axios from "../../axios";

const UserInfo = () => {
    const router = useRouter();
    const pageID = router.query.id;

    const fetchUser = async () => {
        const res = await axios.get("/users");
        return res;
    };

    const { data, isLoading } = useQuery(["user", pageID], fetchUser);

    if (isLoading) {
        return <p>Loading....</p>;
    }

    const userObj = data?.data?.find((user) => user.id === +pageID);

    return (
        <div className="pt-10">
            <div className="container">
                <h2 className="text-2xl font-semibold mb-5 text-center">
                    User Information
                </h2>
                <div className="grid grid-col-1">
                    <div className="border p-5">
                        <h4>Name: {userObj?.name || "Uzzal"}</h4>
                        <h4>Email: {userObj?.email || "uzzal@gmail.com"}</h4>
                        <h4>Phone: {userObj?.phone || "0123456789"}</h4>
                        <h4>website: {userObj?.website || "uzzal.com"}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserInfo;
