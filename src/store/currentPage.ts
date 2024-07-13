import { create } from 'zustand';

interface IPageStore {
  page: string;
  changePage: (newLang: string) => void;
}

export const useChangePage = create<IPageStore>((set) => ({
  page: '/business',
  changePage: (choosePage: string) => {
    set(() => ({
      page: choosePage,
    }));
  },
}));
