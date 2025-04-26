import images from "@/assets/img";
import { FC } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar: FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="h-full w-full bg-[#2D2D2D] flex flex-col">
      {/* User Profile Section */}
      <div className="flex flex-col items-center p-6 border-zinc-700 font-karla">
        <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
          <img
            src={images.Profile}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-white font-medium text-lg">Aniket Dange</h2>
        <p className="text-white text-sm mt-1">Aniketdange3292@gmail.com</p>
      </div>

      {/* Navigation Items */}
      <nav className="flex-grow mt-8 flex flex-col font-poppins font-bold">
        <Link
          to="/client/dashboard"
          className={`py-3 text-white transition-colors ${
            currentPath === "/client/dashboard"
              ? "bg-green-500 hover:bg-green-600"
              : "hover:bg-zinc-700"
          }`}
        >
          <span className="block text-center px-6 text-[16px]">Dashboard</span>
        </Link>

        <Link
          to="/client/performance"
          className={`py-3 text-white transition-colors mt-2 ${
            currentPath === "/client/performance"
              ? "bg-green-500 hover:bg-green-600"
              : "hover:bg-zinc-700"
          }`}
        >
          <span className="block text-center px-6 text-[16px]">
            Track performance in real-time
          </span>
        </Link>
        <Link
          to="/client/account"
          className={`py-3 text-white transition-colors mt-2 ${
            currentPath === "/client/account"
              ? "bg-green-500 hover:bg-green-600"
              : "hover:bg-zinc-700"
          }`}
        >
          <span className="block text-center px-6 text-[16px]">Account</span>
        </Link>
        <Link
          to="/client/profile"
          className={`py-3 text-white transition-colors mt-2 ${
            currentPath === "/client/profile"
              ? "bg-green-500 hover:bg-green-600"
              : "hover:bg-zinc-700"
          }`}
        >
          <span className="block text-center px-6 text-[16px]">Profile</span>
        </Link>
        <Link
          to="/client/billinghistory"
          className={`py-3 text-white transition-colors mt-2 ${
            currentPath === "/client/billinghistory"
              ? "bg-green-500 hover:bg-green-600"
              : "hover:bg-zinc-700"
          }`}
        >
          <span className="block text-center px-6 text-[16px]">
            Billing History
          </span>
        </Link>
        <Link
          to="/client/raisetickets"
          className={`py-3 text-white transition-colors mt-2 ${
            currentPath === "/client/raisetickets"
              ? "bg-green-500 hover:bg-green-600"
              : "hover:bg-zinc-700"
          }`}
        >
          <span className="block text-center px-6 text-[16px]">
            Raise Tickets
          </span>
        </Link>
        <Link
          to="/client/subscription"
          className={`py-3 text-white transition-colors mt-2 ${
            currentPath === "/client/subscription"
              ? "bg-green-500 hover:bg-green-600"
              : "hover:bg-zinc-700"
          }`}
        >
          <span className="block text-center px-6 text-[16px]">
            Subscription
          </span>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
