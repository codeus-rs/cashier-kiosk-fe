import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import PageTitle from '@/components/pageTitle';
import { ReactComponent as UsersIcon } from '@/assets/icons/navbar/users.svg';

const UserManagement: FunctionComponent = () => {
    const { t } = useTranslation();

    return (
        <div className="page">
            <PageTitle title={t('pages.userManagement.title')} icon={<UsersIcon />} />
        </div>
    );
};
export default UserManagement;
