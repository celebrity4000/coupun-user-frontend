import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { FaWallet } from "react-icons/fa";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export function WalletDropdown() {
  return (
    <Menubar className="border-none bg-white shadow-none">
      <MenubarMenu>
        <MenubarTrigger className="p-0 border-none hover:bg-gray-200 rounded-full cursor-pointer data-[state=open]:bg-gray-200">
          <div className="flex items-center gap-1 px-2 py-1">
            <FaWallet className="w-8 h-8 text-black" />
            <ChevronDown className="w-6 h-6 text-muted-foreground" />
          </div>
        </MenubarTrigger>
        <MenubarContent className="w-56 rounded-lg shadow-lg p-0 border-black mr-10 font-poppins font-normal">
          <Link
            to="/userinfo"
            className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100 transition-colors border-b border-black"
          >
            <span className="text-sm cursor-pointer">
              Campaign budget, coupon redemption costs
            </span>
          </Link>
          <MenubarItem className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100 transition-colors border-b border-black">
            <span className="text-sm cursor-pointer">
              Earnings from featured listings
            </span>
          </MenubarItem>
          <MenubarItem className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100 transition-colors">
            <span className="text-sm cursor-pointer">
              Coupon Vault & Voucher reports
            </span>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
