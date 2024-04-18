import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import PageTitle from '@/components/pageTitle';
import { ReactComponent as ExportsIcon } from '@/assets/icons/navbar/exports.svg';

const Exports: FunctionComponent = () => {
    const { t } = useTranslation();

    return (
        <div className="page">
            <PageTitle title={t('pages.exports.title')} icon={<ExportsIcon />} />
        </div>
    );
};
export default Exports;
