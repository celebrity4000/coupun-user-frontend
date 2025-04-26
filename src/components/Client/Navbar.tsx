import { FC } from "react";
import { Search } from "lucide-react";
import { WalletDropdown } from "./WalletDropdown";

const Navbar: FC = () => {
  return (
    <div className="w-full bg-white border-gray-200">
      <div className="flex justify-between items-center px-4 py-2">
        {/* Empty div to balance the flex layout */}
        <div className="flex-1"></div>

        {/* Centered Search Bar */}
        <div className="relative flex-1 max-w-md mx-4">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-8 w-8 text-black bg-gray-200 rounded-xl p-2" />
          </div>
          <input
            type="text"
            className="pl-14 pr-4 py-2 w-full rounded-xl border-2 border-black focus:outline-none focus:ring-1 focus:ring-gray-900"
            placeholder=""
          />
        </div>

        {/* Right side items with margin from search */}
        <div className="flex-1 flex justify-end items-center">
          <WalletDropdown />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
