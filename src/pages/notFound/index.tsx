import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

const NotFound: FunctionComponent = () => {
    const { t } = useTranslation();

    return (
        <div className="page">
            <h1>{t('pages.notFound.title')}</h1>
        </div>
    );
};
export default NotFound;
