import { FunctionComponent } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { StyleSheetManager, ThemeProvider } from 'styled-components';
import { getRoutes } from '@/routes';
// import { useStore } from '@/store';
import useGlobalState from '@/store/global';
import isPropValid from '@emotion/is-prop-valid';
import { theme } from '@/global/theme';
import MainLayout from '@/components/layouts/mainLayout';

const App: FunctionComponent = () => {
    const { isNavbarCollapsed } = useGlobalState();
    // const accessToken = useStore((store) => store.accessToken);
    const userIsLoggedIn = location.pathname !== '/login';
    // const userIsLoggedIn = !!accessToken;
    const availableRoutes = getRoutes(userIsLoggedIn);

    const router = createBrowserRouter([{ element: <MainLayout />, children: availableRoutes }]);

    return (
        <ThemeProvider theme={theme}>
            <StyleSheetManager shouldForwardProp={isPropValid}>
                <div className={`app ${isNavbarCollapsed ? 'nav-menu-collapsed' : ''}`.trim()}>
                    <RouterProvider router={router} />
                </div>
                <ToastContainer />
            </StyleSheetManager>
        </ThemeProvider>
    );
};

export default App;
