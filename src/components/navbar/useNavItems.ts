import { useTranslation } from 'react-i18next';
export const useNavbarItems = (): Array<{ title: string; link: string }> => {
    const { t } = useTranslation();

    return [
        {
            title: t('pages.dashboard.title'),
            link: '/',
        },
        {
            title: t('pages.productManagement.title'),
            link: '/product-management',
        },
        {
            title: t('pages.userManagement.title'),
            link: '/user-management',
        },
        {
            title: t('pages.kioskManagement.title'),
            link: '/kiosk-management',
        },
        {
            title: t('pages.orders.title'),
            link: '/orders',
        },
        {
            title: t('pages.reports.title'),
            link: '/reports',
        },
        {
            title: t('pages.exports.title'),
            link: '/exports',
        },
    ];
};
