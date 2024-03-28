import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

const ProductManagement: FunctionComponent = () => {
    const { t } = useTranslation();

    return (
        <div>
            <h1>{t('pages.productManagement.title')}</h1>
        </div>
    );
};
export default ProductManagement;
