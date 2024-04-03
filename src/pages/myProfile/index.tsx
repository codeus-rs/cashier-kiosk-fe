import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

const MyProfile: FunctionComponent = () => {
    const { t } = useTranslation();

    return (
        <div>
            <h1>{t('pages.myProfile.title')}</h1>
        </div>
    );
};
export default MyProfile;
