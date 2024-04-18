import axios, { AxiosError, AxiosRequestConfig } from 'axios';

const fetch: Function = async (options: AxiosRequestConfig, isPrivate = true) => {
    try {
        if (isPrivate) {
            const token = 'Bearer {token}';
            options.headers = options.headers || {};
            options.headers.Authorization = token;
            options.withCredentials = true;
            return await axios(options);
        } else {
            options.headers = options.headers || {};
            return await axios(options);
        }
    } catch (error) {
        if ((error as AxiosError).response?.status === 401 && isPrivate) {
            localStorage.removeItem('token');
            // returnToLogin();
        }
        throw error as AxiosError;
    }
};

export default fetch;
