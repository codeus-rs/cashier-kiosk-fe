import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

const KioskManagement: FunctionComponent = () => {
    const { t } = useTranslation();

    return (
        <div>
            <h1>{t('pages.kioskManagement.title')}</h1>
        </div>
    );
};
export default KioskManagement;
