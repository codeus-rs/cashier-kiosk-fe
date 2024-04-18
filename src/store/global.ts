import { create } from 'zustand';

type GlobalState = {
    isNavbarCollapsed: boolean;
};

const useGlobalState = create<GlobalState>((_set) => ({
    isNavbarCollapsed: false,
}));

export default useGlobalState;
