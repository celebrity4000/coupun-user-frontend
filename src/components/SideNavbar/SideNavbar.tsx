import { useState } from "react";
import {
    Home,
    Settings,
    User,
    CreditCard,
    HelpCircle,
    ChevronDown,
    ChevronRight,
    LogOut,
    Gift,
    BookOpen
} from "lucide-react";
import { useNavigate } from "react-router-dom";

type MenuItem = {
    label: string;
    icon: React.ReactNode;
    subMenu?: MenuItem[];
    path?: string;
};

const mainMenuItems: MenuItem[] = [
    {
        label: "Home",
        icon: <Home size={18} />,
        path: "/user/dashboard",
    },
    {
        label: "Subscription",
        icon: <CreditCard size={18} />,
        subMenu: [
            { label: "Subscription Management", icon: <CreditCard size={16} /> },
            { label: "Support", icon: <HelpCircle size={16} /> },
        ],
    },
    {
        label: "Settings",
        icon: <Settings size={18} />,
        subMenu: [
            { label: "Profile Update", icon: <User size={16} />, path: "/user/profile" },
            { label: "Privacy", icon: <Settings size={16} /> },
        ],
    },
];

const moreMenuItems: MenuItem[] = [
    { label: "Refer & Earn", icon: <Gift size={18} /> },
    { label: "Tutorials", icon: <BookOpen size={18} />, path: "/user/tutorials" },
    { label: "Logout", icon: <LogOut size={18} /> },
];

export default function SideNavbar() {
    const [openMenus, setOpenMenus] = useState<string[]>([]);
    const [showMore, setShowMore] = useState(false);

    const navigate = useNavigate();

    const toggleMenu = (label: string) => {
        setOpenMenus((prev) =>
            prev.includes(label)
                ? prev.filter((l) => l !== label)
                : [...prev, label]
        );
    };

    return (
        <div className="w-full h-screen bg-[#DCDCDC] text-gray-800 p-4 flex flex-col border-r border-gray-300">
            <div className="flex-1">
                <ul className="space-y-2">
                    {mainMenuItems.map((item) => (
                        <li key={item.label}>
                            <div
                                className="flex items-center justify-between cursor-pointer hover:bg-gray-300 p-2 rounded transition-colors"
                                onClick={() => item.subMenu && toggleMenu(item.label)}
                            >
                                <div
                                    onClick={() => item.path && navigate(item.path)}
                                    className="flex items-center space-x-2">
                                    {item.icon}
                                    <span className="font-medium">{item.label}</span>
                                </div>
                                {item.subMenu &&
                                    (openMenus.includes(item.label) ? (
                                        <ChevronDown size={16} className="ml-2" />
                                    ) : (
                                        <ChevronRight size={16} className="ml-2" />
                                    ))}
                            </div>
                            {item.subMenu && openMenus.includes(item.label) && (
                                <ul className="ml-6 mt-1 space-y-1">
                                    {item.subMenu.map((sub) => (
                                        <li
                                            key={sub.label}
                                            onClick={() => sub.path && navigate(sub.path)}
                                            className="flex items-center space-x-2 hover:bg-gray-300 p-2 rounded cursor-pointer transition-colors"
                                        >
                                            {sub.icon}
                                            <span className="text-sm">{sub.label}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
                {/* More Section */}
                <div className="pt-4 ">
                    <div
                        onClick={() => setShowMore(!showMore)}
                        className="flex items-center justify-between cursor-pointer hover:bg-gray-300 p-2 rounded transition-colors"
                    >
                        <div className="flex items-center space-x-2">
                            <span className="font-medium">
                                {showMore ? "Show Less" : "More ..."}
                            </span>
                        </div>
                    </div>
                    {showMore && (
                        <ul className="mt-2 space-y-2 ml-6">
                            {moreMenuItems.map((item) => (
                                <li
                                    key={item.label}
                                    onClick={() => item.path && navigate(item.path)}
                                    className="flex items-center space-x-2 hover:bg-gray-300 p-2 rounded cursor-pointer transition-colors"
                                >
                                    {item.icon}
                                    <span className="text-sm">{item.label}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}