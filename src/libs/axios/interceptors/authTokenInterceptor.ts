import { useStore } from '@/store';
import { InternalAxiosRequestConfig } from 'axios';

export const authTokenInterceptor = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig<any> => {
    const token = useStore.getState().accessToken;

    if (token) {
        config.headers.authorization = `Bearer ${token}`;
    }
    config.headers.Accept = 'application/json';
    return config;
};
