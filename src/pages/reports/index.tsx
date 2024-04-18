import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import PageTitle from '@/components/pageTitle';
import { ReactComponent as ReportsIcon } from '@/assets/icons/navbar/reports.svg';

const Reports: FunctionComponent = () => {
    const { t } = useTranslation();

    return (
        <div className="page">
            <PageTitle title={t('pages.reports.title')} icon={<ReportsIcon />} />
        </div>
    );
};
export default Reports;
