import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

const Reports: FunctionComponent = () => {
    const { t } = useTranslation();

    return (
        <div>
            <h1>{t('pages.reports.title')}</h1>
        </div>
    );
};
export default Reports;
