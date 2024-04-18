import { User } from '../user';

export type LoginDto = {
    email: string;
    password: string;
};

export type LoginResponse = {
    accessToken: string;
    user: User;
};
export type ForgotPasswordDto = {
    email: string;
};
export type ForgotPasswordResponse = {
    token: string;
};

export type ResetPasswordDto = {
    password: string;
    confirmPassword: string;
};
export type ResetPasswordResponse = {
    success: boolean;
};
