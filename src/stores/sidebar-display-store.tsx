import { create } from "zustand";

interface SideBarDisplay {
  isDisplay: boolean;
  setIsDisplay: (value: boolean) => void;
}

const useSidebarDisplayStore = create<SideBarDisplay>((set) => ({
  isDisplay: true,
  setIsDisplay: (value: boolean) => set({ isDisplay: value }),
}));

export { useSidebarDisplayStore };
