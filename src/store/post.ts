import { create } from 'zustand';

interface ILoadingStore {
  post: any;
  handlId: any;
  setHandleId: (tmp: any) => void;
  handlePost: (tmp: any) => void;
  markDownPost: any;
  setMarkdownPost: (tmp: any) => void;
}

export const usePostStore = create<ILoadingStore>((set) => ({
  post: {},
  markDownPost: {},
  handlId: '',
  setHandleId: (id: any) => {
    set(() => ({
      handlId: id,
    }));
  },
  handlePost: (item: any) => {
    set(() => ({
      post: item,
    }));
  },
  setMarkdownPost: (item: any) => {
    set(() => ({
      markDownPost: item,
    }));
  },
}));
