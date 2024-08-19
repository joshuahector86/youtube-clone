import { create } from "zustand";

interface DialogDisplay {
  isDialogDisplay: boolean;
  setIsDialogDisplay: (value: boolean) => void;
}

const useDialogDisplayStore = create<DialogDisplay>((set) => ({
  isDialogDisplay: false,
  setIsDialogDisplay: (value: boolean) => set({ isDialogDisplay: value }),
}));

export { useDialogDisplayStore };
