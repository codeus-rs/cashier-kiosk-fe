import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

const ForgotPassword: FunctionComponent = () => {
    const { t } = useTranslation();

    return (
        <div>
            <h1>{t('pages.forgotPassword.title')}</h1>
        </div>
    );
};
export default ForgotPassword;
