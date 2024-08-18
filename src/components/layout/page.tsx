import React, { ReactNode } from "react";
import Topbar from "./topbar";
import Sidebar, { PhoneMenuDisplay } from "./sidebar";
interface PageProps {
  children: ReactNode;
}

const Page: React.FC<PageProps> = ({ children }) => {
  return (
    <div style={{ height: "100vh", overflow: "hidden" }}>
      <div className="sm:hidden">
        <PhoneMenuDisplay />
      </div>
      <div className="hidden md:block">
        <Topbar />
      </div>
      <div className="flex" style={{ height: "100vh" }}>
        <div className="hidden sm:block overflow-auto">
          <Sidebar />
        </div>
        <div className="p-8 mb-[5rem] w-screen " style={{ overflowY: "auto" }}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Page;
