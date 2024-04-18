const apiUrl = process.env.REACT_APP_API_URL;

const routes = {
    auth: {
        login: `${apiUrl}/auth/login`,
        logout: `${apiUrl}/auth/logout`,
        forgotPassword: `${apiUrl}/auth/forgot/password`,
        resetPassword: `${apiUrl}/auth/reset/password`,
    },
    profile: {
        my: `${apiUrl}/users/me`,
    },
    users: {
        list: `${apiUrl}/users`,
        createUser: `${apiUrl}/users`,
        editUser: (id: string) => `${apiUrl}/users/${id}`,
        deleteUser: (id: string) => `${apiUrl}/users/${id}`,
    },
};

export default routes;
