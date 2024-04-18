import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import PageTitle from '@/components/pageTitle';
import { ReactComponent as DashboardIcon } from '@/assets/icons/navbar/dashboard.svg';
import KioskCard from '@/components/kioskCard';
import { StyledDashboard } from './style';

const Dashboard: FunctionComponent = () => {
    const { t } = useTranslation();

    return (
        <StyledDashboard className="page">
            <PageTitle title={t('pages.dashboard.title')} icon={<DashboardIcon />} />
            <div className="items">
                <KioskCard title="Kiosk" subtitle="Subtitle" content="Content" bottomTitle="Bottom title" />
                <KioskCard title="Kiosk" subtitle="Subtitle" content="Content" bottomTitle="Bottom title" />
                <KioskCard title="Kiosk" subtitle="Subtitle" content="Content" bottomTitle="Bottom title" />
                <KioskCard title="Kiosk" subtitle="Subtitle" content="Content" bottomTitle="Bottom title" />
            </div>
        </StyledDashboard>
    );
};
export default Dashboard;
