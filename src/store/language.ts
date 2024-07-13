import { create } from 'zustand';

interface ILanguageStore {
  lang: string;
  changeLanguages: (newLang: string) => void;
}

export const useChangeLanguage = create<ILanguageStore>((set) => ({
  lang:
    typeof window !== 'undefined' ? localStorage.getItem('lang') || 'en' : 'en',
  changeLanguages: (newLang: string) => {
    set(() => ({
      lang: newLang,
    }));
    localStorage.setItem('lang', newLang);
    document.body.setAttribute('dir', newLang === 'ar' ? 'rtl' : 'ltr');
  },
}));

if (typeof window !== 'undefined') {
  const initialLang = localStorage.getItem('lang') || 'en';
  document.body.setAttribute('dir', initialLang === 'ar' ? 'rtl' : 'ltr');
}
