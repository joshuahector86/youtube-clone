import {
  sidebarUrls1,
  sidebarUrls2,
  sidebarUrls3,
  sidebarUrls4,
  sidebarUrls5,
  subscribedChannels,
} from "@/utils/urls";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Copyright from "../one-offs/copyright";
import { useSidebarDisplayStore } from "@/stores/sidebar-display-store";

const Sidebar = () => {
  const isHome = (linkName: string): boolean => {
    return linkName === "Home";
  };
  const { isDisplay } = useSidebarDisplayStore();
  return (
    <>
      {isDisplay ? (
        <div className="p-2 pb-20 flex flex-col gap-1 overflow-y-auto min-w-[16rem]">
          {/* FIRST SET OF URLS */}
          {sidebarUrls1.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`rounded flex gap-6 items-center py-2 px-4 hover:bg-[#717171] hover:cursor-default 
             w-full  ${isHome(link.name) ? "bg-[#717171]" : ""}`}
            >
              <img src={link.icon} alt="icon-for-link" className="w-6" />
              {link.name}
            </Link>
          ))}
          <div className="w-full  border-muted-foreground border-b " />
          {/* SECOND SET OF URLS */}
          <h1 className=" text-md p-2 flex items-center gap-2">
            You
            <ChevronRight />
          </h1>
          {sidebarUrls2.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={` hover:bg-[#717171] hover:cursor-default rounded flex gap-6 items-center py-2 px-4  
           w-full `}
            >
              <img src={link.icon} alt="icon-for-link" className="w-6" />
              {link.name}
            </Link>
          ))}
          <div className="w-full  border-muted-foreground border-b " />
          {/* SUBSCRIPTIONS */}
          <h1 className=" text-md p-2 flex items-center gap-2">
            Subscriptions
          </h1>
          {subscribedChannels.map((channel) => (
            <div className="hover:bg-[#717171] hover:cursor-default flex px-4 gap-6 items-center p-2">
              <img
                key={channel.name}
                src={channel.photo}
                className="flex-shrink-0 w-8 h-8 rounded-full"
              />
              <p className="truncate">{channel.name}</p>
            </div>
          ))}
          <div className="w-full  border-muted-foreground border-b " />
          {/* EXPLORE */}
          <h1 className=" text-md p-2 flex items-center gap-2">Explore</h1>
          {sidebarUrls3.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`hover:bg-[#717171] hover:cursor-default rounded flex gap-6 items-center py-2 px-4  
           w-full `}
            >
              <img src={link.icon} alt="icon-for-link" className="w-6" />
              {link.name}
            </Link>
          ))}
          <div className="w-full  border-muted-foreground border-b " />
          {/* MORE FROM CLONETUBE */}
          <h1 className=" text-md p-2 flex items-center gap-2">
            More from CloneTube
          </h1>
          {sidebarUrls4.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`hover:bg-[#717171] hover:cursor-default rounded flex gap-6 items-center py-2 px-4  
           w-full `}
            >
              <img src={link.icon} alt="icon-for-link" className="w-6" />
              {link.name}
            </Link>
          ))}
          <div className="w-full  border-muted-foreground border-b " />
          {/* SETTINGS */}
          {sidebarUrls5.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`hover:bg-[#717171] hover:cursor-default rounded flex gap-6 items-center py-2 px-4  
           w-full `}
            >
              <img src={link.icon} alt="icon-for-link" className="w-6" />
              {link.name}
            </Link>
          ))}
          <div className="w-full  border-muted-foreground border-b " />
          <Copyright />
        </div>
      ) : (
        <HamburgerMenuDisplay />
      )}
    </>
  );
};

const HamburgerMenuDisplay = () => {
  return (
    <div className="p-2  items-center">
      {sidebarUrls1.map((link) => (
        <Link
          to={link.href}
          className="flex flex-col gap-2 items-center hover:bg-[#717171]/20 rounded p-1 py-4 text-nowrap"
        >
          <img src={link.icon} alt="link-icon" />
          <p className="text-xs">{link.name}</p>
        </Link>
      ))}
    </div>
  );
};

export const PhoneMenuDisplay = () => {
  return (
    <div className="flex justify-between items-center">
      {sidebarUrls1.map((link) => (
        <Link
          to={link.href}
          className="flex flex-col p-4 gap-2 items-center hover:bg-[#717171]/20 rounded "
        >
          <img src={link.icon} alt="link-icon" />
          <p className="text-xs">{link.name}</p>
        </Link>
      ))}
    </div>
  );
};
export default Sidebar;
