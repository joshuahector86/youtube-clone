import React, { ReactNode } from "react";
import Topbar from "./topbar";
import Sidebar from "./sidebar";
interface PageProps {
  children: ReactNode;
}

const Page: React.FC<PageProps> = ({ children }) => {
  return (
    <div style={{ height: "100vh", overflow: "hidden" }}>
      <Topbar />
      <div className="flex" style={{ height: "100vh" }}>
        <Sidebar />
        <div className="p-8 mb-[5rem] w-screen " style={{ overflowY: "auto" }}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Page;
