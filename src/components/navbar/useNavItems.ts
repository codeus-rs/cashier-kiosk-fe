import { FunctionComponent, SVGProps } from 'react';
import { useTranslation } from 'react-i18next';
import { ReactComponent as DashboardIcon } from '@/assets/icons/navbar/dashboard.svg';
export const useNavbarItems = (): Array<{
    title: string;
    link: string;
    icon?: FunctionComponent<SVGProps<SVGSVGElement>>;
}> => {
    const { t } = useTranslation();

    return [
        {
            title: t('pages.dashboard.title'),
            link: '/',
            icon: DashboardIcon,
        },
        {
            title: t('pages.productManagement.title'),
            link: '/product-management',
            icon: DashboardIcon,
        },
        {
            title: t('pages.userManagement.title'),
            link: '/user-management',
            icon: DashboardIcon,
        },
        {
            title: t('pages.kioskManagement.title'),
            link: '/kiosk-management',
            icon: DashboardIcon,
        },
        {
            title: t('pages.orders.title'),
            link: '/orders',
            icon: DashboardIcon,
        },
        {
            title: t('pages.reports.title'),
            link: '/reports',
            icon: DashboardIcon,
        },
        {
            title: t('pages.exports.title'),
            link: '/exports',
            icon: DashboardIcon,
        },
    ];
};
