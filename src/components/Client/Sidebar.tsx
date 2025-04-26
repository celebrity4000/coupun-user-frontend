import images from "@/assets/img";
import { FC, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar: FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [accountExpanded, setAccountExpanded] = useState(false);

  // Auto-expand the account section if user is on an account page
  useEffect(() => {
    if (currentPath.startsWith("/client/account/")) {
      setAccountExpanded(true);
    }
  }, [currentPath]);

  const toggleAccountExpansion = () => {
    setAccountExpanded(!accountExpanded);
  };

  // Determine if a tab should be highlighted as active
  const isTabActive = (path: string) => {
    // If we're on an account page or account is expanded, other tabs shouldn't be active
    if (
      (currentPath.startsWith("/client/account/") || accountExpanded) &&
      path !== "/client/account"
    ) {
      return false;
    }

    // Otherwise, show active state based on current path
    return currentPath === path;
  };

  // Check if we're currently on an account page
  const isOnAccountPage = currentPath.startsWith("/client/account/");

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
        <h2 className="text-white font-medium text-lg">Company Name</h2>
        <p className="text-white text-sm mt-1">Aniketdange3292@gmail.com</p>
      </div>

      {/* Navigation Items */}
      <nav className="flex-grow mt-8 flex flex-col font-poppins font-bold">
        <Link
          to="/client/dashboard"
          className={`py-3 text-white transition-colors ${
            isTabActive("/client/dashboard")
              ? "bg-green-500 hover:bg-green-600"
              : "hover:bg-zinc-700"
          }`}
        >
          <span className="block text-center px-6 text-[16px]">Dashboard</span>
        </Link>

        <Link
          to="/client/performance"
          className={`py-3 text-white transition-colors mt-2 ${
            isTabActive("/client/performance")
              ? "bg-green-500 hover:bg-green-600"
              : "hover:bg-zinc-700"
          }`}
        >
          <span className="block text-center px-6 text-[16px]">
            Track performance in real-time
          </span>
        </Link>

        {/* Account button with dropdown functionality */}
        <button
          onClick={toggleAccountExpansion}
          className={`py-3 text-white transition-colors mt-2 text-center ${
            accountExpanded || isOnAccountPage
              ? "bg-green-500 hover:bg-green-600"
              : "hover:bg-zinc-700"
          }`}
        >
          <span className="block text-center px-6 text-[16px]">Account</span>
        </button>

        {/* Conditionally render account sub-items */}
        {accountExpanded && (
          <>
            <Link
              to="/client/account/profile"
              className={`py-3 text-white bg-[#D9D9D9] hover:bg-zinc-700 transition-colors border-b border-zinc-700 ${
                currentPath === "/client/account/profile"
                  ? "bg-zinc-600 text-green-400"
                  : ""
              }`}
            >
              <span className="block text-center px-6 text-[16px]">
                Profile
              </span>
            </Link>
            <Link
              to="/client/account/billinghistory"
              className={`py-3 text-white bg-[#D9D9D9] hover:bg-zinc-700 transition-colors border-b border-zinc-700 ${
                currentPath === "/client/account/billinghistory"
                  ? "bg-zinc-600 text-green-400"
                  : ""
              }`}
            >
              <span className="block text-center px-6 text-[16px]">
                Billing History
              </span>
            </Link>
            <Link
              to="/client/account/tickets"
              className={`py-3 text-white bg-[#D9D9D9] hover:bg-zinc-700 transition-colors ${
                currentPath === "/client/account/tickets"
                  ? "bg-zinc-600 text-green-400"
                  : ""
              }`}
            >
              <span className="block text-center px-6 text-[16px]">
                Raise Tickets
              </span>
            </Link>
          </>
        )}

        <Link
          to="/client/subscription"
          className={`py-3 text-white transition-colors mt-2 ${
            isTabActive("/client/subscription")
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
