import { useTranslation } from 'react-i18next';
import useIsNumber from './useIsNumber';

const useMinValue = (value: any, minValue: number, message?: string): string => {
    const { t } = useTranslation();

    const isNumberValidationResult = useIsNumber(value, message);
    if (isNumberValidationResult) {
        return isNumberValidationResult;
    }
    if (value <= minValue) {
        return message ?? `${t('validation.minValue')} ${minValue}`;
    }
    return '';
};

export default useMinValue;
