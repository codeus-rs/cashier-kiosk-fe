import { create } from 'zustand';

interface GlobalState {
    isNavMenuVisible: boolean;
}

const useGlobalState = create<GlobalState>((_set) => ({
    isNavMenuVisible: true,
}));

export default useGlobalState;
