import { Outlet } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import SideNavbar from './SideNavbar/SideNavbar';

const UserLayout = ({ children }: { children: React.ReactNode }) => (
    <div className="flex flex-col h-screen">
        <Navbar />
        <div className="flex flex-1 overflow-hidden">
            {/* Fixed SideNavbar - 16.666% width (1/6 of screen) */}
            <div className="fixed h-[calc(100vh-4rem)] w-1/6">
                <SideNavbar />
            </div>

            {/* Scrollable content area - takes remaining space */}
            <div className="ml-[16.666%] w-5/6 overflow-y-auto">
                <div className="">
                    {children || <Outlet />}
                </div>
            </div>
        </div>
    </div>
);

export default UserLayout;