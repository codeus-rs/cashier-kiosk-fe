import { AxiosError, AxiosResponse } from 'axios';

type ErrorResponseData = {
    message?: string;
};
export const errorResponseInterceptor = async (error: AxiosError<ErrorResponseData>): Promise<AxiosResponse> => {
    return Promise.reject(error);
};
