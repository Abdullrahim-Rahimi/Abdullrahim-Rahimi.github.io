import { create } from 'zustand';

interface IChoosePath {
  patnName: string;
  bredcrumb: any;
  choosePatnName: (newLang: string) => void;
  chooseBreadcrumb: (newLang: string) => void;
  pathStrapi: string;
  choosePathStrapi: (path: string) => void;
}

export const useChoosePath = create<IChoosePath>((set) => ({
  patnName: '',
  bredcrumb: {},
  pathStrapi: '',
  choosePatnName: (chooseTabs: string) => {
    set(() => ({
      patnName: chooseTabs,
    }));
  },
  chooseBreadcrumb: (choose: any) => {
    set(() => ({
      bredcrumb: choose,
    }));
  },
  choosePathStrapi: (path: string) => {
    set(() => ({
      pathStrapi: path,
    }));
  },
}));
