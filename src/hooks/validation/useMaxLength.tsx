import { useTranslation } from 'react-i18next';

const useMaxLength = (value: string, maxLength: number, message?: string): string => {
    const { t } = useTranslation();

    if (value && value?.length > maxLength) {
        return message ?? `${t('validation.maxLength')} ${maxLength} ${t('validation.charactersLong')}`;
    }
    return '';
};

export default useMaxLength;
