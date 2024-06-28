import { create } from 'zustand';

interface ILoadingStore {
  isLoading: boolean;
  array: any[];
  handleLoadingStatus: (status: boolean) => void;
  handleArray: (tmp: any) => void;
}

export const useLoadingStore = create<ILoadingStore>((set) => ({
  isLoading: false,
  array: [],
  handleLoadingStatus: (status: boolean) => {
    set(() => ({ isLoading: status }));
  },
  handleArray: (tmp: any) => {
    set(() => ({
      array: [...tmp],
    }));
  },
}));
