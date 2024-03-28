import { FunctionComponent } from 'react';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { StyleSheetManager, ThemeProvider } from 'styled-components';
import { getRoutes } from '@/routes';
import { useStore } from '@/store';
import isPropValid from '@emotion/is-prop-valid';
import { theme } from '@/global/theme';
import Navbar from '@/components/navbar';

const App: FunctionComponent = () => {
    const accessToken = useStore((store) => store.accessToken);
    const userIsLoggedIn = !!accessToken;
    const availableRoutes = getRoutes(userIsLoggedIn);

    const AppLayout = (): JSX.Element => (
        <>
            {userIsLoggedIn ? <Navbar /> : <></>}
            <Outlet />
        </>
    );

    const router = createBrowserRouter([{ element: <AppLayout />, children: availableRoutes }]);

    return (
        <ThemeProvider theme={theme}>
            <StyleSheetManager shouldForwardProp={isPropValid}>
                <RouterProvider router={router} />
                <ToastContainer />
            </StyleSheetManager>
        </ThemeProvider>
    );
};

export default App;
