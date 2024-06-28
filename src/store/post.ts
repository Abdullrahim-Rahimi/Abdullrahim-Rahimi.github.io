import { create } from 'zustand';

interface ILoadingStore {
  post: any;
  handlePost: (tmp: any) => void;
}

export const usePostStore = create<ILoadingStore>((set) => ({
  post: {},
  handlePost: (item: any) => {
    set(() => ({
      post: item,
    }));
  },
}));
