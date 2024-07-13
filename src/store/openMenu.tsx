import { create } from 'zustand';

interface IOpenMenu {
  isOpenMenu: boolean;
  toggleOpenMenu: (bol: boolean) => void;
}

export const useOpenMenu = create<IOpenMenu>((set) => ({
  isOpenMenu: false,
  toggleOpenMenu: (bol: boolean) => {
    set(() => ({ isOpenMenu: bol }));
  },
}));
