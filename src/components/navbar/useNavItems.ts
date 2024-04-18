import { FunctionComponent, SVGProps } from 'react';
import { useTranslation } from 'react-i18next';
import { ReactComponent as DashboardIcon } from '@/assets/icons/navbar/dashboard.svg';
import { ReactComponent as KioskIcon } from '@/assets/icons/navbar/kiosk.svg';
import { ReactComponent as UsersIcon } from '@/assets/icons/navbar/users.svg';
import { ReactComponent as ContentIcon } from '@/assets/icons/navbar/content.svg';
import { ReactComponent as OrdersIcon } from '@/assets/icons/navbar/orders.svg';
import { ReactComponent as ExportsIcon } from '@/assets/icons/navbar/exports.svg';
import { ReactComponent as ReportsIcon } from '@/assets/icons/navbar/reports.svg';
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
            icon: ContentIcon,
        },
        {
            title: t('pages.userManagement.title'),
            link: '/user-management',
            icon: UsersIcon,
        },
        {
            title: t('pages.kioskManagement.title'),
            link: '/kiosk-management',
            icon: KioskIcon,
        },
        {
            title: t('pages.orders.title'),
            link: '/orders',
            icon: OrdersIcon,
        },
        {
            title: t('pages.exports.title'),
            link: '/exports',
            icon: ExportsIcon,
        },
        {
            title: t('pages.reports.title'),
            link: '/reports',
            icon: ReportsIcon,
        },
    ];
};
