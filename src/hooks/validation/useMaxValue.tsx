import { useTranslation } from 'react-i18next';
import useIsNumber from './useIsNumber';

const useMaxValue = (value: number, maxValue: number, message?: string): string => {
    const { t } = useTranslation();

    const isNumberValidationResult = useIsNumber(value, message);
    if (isNumberValidationResult) {
        return isNumberValidationResult;
    }
    if (value >= maxValue) {
        return message ?? `${t('validation.maxValue')} ${maxValue}`;
    }
    return '';
};

export default useMaxValue;
