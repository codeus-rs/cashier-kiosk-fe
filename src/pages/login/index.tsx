import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

const Login: FunctionComponent = () => {
    const { t } = useTranslation();

    return (
        <div>
            <h1>{t('pages.login.title')}</h1>
        </div>
    );
};
export default Login;
