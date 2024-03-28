import { useTranslation } from 'react-i18next';

const useMinLength = (value: string, minLength: number, message?: string): string => {
    const { t } = useTranslation();

    if (!value || value?.length < minLength) {
        return message ?? ` ${t('validation.minLength')} ${minLength} ${t('validation.charactersLong')}`;
    }
    return '';
};

export default useMinLength;
