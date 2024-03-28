import { User } from '../user';

export type LoginDto = {
    email: string;
    password: string;
};

export type LoginResponse = {
    accessToken: string;
    user: User;
};
