import { Input } from "@/components/ui/input";
import {
  Bell,
  CircleUser,
  Menu,
  MicIcon,
  Plus,
  SearchIcon,
  Youtube,
} from "lucide-react";

const Topbar = () => {
  return (
    <div className="flex px-4 py-2 justify-between items-center">
      <div className="px-2 flex gap-6 items-center">
        <div>
          <Menu />
        </div>
        <div className="flex gap-1 items-center">
          <Youtube color="red" size={40} />
          CloneTube
        </div>
      </div>
      <SearchBar />
      <div className="flex gap-4">
        <Plus />
        <Bell />
        <CircleUser />
      </div>
    </div>
  );
};

const SearchBar = () => {
  return (
    <div className="flex gap-2 items-center">
      <div className="border rounded-full flex items-center overflow-hidden">
        <Input className="border-r w-[40rem]" placeholder="Search..." />
        <SearchIcon className="bg-[#2d2c2c] w-10 h-10 p-2" />
      </div>
      <MicIcon className="bg-[#2d2c2c] rounded-full w-10 h-10 p-2" />
    </div>
  );
};

export default Topbar;
