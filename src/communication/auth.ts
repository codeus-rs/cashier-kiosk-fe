import axios from 'axios';
import { LoginResponse, ForgotPasswordResponse, ResetPasswordResponse } from '@/types/communication/auth';
import routes from './routes';
import fetch from './fetch';

export const loginUser = async ({ email, password }): Promise<LoginResponse> => {
    return fetch({
        method: 'get',
        url: routes.auth.login,
        headers: { 'Content-Type': 'application/json' },
        data: { email: email, password: password },
    });
};

export const forgotPassword = async (): Promise<ForgotPasswordResponse> => {
    return fetch({
        method: 'get',
        url: routes.auth.forgotPassword,
        headers: { 'Content-Type': 'application/json' },
    });
};
export const resetPassword = async (): Promise<ResetPasswordResponse> => {
    const response = await axios.get(routes.auth.resetPassword);
    return response.data;
};
