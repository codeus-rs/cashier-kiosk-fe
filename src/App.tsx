import { getRoutes } from '@/routes';
import { useStore } from '@/store';
import isPropValid from '@emotion/is-prop-valid';
import { FunctionComponent } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { StyleSheetManager, ThemeProvider } from 'styled-components';
import { theme } from './global/theme';

const App: FunctionComponent = () => {
    const accessToken = useStore((store) => store.accessToken);
    const userIsLoggedIn = !!accessToken;
    const availableRoutes = getRoutes(userIsLoggedIn);
    const router = createBrowserRouter(availableRoutes);

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
