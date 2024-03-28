import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

const UserManagement: FunctionComponent = () => {
    const { t } = useTranslation();

    return (
        <div>
            <h1>{t('pages.userManagement.title')}</h1>
        </div>
    );
};
export default UserManagement;
