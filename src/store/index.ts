import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { AuthSlice, authSlice } from './auth';

export type Store = AuthSlice;

const store = (set: any): AuthSlice => ({
    ...authSlice(set),
});

export const useStore = create(
    devtools(
        persist(store, {
            name: 'store',
            partialize: (state) => ({
                accessToken: state.accessToken,
            }),
            merge: (persisted: Store, current) => {
                return { ...current, accessToken: persisted.accessToken };
            },
        }),
    ),
);
