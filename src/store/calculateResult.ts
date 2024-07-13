import { create } from 'zustand';
interface ICalculateState {
  staff: any;
  branch: any;
  country: string;
  provideHome: boolean;
  assistantOnboard: boolean;
  available: boolean;
  setCalculate: (newState: any) => void;
  setDefaults: () => void;
}

export const useCalculate = create<ICalculateState>((set) => ({
  staff: '1',
  branch: '1',
  country: '1',
  provideHome: false,
  assistantOnboard: false,
  available: false,
  setCalculate: (newState: any) => {
    set((state) => ({
      ...state,
      ...newState,
    }));
  },
  setDefaults: () => {
    set({
      staff: '1',
      branch: '1',
      country: '1',
      provideHome: false,
      assistantOnboard: false,
      available: false,
    });
  },
}));
