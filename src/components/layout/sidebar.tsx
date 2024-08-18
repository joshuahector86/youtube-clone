import { sidebarUrls1, sidebarUrls2 } from "@/utils/urls";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const currentLink = (path: string): boolean => {
    return path === "/";
  };
  return (
    <div className="p-2  flex flex-col gap-1 ">
      {sidebarUrls1.map((link) => (
        <Link
          key={link.name}
          to={link.href}
          className={`rounded flex gap-2 items-center py-2 px-4 text-xl 
            hover:bg-[#717171] w-full min-w-[16rem] ${
              currentLink(link.href) ? "bg-[#717171]" : ""
            }`}
        >
          <img src={link.icon} alt="icon-for-link" />
          {link.name}
        </Link>
      ))}
      <div className="w-full  border-muted-foreground border-b "></div>
      {sidebarUrls2.map((link) => (
        <Link
          key={link.name}
          to={link.href}
          className={`rounded flex gap-2 items-center py-2 px-4 text-xl 
           w-full min-w-[16rem] `}
        >
          <img src={link.icon} alt="icon-for-link" />
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
