import {
  Bell,
  CircleUser,
  Menu,
  MicIcon,
  Plus,
  SearchIcon,
} from "lucide-react";
import youtubeIcon from "../../assets/icons/youtubeicon.jpg";
import { useSidebarDisplayStore } from "@/stores/sidebar-display-store";
import { Button } from "../ui/button";

const Topbar = () => {
  const { isDisplay, setIsDisplay } = useSidebarDisplayStore();

  return (
    <div className="flex px-4 py-2 justify-between items-center">
      <div className="px-2 flex gap-6 items-center">
        <div>
          <Button
            variant={"ghost"}
            className="hover:bg-[#717171]/20 -ml-2 p-2 rounded-full"
            onClick={() => {
              setIsDisplay(!isDisplay);
            }}
          >
            <Menu />
          </Button>
        </div>
        <div className="flex gap-1 items-center">
          <img src={youtubeIcon} className="w-10 h-10" alt="youtube-icon" />
          <p className="font-semibold text-2xl">CloneTube</p>
        </div>
      </div>
      <SearchBar />
      <div className="flex gap-8">
        <Plus className="hover:cursor-default hover:text-[#717171]" />
        <Bell className="hover:cursor-default hover:text-[#717171]" />
        <CircleUser className="hover:cursor-default hover:text-[#717171]" />
      </div>
    </div>
  );
};

const SearchBar = () => {
  return (
    <div className="flex gap-2 items-center">
      <div className="border rounded-full flex items-center overflow-hidden">
        <input
          className="bg-transparent outline-none px-4 w-full lg:w-[40rem] "
          placeholder="Search..."
        />
        <SearchIcon className="bg-[#2d2c2c] w-10 h-10 border-l ml-2 p-2" />
      </div>
      <MicIcon className="bg-[#2d2c2c] rounded-full w-10 h-10 p-2" />
    </div>
  );
};

export default Topbar;
