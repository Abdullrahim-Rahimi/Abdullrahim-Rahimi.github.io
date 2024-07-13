import { create } from 'zustand';

interface IChooseTabs {
  tabsTitle: string;
  changeTabs: (newLang: string) => void;
}

export const useChooseTabs = create<IChooseTabs>((set) => ({
  tabsTitle: '',
  changeTabs: (chooseTabs: string) => {
    set(() => ({
      tabsTitle: chooseTabs,
    }));
  },
}));
