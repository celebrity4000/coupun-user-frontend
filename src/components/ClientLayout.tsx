// src/layouts/ClientLayout.tsx
import { FC, ReactNode } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Client/Sidebar";
import Navbar from "./Client/Navbar";

interface ClientLayoutProps {
  children?: ReactNode;
}

const ClientLayout: FC<ClientLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      {/* Fixed sidebar - 205px width */}
      <div className="fixed left-0 top-0 h-full w-[225px] z-10">
        <Sidebar />
      </div>

      {/* Main content area */}
      <div className="ml-[225px] flex flex-col flex-1">
        {/* Navbar */}
        <Navbar />

        {/* Page content */}
        <div className="flex-1 overflow-y-auto">{children || <Outlet />}</div>
      </div>
    </div>
  );
};

export default ClientLayout;
