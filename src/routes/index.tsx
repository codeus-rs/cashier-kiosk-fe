import { RouteObject } from 'react-router-dom';
import Typography from '@/pages/typography';
import Login from '@/pages/login';
import ForgotPassword from '@/pages/forgotPassword';
import UserManagement from '@/pages/userManagement';
import KioskManagement from '@/pages/kioskManagement';
import Orders from '@/pages/orders';
import Reports from '@/pages/reports';
import Exports from '@/pages/exports';
import Dashboard from '@/pages/dashboard';
import NotFound from '@/pages/notFound';
import MyProfile from '@/pages/myProfile';
import ResetPassword from '@/pages/resetPassword';
import List from '@/pages/productManagement/list';
import Details from '@/pages/productManagement/detail';

const protectedRoutes: RouteObject[] = [
    { path: '/', element: <Dashboard /> },
    { path: '/product-management', element: <List /> },
    { path: '/product-details/:productId', element: <Details /> },
    { path: '/user-management', element: <UserManagement /> },
    { path: '/kiosk-management', element: <KioskManagement /> },
    { path: '/my-profile', element: <MyProfile /> },
    { path: '/orders', element: <Orders /> },
    { path: '/reports', element: <Reports /> },
    { path: '/exports', element: <Exports /> },
];

const publicRoutes: RouteObject[] = [
    { path: '/login', element: <Login /> },
    { path: '/forgot-password', element: <ForgotPassword /> },
    { path: '/reset-password', element: <ResetPassword /> },
    { path: '*', element: <NotFound /> },
];

const commonRoutes: RouteObject[] = [{ path: '/typography', element: <Typography /> }];

export const getRoutes = (isUserLoggedIn: boolean): RouteObject[] =>
    isUserLoggedIn ? [...protectedRoutes, ...commonRoutes] : [...protectedRoutes, ...publicRoutes, ...commonRoutes];
