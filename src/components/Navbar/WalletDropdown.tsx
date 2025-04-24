import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarTrigger,
} from "@/components/ui/menubar";
import { FaWallet } from "react-icons/fa";
import { Link } from "react-router-dom";


export function WalletDropdown() {
    return (
        <Menubar className="border-none bg-transparent shadow-none">
            <MenubarMenu>
                <MenubarTrigger className="p-0 border-none hover:bg-transparent focus:bg-transparent">
                    <FaWallet className="w-8 h-8 text-muted-foreground" />
                </MenubarTrigger>
                <MenubarContent className="w-48 rounded-xl shadow-lg p-1">
                    <Link
                        to="/userinfo"
                        className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted/80 transition-colors">
                        <span>Coupon Wallet (saved coupons)</span>
                    </Link>
                    <MenubarSeparator />
                    <MenubarItem className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted/80 transition-colors">
                        <span>Voucher Wallet (gift cards)</span>
                    </MenubarItem>
                </MenubarContent>
            </MenubarMenu>
        </Menubar>
    );
}
