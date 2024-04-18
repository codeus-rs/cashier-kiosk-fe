import { User } from '@/types/user';

export type AuthSlice = {
    accessToken: string | null;
    user: User | string;
    saveToken: (accessToken) => void;
    saveUser: (user: User) => void;
    logout: () => void;
};

export const authSlice = (set): AuthSlice => ({
    accessToken: null,
    user: 'da',
    saveToken: (accessToken) => set((state) => ({ ...state, accessToken })),
    saveUser: (user) => set((state) => ({ ...state, user })),
    logout: () => set({ accessToken: null, user: null }),
});
