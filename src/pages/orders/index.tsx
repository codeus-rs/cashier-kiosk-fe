import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

const Orders: FunctionComponent = () => {
    const { t } = useTranslation();

    return (
        <div>
            <h1>{t('pages.orders.title')}</h1>
        </div>
    );
};
export default Orders;
