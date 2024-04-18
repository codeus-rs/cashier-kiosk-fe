import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import PageTitle from '@/components/pageTitle';
import { ReactComponent as KioskIcon } from '@/assets/icons/navbar/kiosk.svg';

const KioskManagement: FunctionComponent = () => {
    const { t } = useTranslation();

    return (
        <div className="page">
            <PageTitle title={t('pages.kioskManagement.title')} icon={<KioskIcon />} />
        </div>
    );
};
export default KioskManagement;
