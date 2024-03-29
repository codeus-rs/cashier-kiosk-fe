import { useTranslation } from 'react-i18next';

const useIsNumber = (value: string | number, message?: string): string => {
    const { t } = useTranslation();

    if (Number.isNaN(value ?? Number.NaN)) {
        return message ?? t('validation.number');
    }
    return '';
};

export default useIsNumber;
