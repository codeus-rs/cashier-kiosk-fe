import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

const Dashboard: FunctionComponent = () => {
    const { t } = useTranslation();

    return (
        <div>
            <h1>{t('pages.dashboard.title')}</h1>
        </div>
    );
};
export default Dashboard;
