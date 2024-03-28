import { AxiosResponse } from 'axios';

export const extractResponseDataInterceptor = (response: AxiosResponse): AxiosResponse => response.data;
