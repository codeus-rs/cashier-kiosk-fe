import { UseBoundStore, create, StoreApi } from 'zustand';
type LanguageState = {
    currentLang: object;
    currentLangName: string;
};

const languageStore = (): UseBoundStore<StoreApi<LanguageState>> => {
    const localStorageLang = localStorage.getItem('language') || 'English';
    return create<LanguageState>(() => ({
        currentLang: {},
        currentLangName: localStorageLang,
    }));
};

const useStore = languageStore();

export default useStore;
