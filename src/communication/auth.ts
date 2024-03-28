import { LoginResponse } from '@/types/communication/auth';

export const loginUser = async (): Promise<LoginResponse> => {
    return MOCK_RESPONSE;
};

export const MOCK_RESPONSE: LoginResponse = {
    accessToken: '123',
    user: {
        id: 1,
        email: 'test@gmail.com',
        firstName: 'John',
        lastName: 'Doe',
    },
};
