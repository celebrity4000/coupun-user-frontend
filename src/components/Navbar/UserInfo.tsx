import React, { useEffect } from "react";
import { FaRegUserCircle } from "react-icons/fa";

const UserInfo: React.FC = () => {
    const user = {
        firstName: "John",
        lastName: "Doe",
        email: ""
    };

    //Todo: Fetch user data from API and update the state

    useEffect(() => {
        const fetchData = async () => {
            try {

            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchData();
    }, []);
    return (
        <div className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg mr-5">
            <FaRegUserCircle
                className="rounded-full w-8 h-8 navBarWidth:w-6 navBarWidth:h-6"
            />
            <p>
                <span className=" text-14">Hi,</span>{" "}
                <span className="ml-1 text-14">{user.firstName}</span>
            </p>
        </div>
    );
};

export default UserInfo;
