import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

const Exports: FunctionComponent = () => {
    const { t } = useTranslation();

    return (
        <div>
            <h1>{t('pages.exports.title')}</h1>
        </div>
    );
};
export default Exports;
