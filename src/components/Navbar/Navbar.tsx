import React from "react";
import { NavLink } from "react-router-dom";
import UserInfo from "./UserInfo";
import { UserDropdown } from "./UserDropdown";
import { Notifications } from "./Notifications";
import { WalletDropdown } from "./WalletDropdown";
import { FaSearch } from "react-icons/fa";

const Navbar: React.FC = () => {
    return (
        <>
            <div className="flex justify-center items-center bg-navbarBgColor shadow-lg p-3">
                <div className=" flex justify-between items-center w-full h-[56px]">
                    <NavLink to="/homepage">
                        <div className="font-poppins text-[2em] font-semibold leading-[40px]  decoration-skip-ink-none ml-5">
                            Logo
                        </div>
                    </NavLink>

                    <div className="searchbar relative flex items-center w-full sm:w-1/2 lg:w-1/3">
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full py-2 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500 font-poppins text-gray-700 placeholder-gray-500 shadow-custom"
                        />
                        <FaSearch className="absolute right-3 text-gray-500" />
                    </div>

                    <div className="profilecontainer flex gap-1 items-center justify-center">
                        <WalletDropdown />
                        <Notifications />
                        <UserDropdown element={<UserInfo />} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
