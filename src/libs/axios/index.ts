import Axios from 'axios';
import { authTokenInterceptor } from './interceptors/authTokenInterceptor';
import { errorResponseInterceptor } from './interceptors/errorResponseInterceptor';
import { extractResponseDataInterceptor } from './interceptors/extractResponseDataInterceptor';

const API_URL = process.env.REACT_APP_API_URL as string;
export const axios = Axios.create({
    baseURL: API_URL,
});

axios.interceptors.request.use(authTokenInterceptor);

axios.interceptors.response.use(extractResponseDataInterceptor, errorResponseInterceptor);
