import { useTranslation } from 'react-i18next';
import { EMAIL_REGEX } from '@/constants';

const useIsValidEmail = (value: string, message?: string): string => {
    const { t } = useTranslation();

    if (!(value && EMAIL_REGEX.test(value))) {
        return message ?? t('validation.email');
    }
    return '';
};

export default useIsValidEmail;
