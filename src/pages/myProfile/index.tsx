import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

const MyProfile: FunctionComponent = () => {
    const { t } = useTranslation();

    return (
        <div className="page">
            <h3>{t('pages.myProfile.title')}</h3>
        </div>
    );
};
export default MyProfile;
