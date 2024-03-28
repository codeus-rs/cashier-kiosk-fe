import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

const NotFound: FunctionComponent = () => {
    const { t } = useTranslation();

    return (
        <>
            <h1>{t('pages.notFound.title')}</h1>
        </>
    );
};
export default NotFound;
