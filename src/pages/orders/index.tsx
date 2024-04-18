import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import PageTitle from '@/components/pageTitle';
import { ReactComponent as OrdersIcon } from '@/assets/icons/navbar/orders.svg';

const Orders: FunctionComponent = () => {
    const { t } = useTranslation();

    return (
        <div className="page">
            <PageTitle title={t('pages.orders.title')} icon={<OrdersIcon />} />
        </div>
    );
};
export default Orders;
