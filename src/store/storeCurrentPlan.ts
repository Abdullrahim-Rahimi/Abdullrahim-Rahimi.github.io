import { create } from 'zustand';

interface ICurrentPlan {
  plan: string;
  price: string;
  setPricing: (price: string) => void;

  changePlan: (store: string) => void;
}

export const useCurrentPlan = create<ICurrentPlan>((set) => ({
  plan: '',
  price: '',
  changePlan: (choosePage: string) => {
    set(() => ({
      plan: choosePage,
    }));
  },
  setPricing: (price: string) => {
    set(() => ({
      price,
    }));
  },
}));
