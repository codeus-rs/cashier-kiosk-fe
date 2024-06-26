import { Navigate, RouteObject } from 'react-router-dom';
import Typography from '@/pages/typography';
import Login from '@/pages/login';
import ForgotPassword from '@/pages/forgotPassword';
import ProductManagement from '@/pages/productManagement';
import UserManagement from '@/pages/userManagement';
import KioskManagement from '@/pages/kioskManagement';
import Orders from '@/pages/orders';
import Reports from '@/pages/reports';
import Exports from '@/pages/exports';

const protectedRoutes: RouteObject[] = [
    { path: '/product-management', element: <ProductManagement /> },
    { path: '/user-management', element: <UserManagement /> },
    { path: '/kiosk-management', element: <KioskManagement /> },
    { path: '/orders', element: <Orders /> },
    { path: '/reports', element: <Reports /> },
    { path: '/exports', element: <Exports /> },
];

const publicRoutes: RouteObject[] = [
    { path: '/login', element: <Login /> },
    { path: '/forgot-password', element: <ForgotPassword /> },
    { path: '/', element: <Navigate to="/typography" /> },
];

const commonRoutes: RouteObject[] = [{ path: '/typography', element: <Typography /> }];

export const getRoutes = (isUserLoggedIn: boolean): RouteObject[] =>
    isUserLoggedIn ? [...protectedRoutes, ...commonRoutes] : [...publicRoutes, ...commonRoutes];
